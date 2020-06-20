//Criar um programa que calcula a média
//das turmas de alunos e envia 
//mensagens do cálculo da média


const alunosTurmaA = [
    {
        nome : "Glédison",
        nota:  9.8
    },

    {
        nome : "Darlan",
        nota:  8.0
    },


      {
        nome : "Alex",
        nota:  9.0
    },
    {
        nome : "Mails um Aluno",
        nota:  2.0
    }
]

const alunosTurmaB = [
    {
        nome : "Luana",
        nota:  9.8
    },

    {
        nome : "Nelson",
        nota:  8.0
    },


    {
        nome : "Lisiane",
        nota:  9.0
    },

    {
        nome : "Novo Aluno",
        nota:  1.0
    }


]

function calculoMedia(alunos){
    let soma = 0;
    for (let i = 0; i < alunos.length; i++){
        //console.log(i)
        soma = soma + alunos[i].nota
       
    }
    media =  soma / alunos.length;
    return media;
    //console.log(media)
}

const media1 = calculoMedia(alunosTurmaA);
const media2 = calculoMedia(alunosTurmaB);


function enviaMensagem(media, turma){
    //Se a média for maior que parabenizar os alunos
if(media > 5){
    console.log(`A media da ${turma} foi ${media} Não são tão burros assim, ufa`)
}else {
    console.log(`Seus burros, a nota de vocês foi ${turma}.`)
}

}

enviaMensagem (media1, 'turmaA' );
enviaMensagem (media2, 'turmaB' );