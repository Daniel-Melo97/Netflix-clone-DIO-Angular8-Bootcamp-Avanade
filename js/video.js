function pausar(){
    var elemento = document.getElementById('meuvideo');
    if(elemento != null){//se o vídeo estiver renderizado, pausar, caso contrário, não é necessário pausar
        $('#meuvideo').trigger('pause');
    }
    
}