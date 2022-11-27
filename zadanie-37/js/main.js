let but1 = document.getElementById("dodaj");
let but2 = document.getElementById("usun");
let paragraf = document.getElementById("tekst");
but1.onclick = function() {
    paragraf.textContent = ("Kliknij 'usuń' aby usunąć tekst")
};
but2.onclick = function() {
    paragraf.textContent = ("")
};