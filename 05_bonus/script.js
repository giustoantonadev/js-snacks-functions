/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const helloMessage = (nome) => {//crea una funzione 
    const hour = new Date().getHours();//variabile che prende l'orario corrente
    let hello;//variabile col messaggio di saluto

    if (hour < 13) {//SE l'ora è sotto le 13:00 
        hello = 'Buongiorno'//il messaggio di saluto dato dalla variabile sarà 'buongiorno'
    } else if (hour < 17) {//ALTRIMENTI SE l'ora è sotto le 17:00 il messaggio sarà 'buon pomeriggio'
        hello = 'buon pomeriggio'
    } else {//ALTRIMENTI il messaggio sarà 'buonasera'
        hello = 'buonasera'
    }

    return `${hello} ${nome}`;//mostra fuori dalla funzioni le due template literal (backtick e $)

}

// Invoca la funzione qui e stampa il risultato in console
const sayHelloMessage = helloMessage(name)
console.log(sayHelloMessage);

console.log(helloMessage(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.

function hello_message(new_name) {
    const hour = new Date().getHours();//variabile che prende l'orario corrente
    let hello_new;//variabile col messaggio di saluto

    if (hour < 13) {//SE l'ora è sotto le 13:00 
        hello_new = 'Buongiorno'//il messaggio di saluto dato dalla variabile sarà 'buongiorno'
    } else if (hour < 17) {//ALTRIMENTI SE l'ora è sotto le 17:00 il messaggio sarà 'buon pomeriggio'
        hello_new = 'buon pomeriggio'
    } else {//ALTRIMENTI il messaggio sarà 'buonasera'
        hello_new = 'buonasera'
    }

    return `${hello_new} ${new_name}`;//mostra fuori dalla funzioni le due template literal (backtick e $)
}

console.log(hello_message('Giacomo'));

