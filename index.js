// The for loop is for the case where a click was pressed in one of the pictures
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {

    // Example to understand how we recognise which image we pressed on
    // this.style.color='limegreen';

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);


  });
  // In the second argument we DON'T put parenthesis in the name of the function
  // We want our function to be called when we click on the corresponding button, NOT at the loading of the page
}



// Detecting keyboard press
document.addEventListener("keydown", function(event){
      makeSound(event.key);
});


function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("kick-bass.mp3");
      kick.play();
      break;


    default:
    console.log(buttonInnerHTML);
  }
}
