
var words = ["time", "waits", "for", "no", "one"];
function toSentence(total, current) {
    return total + " " + current;
}
var sentence1 = words.reduce(toSentence);
var sentence2 = words.reduceRight(toSentence);
console.log(sentence1);
console.log(sentence2);
