/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output collega questo file al tuo HTML e apri la console del browser. 
- Dovrai creare una direttiva di output per testare le variabili od i risultati delle espressioni che crei
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

// I principali datatype in JS sono 5: string, number, boolean, null e undefined.
// Il datatype string è un dato di tipo alfanumerico che per essere letto corretemante deve essere scritto dentro a degli apici : "mario"  "15".
// Number è di tipo numerico e deve essere formato appunto da un valore strettamente numerico, che sia decimale sia intero.
// Boolean è di tipo booleando, può quindi avere aolo due valori: vero o falso.
// Null è anche se erroneamente di tipo object e lo si trova nelle variabili a cui non è stato volontariamente assegnato un valore e viene quindi definito null dallo sviluppatore.
// undefined è un dato che viene visualizzato nel caso di una variabile senza valore ma che non è stata defint da null, oppure lo si trova in una variabile con un valore ma che non è stata definita.

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "tommaso";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let number = 12;

let number2 = 20;

let sumnumb = number + number2;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name = "Eleodori";

const surname = "Eleodori";

//surname = Tommaso;

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let subnumb = 4 - x;

console.log(subnumb);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";

let name2 = "John";

console.log(name1 == name2);

console.log(name1 == name2.toLowerCase());
