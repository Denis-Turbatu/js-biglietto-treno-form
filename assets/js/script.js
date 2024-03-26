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
sendBtn.addEventListener("click", function(){
    //Claculation normal ticket
    let ticket = kmValue * 0.21;
    //Calculation discounted ticket
    let priceDiscounted = ticket - discontApplied;

    if(ageValue >= 65){
        const discontOver65 = 40;
        let discontApplied= (ticket * discontOver65) / 100;
        
    }else if(ageValue < 18){
        const discontMinor = 20;
        let discontApplied= (ticket * discontMinor) / 100;
    }
});




