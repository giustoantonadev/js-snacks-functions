/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const names_starting_with_a = (array, letter) => {//crea funzione 
    const start_with_a = []//array vuoto
    for (let i = 0; i < array.length; i++) {//ciclo for dell'array
        if (array[i][0] === letter)//SE la lettera in posizione 0 di un elemento è 'A'
            start_with_a.push(array[i])//l'elemento viene pushato nell'array creata all'interno della funzione

    }
    return start_with_a //mostra la variabile fuori dalla funzione 
}

// Invoca la funzione qui e stampa il risultato in console
const filterNames = names_starting_with_a(names,"A") //crea variabile col risultato della funzione sull'array (names)
console.log(filterNames);//stampa il risultato


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

function filterByFirstLetter(array, letter) {
    const filteredNames = []
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] === letter)
            filteredNames.push(array[i])
    }
    return filteredNames
}

const finalFilter = filterByFirstLetter(names,'L')
console.log(finalFilter);
