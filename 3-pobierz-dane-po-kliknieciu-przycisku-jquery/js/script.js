$(document).ready(function () {
    $("#btn").click(function () {
        // Użycie metody $.get()
        /* $.get(" https://akademia108.pl/api/ajax/get-post.php")
            .done(function(data) {
                console.log(data);
                let pUserID = $("<p></p>").text(`User ID: ${data.userId}`);
                let pID = $("<p></p>").text(`Post ID: ${data.id}`);
                let pTitle = $("<p></p>").text(`Title: ${data.title}`);
                let pBody = $("<p></p>").text(`Body: ${data.body}`);

                $("body").append(pUserID);
                $("body").append(pID);
                $("body").append(pTitle);
                $("body").append(pBody);
                
            })
            .fail(function(error) {
                console.error(error);
            }) */

        // Użycie metody $.getJSON()
        $.getJSON(" https://akademia108.pl/api/ajax/get-post.php")
            .done(function(data) {
                console.log(data);
                let pUserID = $("<p></p>").text(`User ID: ${data.userId}`);
                let pID = $("<p></p>").text(`Post ID: ${data.id}`);
                let pTitle = $("<p></p>").text(`Title: ${data.title}`);
                let pBody = $("<p></p>").text(`Body: ${data.body}`);

                $("body").append(pUserID);
                $("body").append(pID);
                $("body").append(pTitle);
                $("body").append(pBody);
                
            })
            .fail(function(error) {
                console.error(error);
            })

    })
})