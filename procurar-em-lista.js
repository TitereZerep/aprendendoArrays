const alunos = ['Fulano', 'Ciclano', 'Beltrano', 'Fabiano'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno) {
    if (lista[0].includes(aluno)){
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} tem a média ${mediaAluno}`);
    } else {
        console.log('estudante não existe na lista');
    }
}

exibeNomeENota('Ciclano');
exibeNomeENota('Baiano');