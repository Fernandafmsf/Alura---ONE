function pulaLinha(){
  document.write("<br><br>");
}

function exibeTitulo(titulo){
  document.write("<h1>"+ titulo+ "</h1>");
  pulaLinha();
}

function exibeParagrafo(paragrafo){
  document.write("<p>"+ paragrafo+"</p>");
  pulaLinha();
}

exibeTitulo("Bem vindos!"); //parâmetro que é enviado para
//a variável "titulo" criada na função

exibeParagrafo("Este é um simples programa!");