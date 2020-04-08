/**
 * 由字符串生成数组
 */

 var sentence = "the quick bromn fox jumped over the lazy dog";
 var words = sentence.split(" ");
 for(var i = 0; i < words.length;i++){
     console.log(`word-${i}: ${words[i]}`);
 }