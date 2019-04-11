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

    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        console.log(id);
        $.ajax("api/burgers/" + id, {
            type: "PUT",
            data: id
        }).then(function (){
            console.log("Route hit.");
            location.reload();
        });
    });
});