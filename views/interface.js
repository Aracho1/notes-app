var note = new Note;
document.getElementById("create-note").onclick = function() {


    var noteText = document.getElementById("myText").value;
    note.create(noteText);
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
    console.log("hello")
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
