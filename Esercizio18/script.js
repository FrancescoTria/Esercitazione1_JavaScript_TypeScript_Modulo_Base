// Esempio 1: contatore semplice con "stato" a ogni iterazione
let somma = 0;

for (let i = 0; i < 5; i++) {
    console.group(`Iterazione ${i}`);
    console.log("i:", i);
    console.log("somma (prima):", somma);

    somma += i;

    console.log("somma (dopo):", somma);
    console.groupEnd();
}

console.log("Somma finale:", somma);
