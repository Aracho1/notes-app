let notebook = [];
let id = 0;

document.getElementById("create-note").onclick = function() {

    let note = new Note;
    id++;
    let noteId = id;
    let noteText = document.getElementById("myText").value;
    note.create(noteId, noteText);
    let noteTitle = note.getNoteTitle()
    addToNoteBook(noteId, noteTitle, noteText)
    var entry = document.createElement('li')
    let tag = document.createElement('a')
    tag.setAttribute("id", noteId);
    tag.setAttribute("href",`#${noteId}`);
    tag.appendChild(document.createTextNode(noteTitle));
    entry.appendChild(tag);
    document.getElementById("list").appendChild(entry);
}
showFullNoteOnClick()
function showFullNoteOnClick(){
  window.addEventListener("hashchange", function(){
    let hash = this.location.hash
    let div = document.getElementById("content")
    div.innerHTML = ''
    let string = hash.replace('#', '');
    let element = document.createElement('p');
    element.appendChild(document.createTextNode(findNote(string)));
    div.appendChild(element);
  });
};


function addToNoteBook(noteId, title, content) {
  notebook.push({'id': noteId, 'title': title, 'content': content })
}


function findNote(id){
  for(var i = 0; i < notebook.length; i++) {
    if (notebook[i]['id'] == id) {
      return notebook[i]['content']
    }
  }
}
