var firstWord = prompt('inserisci una parola');
console.log(firstWord);

var secondWord = prompt('inserisci un altra parola');
console.log(secondWord);

if(firstWord.length > secondWord.length) {
    console.log('La parola più corta è: ' + secondWord);
    console.log('La parola più lunga è: ' + firstWord);
} else if (firstWord.length < secondWord.length){
    console.log('La parola più corta è: ' + firstWord);
    console.log('La parola più lunga è: ' + secondWord);
} else if (firstWord.length == secondWord.length) {
    console.log('La due parole sono lunghe uguali');
}