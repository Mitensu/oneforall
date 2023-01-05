let endOfThePage = 0;

const showPreloader = () => {
    let preloader = document.getElementById("preloader");
    preloader.style.display = "block"
}

const hidePreloader = () => {
    let preloader = document.getElementById("preloader");
    preloader.style.display = "none"
}
let preloading = false;

const getData = () => {
    if (!preloading) {
        preloading = true;

        fetch("https://akademia108.pl/api/ajax/get-users.php")
            .then(res => res.json())
            .then(data => {
                for (let user of data) {
                    let pID = document.createElement("p");
                    let pName = document.createElement("p");
                    let pWebsite = document.createElement("p");

                    pID.innerText = `Used ID ${user.id}`;
                    pName.innerText = `Used Name ${user.name}`;
                    pWebsite.innerHTML = `Used URL ${user.website}<br />--------`;

                    let body = document.body;
                    body.appendChild(pID);
                    body.appendChild(pName);
                    body.appendChild(pWebsite);
                }
                preloading = false;
                hidePreloader();
            })
            .catch(error => {
                console.error(error);
            })
    }

}

const scrollToEndOfPage = () => {
    let d = document.documentElement;
    let scrollHeight = d.scrollHeight;
    let scrollTop = d.scrollTop;
    let clientHeight = d.clientHeight;
    let sumTopAndHeight = Math.ceil(scrollTop + clientHeight);

    // console.log(`ScrollHeight: ${scrollHeight}`);
    // console.log(`ScrollTop: ${scrollTop}`);
    // console.log(`ClientHeight: ${clientHeight}`);
    // console.log("/////////////")

    if (sumTopAndHeight >= scrollHeight) {
        showPreloader();
        getData();
    }
}


window.addEventListener("scroll", scrollToEndOfPage);