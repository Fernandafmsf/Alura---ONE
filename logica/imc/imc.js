function pulaLinha(){
  document.write("<br><br>");
}

function mostra(frase){
  document.write(frase);
  pulaLinha();
}

function calculaImc(peso,altura){
  return peso/(altura*altura); // necessário botar para mostrar o resultado. retorna o resultado para a variável imc
}

function geraCodigo (letra, n1, n2){
  return "GH1022";
}

function analisarImc(){
  if (imc<18.5){
    resultado="Você está abaixo da média";
  } else if (imc>=18.5 && imc <=35){
    resultado= "Você está na média";
  } else{
    resultado="Você está acima da média";
  }
  return resultado;
}

  var nome = prompt("Informe seu nome")
  var alturaInformada = (prompt(nome+ ", informe sua altura: "));
  var pesoInformado = (prompt(nome+ ", informe seu peso: "));

  var imc = calculaImc(pesoInformado, alturaInformada);
  var resultadoAnalise = analisarImc(); // eu poderia deixar na função mostra a função analisarImc, mas preferi passar o resultado para uma variável para ficar padronizado 

  mostra("<h3>" +nome+", seu IMC é: " +imc+", sendo assim, "+resultadoAnalise+"</h3>");




// var imcFlavio= calculaImc(70, 1.65);
//var imcFelipe= calculaImc(75, 1.61);

//mostra("O IMC de flávio é : "+imcFlavio);
//mostra("O IMC de felipe é : "+imcFelipe);

// var totalImc = calculaImc(70,1.61) + calculaImc(75,1.65);
//mostra("O total dos IMCS é: "+totalImc);


//var codigo = geraCodigo("A", 20,30)
//mostra(codigo);