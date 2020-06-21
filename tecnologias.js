//Crie um programa que armazena 
//um array de usuários (objetos), 
//cada usuário tem um nome e 
//suas tecnologias (novo array), por exemplo:


const users = [
    {nome: "Glédison", tecnologias: ["JavaScript", "nodeJS"]},
    {nome: "Fulano", tecnologias: ["CSS", "Python"]},
    {nome: "Beltrano", tecnologias: ["HTML", "C"]},
    {nome: "Lucas", tecnologias: ["CSS", "Python"]},

];


for (let user of users ){
    console.log(`${user.nome} trabalha com ${user.tecnologias.join(', ')}`)
}

//Busca por tecnologia
//Crie uma função que recebe os dados
//de um objeto de usuário e retorna SE o usuário
// trabalha com CSS ou não. 
//Essa função deve retornar um boolean true/false.

function checaSeUsuarioUsaCSS (user){
    for (let tecnologia of user.tecnologias){
        if (tecnologia == 'CSS') return true
    }  
    return false
}

for (let i=0; i <users.length; i++){
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(users[i])
    if (usuarioTrabalhaComCSS){
        console.log(`O usuário ${users[i].nome} trabalha com CSS `)
    }
}