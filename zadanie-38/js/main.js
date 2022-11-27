function dzialania (a, b) {
    let dodawanie = a + b;
    let odejmowanie = a - b;
    let mnozenie = a * b;
    if (dodawanie < 0) {
        console.log("Wynik jest nieprawidłowy")
    } else {
        console.log(`Wynik dodawania wynosi ${dodawanie}`)
    };
    if (odejmowanie < 0) {
        console.log("Wynik jest nieprawidłowy")
    } else {
        console.log(`Wynik odejmowania wynosi ${odejmowanie}`)
    };
    if (mnozenie < 0) {
        console.log("Wynik jest nieprawidłowy")
    } else {
        console.log(`Wynik mnożenia wynosi ${mnozenie}`)
    };
};
dzialania(2, -1)