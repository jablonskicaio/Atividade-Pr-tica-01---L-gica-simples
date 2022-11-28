/*
2. Desenvolva um algoritmo para ler o número total de eleitores de um
município, o número de votos brancos, nulos e válidos. Calcular e
escrever o percentual que cada um representa em relação ao total
de eleitores.
*/

let totalEleitores = Number(prompt(`Informe o número TOTAL de eleitores de GrowCity`));
let brancos = Number(prompt(`Informe o número de votos BRANCOS das eleições municipais de GrowCity`));
let nulos = Number(prompt(`Informe o número de votos NULOS das eleições municipais de GrowCity`));
let validos = Number(prompt(`Informe o número de votos VÁLIDOS das eleições municipais de GrowCity`));
let percentual = 0
let controleVotos = 0

if (brancos>totalEleitores){
    alert(`ERRO, voce informou um valor excedente ao numero total de eleitores!`);
}else{
  controleVotos+=brancos;

  if(nulos>totalEleitores || controleVotos+nulos>totalEleitores){
    alert(`ERRO, voce informou um valor excedente ao numero total de eleitores!`);
  }else{
    controleVotos += nulos;

    if(validos>totalEleitores || controleVotos+validos>totalEleitores){
      alert(`ERRO, voce informou um valor excedente ao numero total de eleitores!`);
    }else{
      controleVotos+=validos;

      if(totalEleitores==controleVotos){
        percentual = (brancos*100) / totalEleitores;
        console.log(`${percentual}% de votos em BRANCO.`);

        //calcula e armazena % dos votos em nulos
        percentual = (nulos*100) / totalEleitores;
        console.log(`${percentual}% de votos NULOS.`);

        //calcula e armazena % dos votos validos
        percentual = (validos*100) / totalEleitores;
        console.log(`${percentual}% de votos VALIDOS.`);
      }else{
        alert(`ERRO, Nao foi possivel calcular o percentual preciso sobre os votos!`);
      }
    }
  }
}