const youngDiscount = 0.20;
const oldDiscount = 0.40;
const price = 0.21;

//Inizializzo nome e cognome utente e controllo che abbia valore stringa
var myName, surname;
var cont = false
while (cont==false) {
    myName = prompt("Benvenuto sul portale della stazione ferroviaria di Roma.\nPrenota il tuo biglietto...\nInserisci il tuo nome");
    console.log(myName);
    if (isNaN(myName)) {
        cont = true;
    } else {
        alert("Errore... inserire il proprio nome utilizzando solo caratteri");
    }
}
cont = false;

while (cont == false) {
    surname = prompt("Inserisci il tuo cognome");
    console.log(surname);
    if (isNaN(surname)) {
        cont = true;
    } else {
        alert("Errore... inserire il proprio cognome utilizzando solo caratteri");
    }
}

var identity = myName + " " + surname;
document.getElementById('name1').innerHTML = identity;
document.getElementById('name2').innerHTML = identity;

var destination;
cont = false;

while (cont==false) {
    destination = prompt("Inserisci la tua destinazione tra quelle indicate:\nBologna\nFirenze\nNapoli\nMilano\nVenezia");
    if (destination == "Bologna" || destination == "Napoli" || destination == "Firenze" || destination == "Venezia" || destination == "Milano") {
        document.getElementById('to1').innerHTML = destination;
        document.getElementById('to2').innerHTML = destination;
        cont=true;
    }
    else {
        alert("Errore... Inserisci correttamente utilizzando la lettera maiuscola")
    }
}

var age;
//Controllo se l'età inserita è un numero
cont = false;
while (cont==false) {
    age = prompt("Inserisci la tua età");
    if (isNaN(age)) {
        alert('Il valore inserito deve essere numerico');
    } else if (age > 110) {
        alert("Complimenti potresti fare concorrenza alla Regina Elisabetta!\nOra fai meno lo spiritoso"); //Perdonatemi ma ci voleva :)
    } else {
        cont = true;
    }
}


//Inizializzo un oggetto con classe Date e calcolo ore e minuti
var departTime = new Date();
var departTimeHours = departTime.getHours();
var departTimeMinutes = departTime.getMinutes();

if (departTimeMinutes.length < 2) {
    departTimeMinutes = "0" + departTimeMinutes;
}
else if 
    (departTimeMinutes.length < 1) {
    departTimeMinutes = "00";
}

//Creo variabili per stabilire la data

var today = departTime.getUTCDate();
var month = departTime.getMonth() + 1;
var year = departTime.getFullYear();
var myDate = today + "/" + month + "/" + year;
document.getElementById('date1').innerHTML = myDate;
document.getElementById('date2').innerHTML = myDate;

departTime = document.getElementById("depart_time1").innerHTML = departTimeHours + ":" + departTimeMinutes;
departTime = document.getElementById("depart_time2").innerHTML = departTimeHours + ":" + departTimeMinutes;

//Stabilisco distanza in km dalle varie città
var distance;

if (destination == "Bologna") {
    distance = 303;
}
else if (destination == "Napoli") {
    distance = 189;
}
else if (destination == "Firenze") {
    distance = 232;
}
else if (destination == "Milano") {
    distance = 477;
}
else {
    distance = 394;
}

//Stabilisco il prezzo del biglietto e calcolo sconto
var ticketPrice = distance * price;
var discount;

if (age < 18) {
    discount = ticketPrice * youngDiscount;
    ticketPrice -= discount;
    document.getElementById('star').innerHTML = ("*Al cliente minorenne è applicato sconto pari a € " + Math.round(discount * 100) / 100);
}
else if (age > 65 && age <= 110) {
    discount = ticketPrice * oldDiscount;
    ticketPrice -= discount;
    document.getElementById('star').innerHTML = ("*Al cliente over 65 è applicato sconto pari a € " + Math.round(discount * 100) / 100);
}

document.getElementById('price').innerHTML = Math.round(ticketPrice * 100) / 100; //Per arrotondare a 2 cifre decimali
