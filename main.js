var firstWord = prompt('inserisci una parola');
console.log(firstWord);

var secondWord = prompt('inserisci un altra parola');
console.log(secondWord);

if(firstWord.length > secondWord.length) {
    console.log(secondWord);
    console.log(firstWord);
} else if (firstWord.length < secondWord.length){
    console.log(firstWord);
    console.log(secondWord);
} else if (firstWord.length == secondWord.length) {
    console.log('La parole sono lunghe uguali');
}