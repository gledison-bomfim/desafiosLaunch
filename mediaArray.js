//Criar um programa que calcula a média
//das notas entre os alunos e envia 
//mensagens do cálculo da média

const alunos = [

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

console.log(alunos);
const calculoMedia = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
console.log(`A media dos alunos é ${calculoMedia}`)