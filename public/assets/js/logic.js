$(function () {
    $("#post-form").on("click", function (event) {
        event.preventDefault();
        var newPotion = {
            potion_name: $("#form-input").val().trim()
        };
        console.log(newPotion);
        $.ajax("/api/potions", {
            type: "POST",
            data: newPotion
        }).then(function () {
            console.log("New potion posted.");
            location.reload();
        });
    });

    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        console.log(id);
        $.ajax("api/potions/" + id, {
            type: "PUT",
            data: id
        }).then(function (){
            console.log("Route hit.");
            location.reload();
        });
    });
});