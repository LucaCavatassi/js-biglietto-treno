//DATA
//km
const userKmString = prompt ("Quanti KM devi percorrere?"); // string
console.log(userKmString, typeof userKmString);
const userKmNum = parseInt(userKmString); //number
console.log(userKmNum, typeof userKmNum);

//age
const userAge = prompt ("Quanti hanni hai?"); // string
console.log(userAge, typeof userAge);

//LOGIC
let fullPrice = (userKmNum * 0.21);
console.log(fullPrice, typeof fullPrice);

if (userAge < 18) {
    fullPrice = (fullPrice - (fullPrice * 0.20));
    console.log(fullPrice - (fullPrice * 0.20), typeof fullPrice);
} else if (userAge > 65) {
    fullPrice = (fullPrice - (fullPrice * 0.40));
    console.log(fullPrice - (fullPrice * 0.40), typeof fullPrice);
} else {
    fullPrice = fullPrice;
    console.log(fullPrice, typeof fullPrice);
}

const fixedPrice = fullPrice.toFixed(2);
console.log(fixedPrice, typeof fixedPrice);

//OUTPUT
document.getElementById("result").innerHTML = (`Questo è il prezzo del biglietto ${fixedPrice}€`)
