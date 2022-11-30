let imie_f = document.getElementById("imie");
let nazwisko_f = document.getElementById("nazwisko");
let numer_f = document.getElementById("numer");
let imie_p = document.getElementById("name");
let nazwisko_p = document.getElementById("surename");
let numer_p = document.getElementById("phone");
let przycisk = document.querySelector("button");
przycisk.onclick = function() {
    imie_p.textContent = imie_f.value;
    nazwisko_p.textContent = nazwisko_f.value;
    numer_p.textContent = numer_f.value;
};