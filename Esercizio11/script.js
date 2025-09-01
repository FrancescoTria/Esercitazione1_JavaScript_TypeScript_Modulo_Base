let a = 0;
let b = undefined;

console.log("a:", a);
console.log("b:", b);

// Operatore ||
console.log("a || 42:", a || 42); // 42
console.log("b || 42:", b || 42); // 42

// Operatore ??
console.log("a ?? 42:", a ?? 42); // 0
console.log("b ?? 42:", b ?? 42); // 42
