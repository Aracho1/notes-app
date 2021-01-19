
var myNote = new Note();

console.log("testing to see if myNote is an instance of Note: ")
console.log(myNote instanceof Note);
// ITS instanceof NOT instanceOf 
console.log("Can create a note")
myNote.create("Here is my first note")
console.log(expect(myNote.getNoteText()).toEqual("Here is my first note"))
console.log(expect(myNote.getNoteTitle()).toEqual("Here is my first not..."))