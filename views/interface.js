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
    let hash = this.location.hash
    let div = document.getElementById("content")
    div.innerHTML = ''
    let hashToString = hash.replace(/\%20/g, ' ');
    let string = hashToString.replace('#', '');
    let element = document.createElement('p');
    element.appendChild(document.createTextNode(notebook[string]));
    div.appendChild(element);
  });
}; 

function searchString(){
  console.log("im between 32 and 33")
  let myText = document.getElementById("myText").value 
  console.log(myText) 
  let bool = myText.replace(/\happy/g, 'sad');
  console.log(bool)
  // if(bool === "happy"){
  //   return true
  // } else {
  //   return false
  // }
}




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

//console.log(String.fromCodePoint());
