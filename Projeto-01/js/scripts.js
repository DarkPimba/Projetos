$(function(){
    $('nav.mobile').click(function(){
        var listaMenu = $('nav.mobile ul');
        //abrir menu mobile pedo fadeIn
        /*if(listaMenu.is(':hidden') == true)
            listaMenu.fadeIn();
            else
                listaMenu.fadeOut();
        */
       //abre e fecha o menu mobile
       listaMenu.slideToggle();
    })
})