console.log("okay let's go!")
let newsLetterForm = document.getElementById("newsletter-form");
let agreeAllCheckbox = document.getElementById("agree-all");

const validate = (event) => {

    let txtName = document.getElementById('fname_lname');
    let txtEmail = document.getElementById("e-mail");
    let agree1 = document.getElementById("agree-1");
    let errors = document.querySelector(".errors");

    errors.innerHTML = '';

    if (txtName.value.trim() === "") {
        let liError = document.createElement("li");
        liError.innerText = "Zapomniałeś o imieniu i nazwisku!";
        errors.appendChild(liError);
    }

    if (txtEmail.value.trim() === "") {
        let liError = document.createElement("li");
        liError.innerText = "Zapomniałeś o emailu!";
        errors.appendChild(liError);
    }

    if (!txtEmail.value.includes("@")) {
        let liError = document.createElement("li");
        liError.innerText = "Adres e-mail musi zawierać @!";
        errors.appendChild(liError);
    }

    if (!agree1.checked) {
        let liError = document.createElement("li");
        liError.innerText = "Nie wyraziłeś zgody na pierwszą umowę marketingową!";
        errors.appendChild(liError);
    }
    if (errors.children.length > 0) {
        event.preventDefault();
    }
}

newsLetterForm.addEventListener("submit", validate);

const agreeAll = (event) => {
    let agree1 = document.getElementById("agree-1");
    let agree2 = document.getElementById("agree-2");

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
}
agreeAllCheckbox.addEventListener("change", agreeAll);
