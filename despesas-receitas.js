



const users = [
    {
        nome: "Glédison",
        receitas: [10, 150, 2300],
        despesas: [10, 150, 3000]
    },
    {
        nome: "Darlan",
        receitas: [2300, 2500],
        despesas: [500, 500]
    },
    {
        nome: "Alex",
        receitas: [600],
        despesas: [800]
    },
    
];

function calculaSaldo(receitas, despesas){
    const somaReceitas = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)

    return somaReceitas - somaDespesas
}

function somaNumeros (numeros){
    let soma = 0

    for (let numero of numeros ){
        soma = soma + numero
    }
    return soma
}

for (let user of users){
    const saldo = calculaSaldo(user.receitas, user.despesas)

    if (saldo > 0){
        console.log(`${user.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
    }else{
        console.log(`${user.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }
}






