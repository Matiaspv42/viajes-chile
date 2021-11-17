

$(function(){

        $("#redessociales").click(function(){
            alert("Lamentablemente nuestras redes sociales no están funcionando :(");
         })

        // Es dificil definir el bottom de una seccion con jquery asi que esto lo calcula

        var bottom = $('#photo').position().top + $('#photo').outerHeight(true);
       
        // El navbar transparente en todo el sitio se mezclaba con las letras así que mejor le agregué color una vez que se pasa del carousel
        $(window).scroll(function() {
            if ($("#menu").offset().top > bottom){
                $("#menu").removeClass("bg-transparent").addClass("bg-black");
            } 
            else{
                $("#menu").removeClass("bg-black").addClass("bg-transparent");
            }
        
            });
    });