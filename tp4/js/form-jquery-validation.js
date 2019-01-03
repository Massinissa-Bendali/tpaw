$(document).ready(function () {

   $(document).keyup(function () {

        // validation des champs avec le code couleur , vert = OK , rouge = nombre de caractère insuffisant ( < 5)
       
        valide = true;
        if ($("#name").val().length < 5) {
            $("#name").css("border-color", "#ff0000");
            valide = false;
        }
        else {
            $("#name").css("border-color", "#00FF00");
        }
        if ($("#firstname").val().length < 5) {
            $("#firstname").css("border-color", "#ff0000");
            valide = false;
        }
        else {
            $("#firstname").css("border-color", "#00FF00");
        }
        
        if ($("#adresse").val().length < 5) {
            $("#adresse").css("border-color", "#ff0000");
            valide = false;
        }
        else {
            $("#adresse").css("border-color", "#00FF00");
        }
        if ($("#mail").val().length < 5) {
            $("#mail").css("border-color", "#ff0000");
            valide = false;
        }
        else {
            $("#mail").css("border-color", "#00FF00");
        }

        return valide;

    });
    $("#gps").on("click",function () { 
            
        getLocation();
       });
    $("#valider").on("click",function store(event) { 
        event.preventDefault();

           // récupération de valeurs saisies et les mettre dans des variables input...

            var inputNom= document.getElementById("name");
            var inputPrenom= document.getElementById("firstname");
            var inputDate= document.getElementById("birth");
            var inputAdresse= document.getElementById("adresse");
            var inputEmail= document.getElementById("mail");
            
            if($("#name").val().length >= 5   && $("#firstname").val().length >= 5 && $("#birth").val().length >= 5 && $("#adresse").val().length >= 5 && $("#mail").val().length >= 5 ){
            
            //stockage local de valeurs saisies 

            localStorage.setItem("name", inputNom.value);
            localStorage.setItem("firstname", inputPrenom.value);
            localStorage.setItem("birth", inputDate.value);
            localStorage.setItem("adresse", inputAdresse.value);
            localStorage.setItem("mail", inputEmail.value);
    
           $('#success').addClass("alert alert-success").text("Le formulaire est sauvegardé." );
           $("#table").show();
           $("#liste_des_contacts").show();
          
           
           // ajout des valeurs saisie dans le tableau
           
           document.querySelector("table tbody").innerHTML = document.querySelector("table tbody")
           .innerHTML +'<tr><td>'+localStorage.getItem("name")+'</td><td>'+localStorage.getItem("firstname") +'</td><td>'+localStorage.getItem("birth")+'</td><td><a href="https://maps.google.com/maps?q=' +localStorage.getItem("adresse")+'">'+localStorage.getItem("adresse") +'</a></td><td><a href=mailto:>'+localStorage.getItem("mail")+'</a></td>';
          
          
           document.querySelector("table tbody").innerHTML = document.querySelector("table tbody")
           .innerHTML +'<tr><td>'+contactStore.getList.name.val()+
           '</td><td>'+localStorage.getItem("firstname") +
           '</td><td>'+localStorage.getItem("birth")+'</td><td><a href="https://maps.google.com/maps?q=' +
           localStorage.getItem("adresse")+'">'+localStorage.getItem("adresse") +'</a></td><td><a href=mailto:>'+localStorage.getItem("mail")+'</a></td>';
        } else {
            $('#myModal').modal("show");
        }
         
           
          
      });
    
     
    
    }); 
       
     