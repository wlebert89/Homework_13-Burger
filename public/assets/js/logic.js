$(function () {
    $("#post-form").on("click", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#form-input").val().trim()
        };
        console.log(newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("New burger posted.");
            location.reload();
        });
    });
});