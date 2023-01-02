console.log("Hello World!");
let btn = document.getElementById("btn");

const getData = () => {

    fetch("https://akademia108.pl/api/ajax/get-post.php")
        .then(res => res.json())
        .then(data => {

            let pUserID = document.createElement("p");
            let pID = document.createElement("p");
            let pTitle = document.createElement("p");
            let pBody = document.createElement("p");

            pUserID.innerText = `User ID: ${data.userId}`;
            pID.innerText = `Post ID: ${data.id}`;
            pTitle.innerText = `Title: ${data.title}`;
            pBody.innerText = `Body: ${data.body}`;

            btn.after(pUserID);
            pUserID.after(pID);
            pID.after(pTitle);
            pTitle.after(pBody);
        })
        .catch(error => {
            console.error(error)
        })

};

btn.addEventListener("click", getData);