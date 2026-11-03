//let count = 0;

//let buttonCreature = {
    //name: "Swirl",
    //species: "Candy",
    //favoriteFood: "Syrup",
    //moods: ["happy", "Calm", "", "excited", "worried", "scared"]
//};

//$("#About-Me").click(function () {

    //count = count + 1;

    //let arrayPosition = count - 1;

    //let currentMood = buttonCreature.moods[arrayPosition];

    //let message = "<p>My name is " + buttonCreature.name + ".</p>";
    //message = message + "<p>I am an " + buttonCreature.species + ".</p>";
    //message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";
    //message = message + "<p>My current mood is " + currentMood + ".</p>";
    //$("#environment-output").html(message);
    
    //console.log(count);
    //console.log(arrayPosition);
    //console.log(currentMood);

//});
//$("#question").click(function () {

    //count = count + 1;

    //let arrayPosition = count - 1;

    //let currentMood = buttonCreature.moods[arrayPosition];

    //let message = "<p> Why are you here? How did you get here? You aren't candy! </p>";
    
    //$("#environment-output").html(message);
    
    //console.log(count);
    //console.log(arrayPosition);
    //console.log(currentMood);

//});


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