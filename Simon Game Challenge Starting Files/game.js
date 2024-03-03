var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var isStarted = false;
var level = 0;

function startOver() {
  level = 0;
  isStarted = false;
  gamePattern = [];
}

function playSound(name) {
  var sound = new Audio("/Simon Game Challenge Starting Files/sounds/" + name + ".mp3");
  sound.play();
}

function nextSequence() {
  $("h1").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(150).fadeIn(150)
  playSound(randomChosenColour)
  level++;
  userClickedPattern = [];
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 200);
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length)
      nextSequence();
  }
  else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200)
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

$(document).on("keydown", function() {
  if (isStarted === true)
    return;
  setTimeout(nextSequence(), 2000);
  isStarted = true;
});

$(".btn").click(function() {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour)
  playSound(userChosenColour)
  animatePress(userChosenColour)
  checkAnswer(userClickedPattern.length - 1)
});