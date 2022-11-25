let jeden = 'Uwielbiam JavaScript';
let dwa = 'Jestem świetnym programistą';
function longerString (firstString, secondString) {
    if (firstString.length > secondString.length) {
        return firstString;
    } else {
        return secondString;
    }
}
console.log(longerString(jeden, dwa));