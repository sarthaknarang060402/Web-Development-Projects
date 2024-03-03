var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var randomNumber;
function nextSequence() {
  randomNumber = Math.floor(Math.random() * 4);
}
nextSequence();
var randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeOut(100).fadeIn(100)
var playSound = new Audio("/Simon Game Challenge Starting Files/sounds/" + randomChosenColour + ".mp3");
playSound.play();