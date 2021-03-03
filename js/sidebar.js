function AbrirSideBar() {
    $('#BarraLateral').width("250px"); //aumenta a largura da sidebar que inicialmente é zero
    $('#main').css("margin-left", "250px");//aumenta a margin-left para que o conteúdo da página seja empurrado para a esquerda e não fique por baixo da sidebar
}
  
function fecharSideBar() { //setamos a largura da barra lateral e a margin left do conteúdo para os valores iniciais(zero)
    $('#BarraLateral').width("0");
    $('#main').css("margin-left", "0");
}