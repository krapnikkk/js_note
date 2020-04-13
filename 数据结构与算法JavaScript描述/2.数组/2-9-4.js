function Word(){
    this.wordStore = [];
    this.add = add;
    this.spell =spell;
}

function add(word){
    this.wordStore.push(word);
    return this;
}

function spell(){
    return this.wordStore.join("");
}

var word = new Word();
word.add('n').add('i').add('g').add('h').add('t');
console.log(word.spell());