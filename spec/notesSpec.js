window.onload="showTestResult()";

function showTestResult() {
  var li = document.createElement("li")
  var result = document.appendChild(result)
}
var myNote = new Note();

it('note is an instance of Note', function() {
  expect(myNote instanceof Note).toEqual(true);
});

myNote.create(1, "Here is my first note")

it('It assigns the ID when the note is created', function(){
  expect(myNote.noteId).toEqual(1)
});

it('getNoteText() returns the note text', function() {
  expect(myNote.getNoteText()).toEqual("Here is my first note")
});

it('getNoteTiTle() returns the first 20 characters', function() {
  expect(myNote.getNoteTitle()).toEqual("Here is my first not...")
});

it('It should be able to truncate the the string to 20 characters',function(){
  expect(myNote.truncate("Here is my first note")).toEqual("Here is my first not...")
});

