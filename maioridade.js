//DESAFIO 1 
//Verificar se a pessoa é maior de 18 anos;
const nome = "Glédison";
const idade = 17;
//se sim, deixar entrar, se não, bloquear a entrada.
   if (idade > 18){
       console.log(`Pode entrar ${nome}`);
   }else{
       console.log(`${nome} você ainda não possui 18 anos, vá estudar!!!`)
   }if(idade == 17){   //Se a pessoa tiver 17 anos, avisar para voltar quando fizer 18 anos.
       console.log(`${nome} volte aqui quando fizer 18 anos.`)
   }