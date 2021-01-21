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
    entry.setAttribute("onclick", `showFullNoteOnClick(${noteId})`)
    // entry.setAttribute("href",`#${noteId}`);
    // entry.setAttribute("class", "tabcontent")
    entry.appendChild(document.createTextNode(noteTitle));
    document.getElementById("list").appendChild(entry);
    document.getElementById("myText").value = "";
}
function showFullNoteOnClick(noteId){
    // let hash = this.location.hash
    let cont = document.getElementById("content")
    cont.innerHTML = ''
    // let string = hash.replace('#', '');
    var fullContent = findNote(noteId)
    let div = document.createElement('div')
    let element = document.createElement('p');
    div.appendChild(element);
    div.setAttribute("class", "tabcontent")
    element.innerHTML =  fullContent;
    cont.appendChild(div);
    
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
