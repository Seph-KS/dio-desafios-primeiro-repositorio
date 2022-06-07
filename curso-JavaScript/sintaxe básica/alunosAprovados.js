
const alunos = [
    {
        nome:  'Andrey',
        nota:  7,
        turma: '2A',
    },
    {
        nome:  'Laise',
        nota:  9,
        turma: '1B',
    },
    {
        nome: 'Felippe',
        nota:  6,
        turma: '2B', 
    },
    {
        nome:  'Nicolly',
        nota:  5,
        turma: '5C',
    },
];

function alunosAprovados(array, media) {
    let aprovados = [];

    for(let i = 0; i < array.length; i++) {

        const {nota, nome} = array[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

function listaAprovados(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(` - ${array[i]}`)
    }
}

let aprovados = alunosAprovados(alunos, 7);

console.log('Lista de Alunos aprovados:');
listaAprovados(aprovados);