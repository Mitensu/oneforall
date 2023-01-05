console.log("Dodatkowe zadanie");
let btn = document.getElementById("oblicz");
function sortfunction(a, b) {
    return (a - b)
}
btn.addEventListener("click", function () {
    let pracownicy = document.querySelectorAll("[id^='pracownik']");
    let godziny = [];
    for (let i = 0; i < pracownicy.length; i++) {
        // const element = pracownicy[i];
        // console.log(pracownicy[i].querySelector(".czas").value);
        let czas = pracownicy[i].querySelector(".czas").value;
        let stawka = pracownicy[i].querySelector(".stawka").value;
        let wyplata = 0;
        let nadgodziny = 0;
        if (czas > 160) {
            nadgodziny = czas - 160;
            wyplata = (160 * stawka) + nadgodziny * (stawka * 2);
            pracownicy[i].querySelector(".wyplata").innerHTML = wyplata;
            let ppgodziny = +(pracownicy[i].querySelector(".czas").value);
            godziny.push(ppgodziny);
        } else if (czas < 100) {
            pracownicy[i].style.backgroundColor = "red";
            wyplata = czas * stawka
            pracownicy[i].querySelector(".wyplata").innerHTML = wyplata;
            let ppgodziny = +(pracownicy[i].querySelector(".czas").value);
            godziny.push(ppgodziny);
        } else {
            wyplata = czas * stawka;
            pracownicy[i].querySelector(".wyplata").innerHTML = wyplata;
            let ppgodziny = +(pracownicy[i].querySelector(".czas").value);
            godziny.push(ppgodziny);
        }
    }
    godziny.sort(sortfunction);
    console.log(godziny);

    let top1 = document.createElement("p");
    let top2 = document.createElement("p");
    let top3 = document.createElement("p");
    let body = document.querySelector("body");

    body.appendChild(top1);
    body.appendChild(top2);
    body.appendChild(top3);

    for (let i = 0; i < pracownicy.length; i++) {
        let wyplata = 0;
        let nadgodziny = 0;
        if (pracownicy[i].querySelector(".czas").value == godziny[godziny.length - 1]) {
            top1.innerText = "1." + pracownicy[i].querySelector(".pracownik").innerHTML;
        } else if (pracownicy[i].querySelector(".czas").value == godziny[godziny.length - 2]) {
            top2.innerText = "2." + pracownicy[i].querySelector(".pracownik").innerHTML;
        } else if (pracownicy[i].querySelector(".czas").value == godziny[godziny.length - 3]) {
            top3.innerText = "3." + pracownicy[i].querySelector(".pracownik").innerHTML;
        }
    }
})