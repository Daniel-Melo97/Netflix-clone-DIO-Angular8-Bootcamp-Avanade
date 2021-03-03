function carregar_video(){
    $( ".modal-body" ).html( "<video id='meuvideo' width='640' height='360' controls><source src='espaguete.mp4' type='video/mp4'>Your browser does not support the video tag.</video>" );
}

function carregar_info(){
    $('.modal-body').html('<h1>DESCRIÇÃO</h1><p>Espaguete ou esparguete (do italiano spaghetti) ou macarronete é uma pasta alimentícia desidratada e dura à base de sêmola de trigo, consumida sob a forma de fios.</p>');
}