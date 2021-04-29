/* SNACK 2*/
//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

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



/* SNACK 3 */
//Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

/* var sum = 0;

for (var i = 0; i < 10; i++ ) {
    var number = Number(prompt('Inserisci un numero'))  
    sum += number;
    console.log('Il numero inserito è: ' + number);
}
 
console.log('La somma dei numeri inseriti è: ' + sum);   */



/* SNACK 4 */
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

/* var invited = ['Lorenzo', 'Emanuela', 'Chiara', 'Tiziano', 'Martina'];
console.log(invited);

var userName = prompt('Inserisci il tuo nome');
console.log(userName);

var invitato = false;

for (i = 0; i < invited.length; i++) {
    if(userName == invited[i]){
        invitato = true;
    }
}

if(invitato){
    alert("Welcome to the party");

} else {
    alert("Sorry, non puoi entrare")
} */

    

/* SNACK 5 */
//Crea un array vuoto.Chiedi per 6 volte all’utente di inserire un numero,se è dispari inseriscilo nell’array

/* var array = [];

for (i = 0; i < 6; i++) {
    var number = Number(prompt('Inserisci un numero'));
    if(number % 2 != 0){
        console.log(number + 'è dispari');
        var number = array.push(number);
    }
}

console.log('Nell\'array sono stati aggiunti questi valori: ' + array); */



/* SNACK 6 */
//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

/* var sceltaUtente = Number(prompt('Quanti numeri vuoi calcolare?'));
console.log("L'utente ha scelto di calcolare : " + sceltaUtente + " numeri");

for (var i = 0; i < sceltaUtente; i++) {
    var numbers = Number(prompt('Inscerisci un numero'))
    console.log(numbers);
    var cubo = Math.pow(numbers, 3)
    document.writeln(cubo);
} */



/* SNACK 7 */
//Calcolare le potenze di 2 elevato alla N senza superare 1000

/* var counter = 0;
while(Math.pow(2, counter) < 1000) {
    console.log(Math.pow(2, counter));
    counter++;
} */



/* SNACK 8 */
//Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

/* var userNumber = Number(prompt("inserisci un numero di 4 cifre"))
console.log(userNumber);

var somma = 0;
while(userNumber > 0){
    somma = somma + userNumber % 10;
    console.log(userNumber);
    userNumber = Math.floor(userNumber / 10);
}

console.log(somma); */






