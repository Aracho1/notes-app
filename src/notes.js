class Note {
    constructor(){
        this.noteText
        this.noteTitle
        this.TITLE_LIMIT = 20
    };

    create(text){
        this.noteText = text;
        this.noteTitle = this.truncate(text);
    };

    getNoteText(){
        return this.noteText;
    };

    getNoteTitle(){
        return this.noteTitle;
    };

    truncate(text){
        return text.substring(0, this.TITLE_LIMIT) + "...";
    };
};

class Emojis {
    constructor() { 

        this.emojiList = { "happy": 0x1F600, "sad": 0x1F614, "sheep": 0x1F411}; 

    };

    textEmojis(name) {
        var EmojiCode = this.emojiList[name];
        var icon = String.fromCodePoint(EmojiCode);
        return icon
    };
}; 

let newEmjis = new Emojis