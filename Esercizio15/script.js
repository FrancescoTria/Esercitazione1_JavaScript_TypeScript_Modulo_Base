function saluta(nome = "ospite") {
    return `Ciao, ${nome}!`;
}
// esempi d'uso
console.log(saluta("Luca"));   // "Ciao, Luca!"
console.log(saluta());         // "Ciao, ospite!"
