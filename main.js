/* SNACK 1*/

/* var firstWord = prompt('inserisci una parola');
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
} */


/* SNACK 2 */

var somma = 0;

for (var i = 0; i < 10; i++ ) {
    var number = Number(prompt('Inserisci un numero'))  
    var somma = somma + number;
    console.log('Il numero inserito è: ' + number);

}

console.log('La somma dei numeri inseriti è: ' + somma);  




