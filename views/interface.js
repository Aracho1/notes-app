

let id = 0;

if (localStorage.length > 0) {
  for (let i = 1; i <= localStorage.length; i++) {
    var json = JSON.parse(localStorage[i])
    var title = json["title"]
    var content = json["content"]

    console.log(title);
    console.log(content);
    // var title = note.title
    // console.log(title)
    var entry = document.createElement('button')
    entry.setAttribute("id", i);
    entry.setAttribute("onclick", `showFullNoteOnClick(${i})`)
    entry.appendChild(document.createTextNode(title));
    document.getElementById("list").appendChild(entry);
    document.getElementById("myText").value = "";
  }
}


document.getElementById("create-note").onclick = function() {
    let note = new Note;
    id++;
    let noteId = id;
    let noteText = document.getElementById("myText").value;
    var emojifiedText = changeTextToEmoji(noteText).then(function(result) {
      note.create(noteId, result);
      let noteTitle = note.getNoteTitle()
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date+' '+time;
      var notebook = {'title': noteTitle, 'content': noteText, 'time': dateTime }
      localStorage.setItem(noteId, JSON.stringify(notebook))
      var entry = document.createElement('button')
      entry.setAttribute("id", noteId);
      entry.setAttribute("onclick", `showFullNoteOnClick(${noteId})`)
      entry.appendChild(document.createTextNode(noteTitle));
      document.getElementById("list").appendChild(entry);
      document.getElementById("myText").value = "";
    });

}
function showFullNoteOnClick(noteId){
    let cont = document.getElementById("content")
    cont.innerHTML = ''
    let found = findNote(noteId)
    let time = found.time
    let text = found.content
    let div = document.createElement('div')
    let element = document.createElement('p');
    div.appendChild(element);
    div.setAttribute("class", "tabcontent")
    element.innerHTML =  "<p>"+text+"</p>" + time
    cont.appendChild(div);
};


function addToNoteBook(noteId, title, content, time) {
  notebook.push({'id': noteId, 'title': title, 'content': content, 'time': time })
}


function findNote(id){
  var notes = JSON.parse(localStorage.getItem(id));
  return notes;
}

function changeTextToEmoji(text){
  return getPostData(text).then(post => {
    let rendered = renderPost(post);
    return rendered
  }).then(function(rendered) {
    return rendered

  });
};

function playAudio(url) {
  new Audio(url).play();
}

function getPostData(wholeText) {
  return fetch("https://makers-emojify.herokuapp.com/", {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({"text": `${wholeText}`})})
  .then(response => {
      return response.json();
  })
}

function renderPost(postData) {
  let postHeadingHTML = postData.emojified_text;
  return `${postHeadingHTML}`;
}