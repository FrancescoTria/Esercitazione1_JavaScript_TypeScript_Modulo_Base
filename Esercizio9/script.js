// == fa il confronto con conversione implicita
console.log(5 == "5");      // true   (numero e stringa, ma JS converte la stringa in numero)
console.log(null == undefined); // true   (speciale eccezione del linguaggio)
console.log(0 == false);    // true   (perché 0 è “falsy”)

// === confronta senza barare
console.log(5 === "5");     // false  (tipo diverso: number vs string)
console.log(null === undefined); // false  (sono valori diversi)
console.log(0 === false);   // false  (number vs boolean)
