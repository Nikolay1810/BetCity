$(document).ready(function () {
    var div = document.getElementById("data");
function dat(){
    var date = new Date();
//    <br>Hour:
    var day = date.getDate();
    if(date.getDate()<10){
    day = "0"+date.getDate()
    }
    var month = (date.getMonth()+1);
    if((date.getMonth()+1)<10){
        month = "0" + (date.getMonth()+1);
    }
    var hour = date.getHours();
    if(date.getHours()<10){
        hour = "0"+date.getHours();
    }
    var minutes = date.getMinutes();
    if(date.getMinutes()<10){
        minutes = "0"+date.getMinutes();
    }
    var seconds = date.getSeconds();
    if(date.getSeconds()<10){
        seconds = "0"+date.getSeconds();
    }
    datastr = (+day+"."+month+"."+date.getFullYear()+
               " "+hour+":"+minutes+":"+seconds+" "+"GMT +3");
    div.innerHTML = datastr;
};
dat();
setInterval(dat, 1000);
});

//$("#but1").click(function(){
//   if($("but1").hasClass(".selec")){
//       $("but1").removeClass(".selec");
//   }
//    $("#but1").addClass(".selec");
//});

//$('.but7').mousedown(function(){
////   if(!$(this).hasClass("select")){
////       $(this).addClass("select");
////   }
//    $('.but7').addClass('selec');
////    $(".but7").css({'background-color':'#f9e6e6 !important'});
//});

$("#ref").mousedown(function(){
   $("#ref").css({'background': 'url(E:/Программирование/HTML/Работа/BetCity/images/button/2.gif)'});

});
