/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function helloMessage(nome) {
    return `ciao ${nome}`;   
}
const sayHello = helloMessage()
console.log(sayHello);

// Invoca la funzione qui e stampa il risultato in console
console.log(helloMessage(userName));


//Risultato atteso se si passa 'Mario': // ciao Mario
