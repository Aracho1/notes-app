
var myNote = new Note();

it('note is an instance of Note', function() {
  expect(myNote instanceof Note).toEqual(true);
});

myNote.create(1, "Here is my first note")
it('returns the note text', function() {
  expect(myNote.getNoteText()).toEqual("Here is my first note")
});
