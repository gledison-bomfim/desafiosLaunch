const alunosTurmaA = [
    {
        nome: "Glédison",
        nota: 9.8
    },

    {
        nome: "Darlan",
        nota: 1.0
    },


    {
        nome: "Alex",
        nota: 9.0
    },
    {
        nome: "n sei",
        nota: 2.0
    }
]

const alunosTurmaB = [
    {
        nome: "Luana",
        nota: 9.8
    },

    {
        nome: "Nelson",
        nota: 8.0
    },


    {
        nome: "Lisiane",
        nota: 9.0
    },

    {
        nome: "Novo Aluno",
        nota: 1.0
    }


]

function calculoMedia(alunos) {
    let soma = 0

    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota

    }
    media = soma / alunos.length;
    return media;
}


function enviaMensagem(media, turma) {

    if (media > 5) {
        console.log(`A media da ${turma} foi ${media} Não são tão burros assim, ufa`)
    } else {
        console.log(`Seus burros, a nota de vocês foi ${turma}.`)
    }

}


function marcarComoreprovado(aluno) {
    aluno.reprovado = false;

    if (aluno.nota < 5) {
        aluno.reprovado = true
    }

}


function enviarMensagemReprovado(aluno) {
    if (aluno.reprovado) {
        console.log(`O aluno ${aluno.nome} está reprovado!`)
    }
}

function alunosReprovados(alunos) {
    for (let aluno of alunos) {
        marcarComoreprovado(aluno);
        enviarMensagemReprovado(aluno)
    }
}


const media1 = calculoMedia(alunosTurmaA);
const media2 = calculoMedia(alunosTurmaB);


enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')


alunosReprovados(alunosTurmaA)
alunosReprovados(alunosTurmaB)