/* Blocco 4 - SNACK 1A*/
// Creare un oggetto palla che abbia le seguenti proprietà
var Palla = {
    nome: 'palla',
    peso: 10, 
}

/* Blocco 4 - Snack 1B */
// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
Palla.peso = Number(prompt('Inserisci il peso:'))
console.log(Palla.peso);


