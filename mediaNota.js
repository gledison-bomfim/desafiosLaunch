//Criar um programa que calcula a média
//das notas entre os alunos e envia 
//mensagens do cálculo da média

const aluno01 = {
    nome : "Glédison",
    nota:  9.8
}

const aluno02 = {
    nome : "Darlan",
    nota:  8.0
}


const aluno03 = {
    nome : "Alex",
    nota:  9.0
}

const calculoMedia = (aluno01.nota + aluno02.nota + aluno03.nota) / 3
console.log(`A media dos alunos é ${calculoMedia}`)