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

  var imcFlavio= calculaImc(70, 1.65);
  var imcFelipe= calculaImc(75, 1.61);

  mostra("O IMC de flávio é : "+imcFlavio);
  mostra("O IMC de felipe é : "+imcFelipe);

  var totalImc = calculaImc(70,1.61) + calculaImc(75,1.65);
  mostra("O total dos IMCS é: "+totalImc);


  var codigo = geraCodigo("A", 20,30)
  mostra(codigo);