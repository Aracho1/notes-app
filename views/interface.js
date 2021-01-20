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
    var entry = document.createElement('button')
    
    // let entry = document.createElement('a')
    entry.setAttribute("id", noteId);
    // entry.setAttribute("href",`#${noteId}`);
    entry.setAttribute("class", "tabcontent")
    entry.appendChild(document.createTextNode(noteTitle));
    document.getElementById("list").appendChild(entry);
}
showFullNoteOnClick()
function showFullNoteOnClick(noteId){
    entry.onclick = showFullNoteOnClick(`${noteId}`);
    window.addEventListener("click"
    // let hash = this.location.hash
    let div = document.getElementById("content")
    div.innerHTML = ''
    // let string = hash.replace('#', '');
    let element = document.createElement('p');
    let result = findNote(noteId)
    let z =  document.createTextNode(result)
    console.log(z)
    element.appendChild(z);
    
    div.appendChild(element);
  // });
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
