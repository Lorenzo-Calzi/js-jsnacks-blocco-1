/* SNACK 1*/

//L’utente inserisce due parole in successione, con due prompt.
/* var firstWord = prompt('inserisci una parola');
console.log(firstWord);

var secondWord = prompt('inserisci un altra parola');
console.log(secondWord);

//Il software stampa prima la parola più corta, poi la parola più lunga.
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

//Il software deve chiedere per 10 volte all’utente di inserire un numero.
/* var sum = 0;

for (var i = 0; i < 10; i++ ) {
    var number = Number(prompt('Inserisci un numero'))  
    sum += number;
    console.log('Il numero inserito è: ' + number);
}
 */
//Il programma stampa la somma di tutti i numeri inseriti.
/* console.log('La somma dei numeri inseriti è: ' + sum);   */



/* SNACK 3 */

//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

//Da rivedere
/* var invited = ['Lorenzo', 'Emanuela', 'Chiara', 'Tiziano', 'Martina'];
console.log(invited);

var userName = prompt('Inserisci il tuo nome');
console.log(userName);

for (i = 0; i < invited.length; i++) {
    var result = invited[i];
    if(invited[i].indexOf = userName){
        alert('Okey');
        break;
    }
} */
    

/* SNACK 4 */

var array = [];

for (i = 0; i < 6; i++) {
    var number = Number(prompt('Inserisci un numero'));
    if(number % 2){
        console.log(number + 'è dispari');
        var number = array.push(number);
    }
}

console.log('Nell\'array sono stati aggiunti questi valori: ' + array);




