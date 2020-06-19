//Crie um programa com um objeto 
//para armazenar dados de um programador
//como nome, idade e tecnologias que trabalha.

const programador  = {
    dados:{
        nome: "Glédison", idade: "21",
    },
    skills:[
        {nome: "NOSQL", especialidade: "MongoDB" },
        {nome: "JavaScript", especialidade: "Web/Mobile"},
        {nome: "Python", especialidade: "Data Science"},

    ]

}

console.log( `O usuário ${programador.dados.nome} tem ${programador.dados.idade} e usa a tecnologia ${programador.skills[1].nome} com especialidade em ${programador.skills[1].especialidade}`)