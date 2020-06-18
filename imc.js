
//===============================================================
//Cálculo de IMC
//===============================================================

const nome = "Glédison";
const peso = 92;
const altura = 1.75;
const sexo = "Masculino";

calculo
imc = peso / ( altura * altura )

if (imc >= 30){
    console.log(`${nome} seu IMC é ${imc} e você está acima do peso;`);
}else {
    console.log(`${nome} seu IMC é ${imc} e você não está acima do peso;`);
}
