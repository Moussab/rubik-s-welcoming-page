/**
 * Created by Amine on 28/10/2016.
 */

$("#Accueil").click(function(){
    if($("#presen").hasClass("active")){
        $("#presen").removeClass("active");
    }
    if($("#Competitions").hasClass("active")){
        $("#Competitions").removeClass("active");
    }
    if($("#Classement").hasClass("active")){
        $("#Classement").removeClass("active");
    }
    if($("#Contact").hasClass("active")){
        $("#Contact").removeClass("active");
    }
    $("#Accueil").addClass("active");
});

$("#presen").click(function(){
    if($("#Accueil").hasClass("active")){
        $("#Accueil").removeClass("active");
    }
    if($("#Competitions").hasClass("active")){
        $("#Competitions").removeClass("active");
    }
    if($("#Classement").hasClass("active")){
        $("#Classement").removeClass("active");
    }
    if($("#Contact").hasClass("active")){
        $("#Contact").removeClass("active");
    }
    $("#presen").addClass("active");
});

$("#Competitions").click(function(){
    if($("#Accueil").hasClass("active")){
        $("#Accueil").removeClass("active");
    }
    if($("#presen").hasClass("active")){
        $("#presen").removeClass("active");
    }
    if($("#Classement").hasClass("active")){
        $("#Classement").removeClass("active");
    }
    if($("#Contact").hasClass("active")){
        $("#Contact").removeClass("active");
    }
    $("#Competitions").addClass("active");
});

$("#Classement").click(function(){
    if($("#Accueil").hasClass("active")){
        $("#Accueil").removeClass("active");
    }
    if($("#Competitions").hasClass("active")){
        $("#Competitions").removeClass("active");
    }
    if($("#presen").hasClass("active")){
        $("#presen").removeClass("active");
    }
    if($("#Contact").hasClass("active")){
        $("#Contact").removeClass("active");
    }
    $("#Classement").addClass("active");
});

$("#Contact").click(function(){
    if($("#Accueil").hasClass("active")){
        $("#Accueil").removeClass("active");
    }
    if($("#presen").hasClass("active")){
        $("#presen").removeClass("active");
    }
    if($("#Classement").hasClass("active")){
        $("#Classement").removeClass("active");
    }
    if($("#Competitions").hasClass("active")){
        $("#Competitions").removeClass("active");
    }
    $("#Contact").addClass("active");
});