function zasieg (n) {
    if (n > 200) {
        return 'liczba nie znajduje się w przedziale';
    } else if (n < 100) {
        return 'liczba nie znajduje się w przedziale';
    } else {
        return 'liczba znajduje się w przedziale';
    }
};
console.log(zasieg(123));