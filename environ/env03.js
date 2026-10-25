let count = 0;

let buttonCreature = {
    name: "Swirl",
    species: "Candy",
    favoriteFood: "Syrup",
    moods: ["happy", "Calm", "", "excited", "worried", "scared"]
};

$("#About-Me").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

    let message = "<p>My name is " + buttonCreature.name + ".</p>";
    message = message + "<p>I am an " + buttonCreature.species + ".</p>";
    message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";
    message = message + "<p>My current mood is " + currentMood + ".</p>";
    $("#environment-output").html(message);
    
    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});
$("#question").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

    let message = "<p> Why are you here? How did you get here? You aren't candy! </p>";
    
    $("#environment-output").html(message);
    
    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});
