$(document).ready(function(){
    $("h1").hide(1000).show(1000);
    $("p").slideUp(1000).delay(1000).slideDown(1000);
    $(".form-control").fadeOut(1000).delay(100).slideDown(1000);
    $("#esc").click(function(){
        var div = $("#esc");
        div.animate({height: '300px'},'slow');
        div.animate({width: '300px'}, "slow");
        div.animate({height: '350px'}, "slow");
        div.animate({width: '350px'}, "slow");
        $(".prin").delay(2000).slideDown(1000);
        })
        $("#tres").click(function(){
            $("#tres").slideUp(1000).slideDown(1000);
        })
    })
var tot;
function calcular(){
   var select = document.getElementById("sle1");
   var radios2 = document.getElementsByName("principal");
   var sala = document.getElementById("sal");
   var legu = document.getElementById("leg");
   var faro = document.getElementById("faro");
   var frita = document.getElementById("fritas");
    if(select.value == "0.15"){
        var conv = 0.15;
    }else if(select.value == "0.13"){
        var conv = 0.13;
    }else if(select.value == "0.1"){
        var conv = 0.1;
    }else if(select.value == "0.5"){
        var conv = 0.5;
    }else{
        var conv = 0;

    }
    for(var i = 0 in radios2){
        if(radios2[i].checked){
            var princ = Number(radios2[i].value);
        }
   }
   if(sala.checked){
        var acomp = Number(sala.value);
   }else{
       acomp = 0;
   }
   if(legu.checked){
        var acomp1 = Number(legu.value);
   }else{
       acomp1 = 0;
   }
   if(faro.checked){
        var acomp2 = Number(faro.value);
   }else{
       acomp2 = 0;
   }
   if(frita.checked){
        var acomp3 = Number(frita.value);
   }else{
       acomp3 = 0;
   }
   var soma  = acomp + acomp1 + acomp2 + acomp3;
   if(conv == 0){
    tot = (princ + soma);   
   }else{
    tot = (princ + soma) - ((princ + soma) * conv);
   }
    document.getElementById("result").value = tot;
}