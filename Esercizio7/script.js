// Variabile dichiarata ma non inizializzata
let x;
console.log("x:", x);                // undefined
console.log("typeof x:", typeof x);  // "undefined"

// Variabile a cui assegno null esplicitamente
let y = null;
console.log("y:", y);                // null
console.log("typeof y:", typeof y);  // "object" (sì, bug immortale di JS)

// Proprietà mancante
let obj1 = {};
console.log("obj1.manca:", obj1.manca); // undefined

// Proprietà presente ma impostata a null
let obj2 = { presente: null };
console.log("obj2.presente:", obj2.presente); // null
