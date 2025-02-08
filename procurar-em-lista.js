const alunos = ['Fulano', 'Ciclano', 'Beltrano', 'Fabiano'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno) {
    if (lista[0].includes(aluno)){
        const [alunos, medias] = lista;
        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];
        console.log(`${aluno} tem a média ${mediaAluno}`);
    } else {
        console.log('estudante não existe na lista');
    }
}

exibeNomeENota('Beltrano');
exibeNomeENota('Ben 10');