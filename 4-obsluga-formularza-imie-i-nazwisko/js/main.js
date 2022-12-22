let form = document.getElementById("form");
const submitForm = (event) => {
    event.preventDefault();
    let fn = document.querySelector('[name="fname"]');
    let ln = document.querySelector('[name="lname"]');
    console.log(fn.value);
    console.log(ln.value);
}
form.addEventListener("submit", submitForm);