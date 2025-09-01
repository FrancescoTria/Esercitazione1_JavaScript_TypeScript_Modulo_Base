

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("iterazione ciclo var:", i);
    }, 1000);

}


for (let j = 0; j < 3; j++) {
    setTimeout(() => {
        console.log("iterazione ciclo let:", j);
    }, 2000);
}
