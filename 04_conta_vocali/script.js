/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const vocals = word => {//crea la funzione 
    let allVocals = []//array vuoto
    for (let i = 0; i < word.length; i++) {//ciclo for 
        let singleLetter = word[i].toLowerCase()//per tutte le lettere della stringa 
        if (singleLetter === 'a' || singleLetter === 'e' || singleLetter === 'i' || singleLetter === 'o' || singleLetter === 'u'){
            allVocals.push(singleLetter)//SE una delle lettere della stringa è tra queste, viene pushato all'interno dell'array vuoto
        }     
    }
    return allVocals//mostra la variabile fuori dalla funzione
}

// Invoca la funzione qui e stampa il risultato in console
const allVocalsFound = vocals(word)//crea variabile con il risultato della funzione sulla variabile word
console.log(allVocalsFound);//stampa il risultato


//Risultato atteso se si passa 'javascript': 3 (a, a, i)

const new_word = 'really good test'

function getVocals(word) {
    let all_vocals = []
    for(let i = 0; i < word.length; i++){
        let single_letter = word[i].toLowerCase()
        if (single_letter === 'a' ||single_letter === 'e' ||single_letter === 'i' ||single_letter === 'o' ||single_letter === 'u'){
            all_vocals.push(single_letter)
        }
    }
    return all_vocals    
}

const all_vocals_found = getVocals(new_word)
console.log(all_vocals_found);
