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
const modalRemoves = document.querySelectorAll(".modal-remove");
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

modalRemoves.forEach(remove => remove.addEventListener('click', () => {
  modalbg.classList.remove("active");
}));

// valide label/imputs

first.addEventListener('keyup', validateFirst);


    
function validateFirst() {
    if(first.value.length == 0){
        firstNameError.innerText = "le nom est requie";
        first.classList.remove('activeGreen');
        first.classList.add('activeRed');
        
        return false;
    } else if(!first.value.match(/^[A-Za-z]{2,}$/)) {
        firstNameError.innerText = "Renseignez au moins deux lettres";
        first.classList.remove('activeGreen');
        first.classList.add('activeRed');
        return false;
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
  } else if(!last.value.match(/^[A-Za-z]{2,}$/)) {
      NameError.innerText = "Renseignez au moins deux lettres";
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
    
function validateEmail(){
    if(email.value.length == 0){
        emailError.innerText = "Renseignez votre email";
        email.classList.remove('activeGreen');
        email.classList.add('activeRed');
        return false;

    } else if(!email.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerText = "Renseignez un email valide";
        email.classList.remove('activeGreen');
        email.classList.add('activeRed');
        return false;

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
      validateCheckbox = true;
      checkboxInputsError.innertext = "";
      
    } else {
      validateCheckbox = false;
      checkboxInputsError.innertext = "Veuillez sélectionner au moins un choix";
    }
    //return validateCheckbox;
    
  });
  
}


/*
let count = 0;

for( let i=0; i<checkboxes.length; i++){

  checkboxes[i].addEventListener('click', validateCheckboxes);

} 

function validateCheckboxes(){

  // S'assurer que la checkbox est cochée ou non
  if(this.checked){
    count++;
  } else {
    count--;
  }

  // On définie un boléen pour valider si au moins une checkbox est validée.
  if(count != 0){
    return true;
    checkboxInputsError.innertext = "";
    
  } else {
    return false;
    checkboxInputsError.innertext = "Veuillez sélectionner au moins un choix";
  }
  
};
*/


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
    // validateCheckboxes() == false ||
    validateCheckbox1() == false)
    {
      e.preventDefault();
      validationSubmitError.innerText = "veuillez renseigner tous les champs";
      return false;
    }  else {
      alert("votre message à bien été envoyé");
      
    }
});
