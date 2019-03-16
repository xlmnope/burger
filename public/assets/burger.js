// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {


  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var cookieName = $("#cb").val().trim();
    var img
    console.log(cookieName);
    switch (cookieName) { //tolowercase
      case
        "vanilla": {
         img = "vanilla";
        console.log(img);
        break;
      }
      case
        "christmas":{
        img = "christmas";
        console.log(img);
        break;
        }
      case "caramel":{
        console.log("caramel switch statement click handler");
        img = "caramelchip";
        console.log(img);
        break;
      }
      default: {
         img = "chocolatechip";
      }
    }
    var imgURL = "/assets/img/cookiePNGs/" + img + ".png"
    console.log(imgURL);
    
    var newBurger = {
      name: $("#cb").val().trim(),
      devoured: 0,
      img_url: imgURL
    };
    console.log("newBurger", newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: JSON.stringify(newBurger),
      contentType: "application/json"
    }).then(
      function () {
        console.log("created new burg");
        // Reload the page to get the updated list
        location.reload(true);
      }
    );
  });

  $(".eatcookie").on("click", function (event) {
    console.log("eatcookie click handler");
    event.preventDefault();
    var id = ($(this).parent().attr("data"));
   
    var newdevourstate = {
      devoured: 1
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newdevourstate
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload(true);
      });
  });
});
