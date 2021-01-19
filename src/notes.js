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
