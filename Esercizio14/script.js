function raddoppiaArray(numeri) {
    return numeri.map(n => n * 2);
}

// esempio d'uso
const arr = [1, 2, 3, 4, 5];
const risultato = raddoppiaArray(arr);
console.log("arr:", arr); // [1, 2, 3, 4, 5]    
console.log("risultato:", risultato); // [2, 4, 6, 8, 10]
