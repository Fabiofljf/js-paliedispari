//Esercizio 1 - Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// SPAZIO //ù

//Esercizio 2 - L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

//VARIABILI
let pari_o_dispari, valore_riferimento, pari, dispari, numeri_pc, numero_user, somma, variabile;

// PRIMO PASSO - l'utente sceglie pari o dispari.
pari_o_dispari = prompt('Pari o dispari?');
valore_riferimento = 4

//Assegno valori al pari e al dispari
if (pari_o_dispari.length > valore_riferimento) {
    pari_o_dispari = dispari
    console.log('Dispari')
} else {
    pari_o_dispari = pari
    console.log('Pari')
}

// SECONDO PASSO - l'utente sceglie un numero da 1 a 5.
numero_user = parseInt(prompt('inserisci un numero da 1 a 5'));

//Verifico la correttezza dei dati inseriti
switch (numero_user > 1 && numero_user <= 5) {
    case true:
        console.log(`Numero scelto dal giocatore ${numero_user}`)
        break;

    default:
        console.log('Errore, inserisci un numero da 1 a 5')
        break;
}

// TERZO PASSO - Genero un numero random (sempre da 1 a 5) per il computer (usando una funzione).

// Creo una funzione astratta
function genera_numeri_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Richiamo la funzione con dei parametri miei
numeri_pc = (genera_numeri_random(1, 5))
console.log(`Numero pc ${numeri_pc}`)

//QUARTO PASSO - sommo i due risultati.
somma = numeri_pc + numero_user
console.log(`${somma}, somma del numero giocatore e del numero random del pc`)

//SESTO PASSO - Stabilisco se la somma dei due numeri è pari o dispari (usando una funzione).

//Creo una funzione astratta
function pariOdispari(numero) {
    if (numero % 2 == 0) {
        variabile = true
        console.log('PARI')
    } else {
        console.log('DISPARI')
    }
}

//Richiamo la funzione con dei parametri miei
pariOdispari(somma)