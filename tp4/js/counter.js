/*const input = document.querySelector("#nom") || document.querySelector("#prenom")  ;
const counter = document.querySelector(".counter");
let counterContent = Number(counter.textContent) ;

input.addEventListener('keyup',() => {
   counter.innerHTML= input.value.length +" caractères" ;

});
*/
// il manque comment le faire pour tout les champs dans ce cas commenté .
$(document).ready(function () {
    $(document).keyup(function () {
        $("#nomL").html($("#name").val().length + "  car");
        $("#prenomL").html($("#firstname").val().length + "  car");
        //$("#dateL").html($("#birth").val().length + " caractères"); car on choisit directement dans le calendrier donc on saisit rien à la main .
        $("#adresseL").html($("#adresse").val().length + "  car");
        $("#mailL").html($("#mail").val().length + "  car");
    });
})