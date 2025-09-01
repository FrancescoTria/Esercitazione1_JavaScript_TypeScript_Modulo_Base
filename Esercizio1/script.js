// dichiarazioni
var x = 10;
let y = 20;
const z = 30;

console.log("Valori iniziali:");
console.log("x (var):", x);
console.log("y (let):", y);
console.log("z (const):", z);

// riassegnazioni
x = 100;
y = 200;

console.log("\nDopo riassegnazioni di var e let:");
console.log("x (var):", x);
console.log("y (let):", y);

// proviamo a riassegnare const
try {
    z = 300;   // qui scoppia il casino
} catch (e) {
    console.error("\nErrore quando provo a riassegnare const:", e.message);
}
