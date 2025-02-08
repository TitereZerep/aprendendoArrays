const notasJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const notasJava = [6, 5, 8, 9, 5, 6];
const notasPython = [7, 3.5, 8, 9.5];

function calculaMedia(listaDeNotas) {
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);

    const media = somaDasNotas / listaDeNotas.length;
}

console.log(calculaMedia(notasJS));
console.log(calculaMedia(notasJava));
console.log(calculaMedia(notasPython));