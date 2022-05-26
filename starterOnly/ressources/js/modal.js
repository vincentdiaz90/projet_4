function editNav() {
  let x = document.querySelector("#myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalRemoves = document.querySelector(".modal-remove");
const modalAdd = document.querySelector(".modal-add");


let firstNameError = document.querySelector('#firstName-error');
let NameError = document.querySelector('#name-error');
let emailError = document.querySelector('#email-error');
let birthdateError = document.querySelector('#birthdate-error');
let numberCompetitionError = document.querySelector('#numberCompetition-error');
let checkbox1Error = document.querySelector("#checkbox1-error");
let checkboxInputsError = document.querySelector("#checkboxInputs-error");
let validationSubmitError = document.querySelector("#validationSubmit-error");

let first = document.querySelector('#first');
let last = document.querySelector('#last');
let email = document.querySelector('#email');
let birthdate = document.querySelector('#birthdate');
let checkboxes = document.querySelectorAll('.location');
let quantity = document.querySelector('#quantity');
let formInscription = document.querySelector("#formInscription");
let submitForm = document.querySelector("#submitForm");
let checkbox1 = document.querySelector("#checkbox1");


// launch modal event

    // ouverture

modalAdd.addEventListener("click", () => {
  modalbg.classList.add("active");
});

    // fermeture
modalRemoves.addEventListener("click", () => {
  modalbg.classList.remove("active");
});





// valide label/imputs

  // Ecoute de l'évenement au relevé d'une touche du clavier pour le prénom

first.addEventListener('keyup', validateFirst);
  
  // Création d'une condition (3 cas possibles)

function validateFirst() {

    // Aucune lettre n'est renseignée
    if(first.value.length == 0){
        firstNameError.innerText = "le nom est requie";
        //suppression de la class activeGreen et insertion de la classe activeRed
        first.classList.remove('activeGreen');
        first.classList.add('activeRed');
        return false;

    // Utilisation d'une expression régulière où on regarde si notre saisie est différente de notre partern
    // On accepte toutes les lettres minuscules majuscules au nombre minimum de deux
    } else if(!first.value.match(/^[A-Za-z]{2,}$/)) {
        firstNameError.innerText = "Renseignez au moins deux lettres";
        //suppression de la class activeRed et insertion de la classe activeGreen
        first.classList.remove('activeGreen');
        first.classList.add('activeRed');
        return false;

    // Tout est ok
    } else {
        firstNameError.innerText = "";
        first.classList.remove('activeRed');
        first.classList.add('activeGreen');
        return true;
    }
};

last.addEventListener('keyup', validateLast);

function validateLast() {
  if(last.value.length == 0){
      NameError.innerText = "le prénom est requie";
      last.classList.remove('activeGreen');
      last.classList.add('activeRed');
      return false;
  } else if(!last.value.match(/^[A-Z]{1,1}[A-Za-z]{1,}$/)) {
      NameError.innerText = "Renseignez au moins deux lettres dont la première en majuscule";
      last.classList.remove('activeGreen');
      last.classList.add('activeRed');
      return false;
  } else {
      NameError.innerText = "";
      last.classList.remove('activeRed');
      last.classList.add('activeGreen');
      return true;
  }
};

email.addEventListener('keyup', validateEmail);

  // Verifie une condition (3 cas possibles)
    
function validateEmail(){

    // Aucune information n'est saisie dans l'espace
    if(email.value.length == 0){
        emailError.innerText = "Renseignez votre email";
        email.classList.remove('activeGreen');
        email.classList.add('activeRed');
        return false;

    //Correspondance avec le regex
    //On acccepte les lettres chiffres pouvant être séparer par les ponctuation - _ . suivit obligatoirement par un @ suivit par des lettre ouis un . puis entre 2 et 4 lettres
    } else if(!email.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerText = "Renseignez un email valide";
        email.classList.remove('activeGreen');
        email.classList.add('activeRed');
        return false;

    // Tout est ok
    } else {
        emailError.innerText = "";
        email.classList.remove('activeRed');
        email.classList.add('activeGreen');
        return true;
    }
};

quantity.addEventListener('change', validateQuantity);
    
function validateQuantity(){
    if(quantity.value.length == 0){
        numberCompetitionError.innerText = "Renseignez le nombre de tournois déjà participé";
        quantity.classList.remove('activeGreen');
        quantity.classList.add('activeRed');
        return false;

    } else if(!quantity.value.match(/^[0-9]{1,2}$/)) {
        numberCompetitionError.innerText = "Renseignez un nombre valide";
        quantity.classList.remove('activeGreen');
        quantity.classList.add('activeRed');
        return false;

    } else {
      numberCompetitionError.innerText = "";
        quantity.classList.remove('activeRed');
        quantity.classList.add('activeGreen');
        return true;
    }
};




birthdate.addEventListener('change', validateBirthdate);

function validateBirthdate(){

  // On va comparer la date actuelle à la date de naissance de l'utilisateur que l'on va respectivement exprimer le resete sur 01/01/1970 : getTime /timeStamp et si la diff > 18 ans alors il est majeur
  
  // Date actuelle :
  let CurrentDate = new Date();
  let CurrentDateTime = CurrentDate.getTime();

  //Date enregistrée par l'utilisateur :

  let birthdateAnnee = birthdate.value.split('-')[0];
  let birthdateAnneeTimeStamp = ((birthdateAnnee - 1970) * 31539999999.998889923);

  let birthdateMois = birthdate.value.split('-')[1];
  let birthdateMoisTimeStamp = (birthdateMois * 2628336213.6985373497);


  let birthdateJour = birthdate.value.split('-')[2];
  let birthdateJourTimeStamp = birthdateJour * 86410958.904106542468;

  let totalTimeStamp = birthdateAnneeTimeStamp + birthdateMoisTimeStamp + birthdateJourTimeStamp;
  
  // date exprimé par l'utilisateur base 01/01/1970
  let diff = (CurrentDateTime - totalTimeStamp);
  

  // soustraction de l'équivalent d'un mois car le tableau obtenu commence à l'indice 0 pour le mois alors qu'on calcule nous à partir de 1 mois
  let majorite = (18 * 31539999999.998889923) - 1874587407;

  let isMajeur = diff - majorite;



  if(birthdate.value.length == 0){
    birthdateError.innerText = ('Renseigner votre date de naissance');
    birthdate.classList.remove('activeGreen');
    birthdate.classList.add('activeRed');
    return false;
    
  } else if(isMajeur < 0) {
    birthdateError.innerText = ('Vous devez être majeur pour participer à ce tournoi');
    birthdate.classList.remove('activeGreen');
    birthdate.classList.add('activeRed');
    return false;

  } else {
    birthdateError.innerText = "";
    birthdate.classList.remove('activeRed');
    birthdate.classList.add('activeGreen');
    return true;
  }
}



let count = 0;
let validateCheckbox = false;

for( let i=0; i<checkboxes.length; i++){
  checkboxes[i].addEventListener('click', function() {

    // S'assurer que la checkbox est cochée ou non
    if(this.checked){
      count++;
    } else {
      count--;
    }

    // On définie un boléen pour valider si au moins une checkbox est validée.
    if(count != 0){
      checkboxInputsError.innertext = "";
      validateCheckbox = true;
      
    } else {
      checkboxInputsError.innertext = "Veuillez sélectionner au moins un choix";
      validateCheckbox = false;
    }
    
  });
  
}



checkbox1.addEventListener('click', validateCheckbox1);
    
function validateCheckbox1(){
    if(!checkbox1["checked"]){
      checkbox1Error.innerText = "Vous devez accepter les conditions pour continuer";
      return false;
    } else {
      checkbox1Error.innerText = "";
      return true;
    }
};


// validate submit



formInscription.addEventListener('submit', function(e){

  if(validateFirst() == false || 
    validateLast() == false|| 
    validateEmail() == false|| 
    validateQuantity() == false||
    validateBirthdate() == false ||
    validateCheckbox == false ||
    validateCheckbox1() == false)
    {
      e.preventDefault();
      validationSubmitError.innerText = "Veuillez renseigner tous les champs";
      return false;
    }  else {
      validationSubmitError.innerText = "";
      alert("votre message à bien été envoyé");
    }
});
