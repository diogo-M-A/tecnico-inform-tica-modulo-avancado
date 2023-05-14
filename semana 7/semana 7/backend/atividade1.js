function generateSequence(n) {
    let sequence = [];
    for (let i = 1; i <= n; i++) {
        sequence.push(i * i);
        //remover incremento repetido
    }
    return sequence;
}
console.log(generateSequence(10));
