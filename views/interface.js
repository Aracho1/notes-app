document.getElementById("create-note").onclick = function() {
    var note = document.getElementById("myText").value; 
    var entry = document.createElement('li') 
    entry.appendChild(document.createTextNode(note))
    document.getElementById("list").appendChild(entry);
}

/*
function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
} 
*/