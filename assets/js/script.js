// ********** Raccolta dati **********
const km = document.getElementById('km');
kmValue = parseInt(km.value);
// debug
console.log(km);
console.log(kmValue);

const age = document.getElementById("age");
ageValue = parseInt(age.value);
// debug
console.log(age);
console.log(ageValue);

const username = document.querySelector("#username").value;

const sendBtn = document.getElementById("submit");
// debug
console.log(sendBtn);

// ********** Esecuzione logica **********

//Claculation normal ticket
let ticket = kmValue * 0.21;
//Calculation discounted ticket
let discount = 0;
let discountApplied = 0;
let priceDiscounted = 0;
let promo = 0;
let carriage = Math.floor(Math.random() * 10 + 1);;
let cp = Math.floor(Math.random() * 10000 + 1);;

sendBtn.addEventListener("click", function(){
    //Show ticket
    const ticketUser = document.querySelector('.ticket-user');
    ticketUser.classList.remove('hidden');
    ticketUser.classList.add('show');

    //IF statement
    if (ageValue >= 65) {
        discount = 40;
        promo = "Offerta Anziani";
    } else if (ageValue < 18) {
        discount = 20;
        promo = "Offerta Giovani";
    }else{
        discount = 0;
        promo = "Nessun Offerta";
    }

    // ********** Output **********
    if (ageValue >= 65 || ageValue < 18) {  
        //Reducted price
        discountApplied = (ticket * discount) / 100;
        console.log("Lo sconto applicato del " + discount + "% è di: " + discountApplied + "€");
        // Final price
        priceDiscounted = ticket - discountApplied;
        console.log("Il prezzo finale è di: " + (priceDiscounted).toFixed(2) + "€"); 
    } else {
        // Reducted price
        console.log("Ci dispiace! Ma non hai uno sconto disponibile");
        // Final price
        priceDiscounted = ticket - discountApplied;
        console.log("Il prezzo finale è di: " + (priceDiscounted).toFixed(2) + "€");
    }

    // Description Ticket
    document.getElementById("user").innerHTML = "<span>" + username + "</span>";
    document.getElementById("promo").innerHTML = "<span>" + promo + "</span>";
    document.getElementById("carriage").innerHTML =
      "<span>" + "Vagone N°: " + carriage + "</span>";
    document.getElementById("cp").innerHTML =
      "<span>" + "CP: " + cp + "</span>";
    document.getElementById("price").innerHTML =
      "<span>" + "Prezzo: " + priceDiscounted.toFixed(2) + "€" + "</span>";
});

