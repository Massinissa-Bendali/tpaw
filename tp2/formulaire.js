function validation() {
    var minlength = 5;
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var date = document.getElementById("date");
    var adresse = document.getElementById("adresse");
    var mail = document.getElementById("mail");


    if (nom.value.length >= 5 && prenom.value.length >= 5
        && date.value.length >= 5 && adresse.value.length >= 5 && mail.value.length >= 5) {

        document.getElementById("resultat").style.display = 'block';
        document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;
        document.getElementById("error").style.display = 'none';
    }
    else {
        document.getElementById("resultat").style.display = 'none';
        document.getElementById("error").innerHTML = "Les champs doivent avoir minimum " + minlength + " caractéres";
        document.getElementById("error").style.display = 'block';
    }

}