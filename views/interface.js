var noteBook = {}
var id = 0;

document.getElementById("create-note").onclick = function() {
    var note = new Note;
    id++;
    var text = document.getElementById("myText").value;
    note.create(text);
    var noteTitle = note.getNoteTitle();
    addToNoteBook(id, noteTitle, text);

    var a = document.createElement('a');
    a.appendChild(document.createTextNode(noteTitle));

    var li = document.createElement('li');
    li.appendChild(a);
    li.setAttribute("id", id);
    li.setAttribute("onclick", `showFullNotes(${id})`)

    var list = document.getElementById("list")
    list.appendChild(li);
}

function showFullNotes(id){
  var content = document.getElementById("content")
  var fullContent = findNote(id)
  var z = document.createElement('p');
  z.innerHTML = fullContent
  content.appendChild(z);
  
};

function addToNoteBook(id, title, content) {
  noteBook.id = [title, content];
}

function findNote(id){
  return noteBook['id'][1];
}