/* Blocco 4 - SNACK 1A*/
// Creare un oggetto palla che abbia le seguenti proprietà
/* var Palla = {
    nome: 'palla',
    peso: 10, 
} */

/* Blocco 4 - Snack 1B */
// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
/* Palla.peso = Number(prompt('Inserisci il peso:'))
console.log(Palla.peso);
console.log(Palla); */


/* Blocco 4 - Snack 2 */
//Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
//Calcolare perimetro e area.
var triangoloRett = {
    base: 4,
    altezza: 3
}

var ipotenusa = Math.sqrt((Math.pow(triangoloRett.base, 2) + Math.pow(triangoloRett.altezza, 2)));
console.log('L\'ipotenusa è: ' + ipotenusa);

var perimetro = (ipotenusa + triangoloRett.base + triangoloRett.altezza);
console.log('Il perimetro è: ' + perimetro);

var area = ((triangoloRett.altezza * ipotenusa)/2);
console.log('L\'area è: ' + area);




