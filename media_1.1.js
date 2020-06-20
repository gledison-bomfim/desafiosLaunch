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
        nota:  1.0
    }
]

function calculoMedia(alunos){
   return  (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculoMedia(alunosTurmaA);
const media2 = calculoMedia(alunosTurmaB);


function enviaMensagem(media, turma){
        //Se a média for maior que parabenizar os alunos
    if(media > 5){
        console.log(`A media da ${turma} foi de media ${media}, ufa`)
    }else {
        console.log(`Seus burros, a media da turma foi ${turma}`)
    }

}

enviaMensagem (media1, 'turmaA' );
enviaMensagem (media2), 'turmaB';