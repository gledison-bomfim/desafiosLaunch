//===============================================================
//Cálculo de aposentadoria
//===============================================================

const nome = "Glédison";
const sexo = "M"
const idade = 50;
const contribuicao = 25;

minimoSoma = (idade + contribuicao)



//minino de contribuição p/ homens 35
//minino de contribuição p/ homens 3
//soma de idade + contribuição deve ser 85-95

if (sexo == "M"){
    if(minimoSoma >= 95){
        console.log(`${nome}você já pode se aposentar!`)
    } else{
        console.log(`${nome} você ainda não pode se aposentar!`)
    }
} else  {
    if(minimoSoma >= 85){
        console.log(`${nome}você já pode se aposentar!`)
    } else{
        console.log(`${nome} você ainda não pode se aposentar!`)
    }
} 