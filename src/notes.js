class Note {
    constructor(){
        this.noteId;
        this.noteText
        this.noteTitle
        this.TITLE_LIMIT = 20
    };

    create(id, text){
        this.noteId = id
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
        if (text.length > 20) {
            return text.substring(0, this.TITLE_LIMIT) + "...";
        }
        return text;
    };
};
