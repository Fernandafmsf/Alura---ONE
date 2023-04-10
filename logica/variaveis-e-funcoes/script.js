var ano = 2023; //"=" significa recebe 
var idadeJoaquim = (ano-1977);
var idadeFugencio =(ano - 1966);

function pulaLinha(){
  document.write("<br>");
  document.write("<br>");
}

function mostra(frase){
  document.write(frase);
  pulaLinha();
}

mostra("A idade de Joaquim é: " +idadeJoaquim);

mostra("A idade de Fugencio é: " + idadeFugencio);

ano=2022;
var idadeGabriel = (ano-1976);

mostra("A idade de Gabriel é: " +idadeGabriel);

var mediaIdades = (idadeFugencio+idadeGabriel+idadeJoaquim)/3;
mostra("A média das idades é: "+ Math.round(mediaIdades));

//antes estava da seguinte forma: 
//document.write("A idade de Gabriel é: " +idadeGabriel);
//pulaLinha();



