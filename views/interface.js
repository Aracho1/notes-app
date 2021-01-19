var notebook = [];
document.getElementById("create-note").onclick = function() {

    var note = new Note;
    var noteText = document.getElementById("myText").value;
    note.create(noteText);
    notebook[note.getNoteTitle()] = note.getNoteText()
    var entry = document.createElement('li')
    var tag = document.createElement('a')
    let noteTitle = note.getNoteTitle();
    tag.setAttribute("id",`${noteTitle}`);
    tag.setAttribute("href",`#${noteTitle}`);
    tag.appendChild(document.createTextNode(noteTitle));
    tag.appendChild(entry);
    document.getElementById("list").appendChild(tag);
}
showFullNoteOnClick()
function showFullNoteOnClick(){
  window.addEventListener("hashchange", function(){
    var hash = this.location.hash
    var hashToString = hash.replace(/\%20/g, ' ');
    var string = hashToString.replace('#', '');
    console.log(notebook)
    console.log(notebook[string])
    var element = document.createElement('p');
    element.appendChild(document.createTextNode(notebook[string]));
    document.getElementById("content").appendChild(element);
  });
};

// function showCurrentNote (){
//   showNote(getNoteFromUrl(window.location));
// };

// function getNoteFromUrl(`#${noteTitle}`){
//   return location.hash.split("#")[1];
// };
//
// function showNote(note){
//   document
//   .getElementById("content")
//   .innerHTML = note.getNoteText();
// };

// document.getElementById("content").onclick = function() {
//
// }
