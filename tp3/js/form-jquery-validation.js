$(document).ready(function () {

    $("#Valider").on("click", function (e) {
        e.preventDefault();

        if ($('#nom').val().length < 5 || $('#nom').val() == "") {
            $('#myModal').modal("show");
        }


        else if ($('#prenom').val().length < 5 || $('#prenom').val() == "") {
            $('#myModal').modal("show");
        }


        else if ($('#date').val().length < 5 || $('#date').val() == "") {
            $('#myModal').modal("show");
        }


        else if ($('#adresse').val().length < 5 || $('#adresse').val() == "") {
            $('#myModal').modal("show");
        }
        else if ($('#mail').val().length < 5 || $('#mail').val() == "") {
            5
            $('#myModal').modal("show");
        }
        else {

            $('#myModal').modal("show");
            $('.modal-title').html("Bienvenue " + document.querySelector("#prenom").value);
            $('.modal-body').html("Vous êtes nés le  " + document.querySelector("#date").value + " et vous habitez à :" + '<img src="https://maps.googleapis.com/maps/api/staticmap?markers=' + document.querySelector("#adresse").value + '&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/>');


        }
    });
});
