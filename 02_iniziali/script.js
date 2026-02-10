/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const firstLetter = array => {//crea una funzione 
    const firstLetters = []//crea un array vuoto
    for (let i = 0; i < array.length; i++) {//ciclo for dell'array 
        firstLetters.push(array[i][0]);//prende l'index 0 di ogni elemento nell'array cioè la prima lettera 
        // e la pusha nell'array creato all'interno della funzione
    }
    return firstLetters //mostra fuori dalla funzione la variabile array creata 
}

// Invoca la funzione qui e stampa il risultato in console
const first_letters_array = firstLetter(names)//crea una variabile dal valore della funzione che "prende" le prime lettere dell'array (names)
console.log(first_letters_array);//logga il risultato


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

/* function firstLetter(array) {
    const firstLetters = [];

    for (let i = 0; i < array.length; i++) {
        firstLetters.push(array[i][0]);
    }
    return firstLetters
}
const first_letters_array = firstLetter(names)
console.log(first_letters_array); */


