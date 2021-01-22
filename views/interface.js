

let notebook = [];
let id = 0;

document.getElementById("create-note").onclick = function() {
    // playAudio("sheep.mp3");
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
      addToNoteBook(noteId, noteTitle, result, dateTime)
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
    var fullContent = findNote(noteId)
    var found = findNote(noteId)
    let text = found['content']
    // 
    var emojifiedText = changeTextToEmoji(text).then(function(result) {
      let time = found['time']
      let div = document.createElement('div')
      let element = document.createElement('p');
      div.appendChild(element);
      div.setAttribute("class", "tabcontent")
      element.innerHTML =  "<p>"+result+"</p>" + time
      cont.appendChild(div);
    })
};


function addToNoteBook(noteId, title, content, time) {
  notebook.push({'id': noteId, 'title': title, 'content': content, 'time': time })
}


function findNote(id){
  for(var i = 0; i < notebook.length; i++) {
    if (notebook[i]['id'] == id) {
      return notebook[i]
    }
  }
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