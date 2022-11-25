let paragraf = document.getElementById("opis");
let przycisk = document.querySelector("button");
przycisk.onclick = function() {
    paragraf.textContent = ("Właśnie został dodany tekst do paragrafu!"); 
};