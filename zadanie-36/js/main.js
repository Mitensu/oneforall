function sprawdzenie (a, b) {
    if (a === 20 || b === 20) {
        return 'true';
    } else if (a + b <= 20) {
        return 'true';
    } else {
        return 'false';
    }
};
console.log(sprawdzenie(4, 6));