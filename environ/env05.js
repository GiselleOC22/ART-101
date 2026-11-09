let messagesA = ["My name is Swirl, my species is Candy, my favoriteFood Syrup", "Why are you here? How did you get here? You aren't candy!", "That's weird",];
let counterA = 0;

let messagesB = ["Hello", "I'm not, I just got teleported here!",];
let counterB = 0;

$("#A").click(function () {

    if (counterA == 2) {
        $("#answers").css("display", "flex");
        $("#chat").append("<p>Swirl: " + messagesA[counterA] + "</p>");
        counterA = counterA + 1;
        counterB=1000;
    }
    else if ( counterA == counterB ) {
        $("#chat").append("<p>Swirl: " + messagesA[counterA] + "</p>");
        counterA = counterA + 1;
    }

});

$("#B").click(function () {

    if (counterB < counterA) {

        $("#chat").append("<p>You: " + messagesB[counterB] + "</p>");
        counterB = counterB + 1;

    }

});

let following = false;

$("#swirl").click(function () {
  $(this).toggleClass("transformed");
  $("#status").text("The swirl changed shape.");
});

$("#swirl").hover(
  function () {
    $("#thought").stop(true, true).slideDown(300);
    $("#status").text("The swirl revealed a thought.");
  },
  function () {
    $("#thought").stop(true, true).slideUp(300);
    $("#status").text("The thought disappeared.");
  }
);

$(document).keydown(function (event) {
  if (event.key === " " || event.code === "Space") {
    event.preventDefault();

    following = !following;
    $("#swirl").toggleClass("following");

    if (following === true) {
      $("#status").text("The swirl is following your cursor.");
    } else {
      $("#status").text("The swirl stopped following you.");
    }
  }
});

$(document).mousemove(function (event) {
  if (following === true) {
    $("#swirl").css({
      left: event.pageX - $("#scene").offset().left + 30,
      top: event.pageY - $("#scene").offset().top + 30
    });
  }
});