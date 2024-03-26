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

sendBtn.addEventListener("click", function(){
    if (ageValue >= 65) {
        discount = 40;
    } else if (ageValue < 18) {
        discount = 20;
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
        console.log("Il prezzo finale è di: " + (ticket).toFixed(2) + "€");
    }
});