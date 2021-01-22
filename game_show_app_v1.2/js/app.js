let qwerty = document.getElementById("qwerty");
let phrase = document.getElementById("phrase");
let misses = 0;

let start = document.getElementsByClassName("btn__reset")[0];

let phrases = ["A blessing in disguise", "A dime a dozen", "Beat around the bush", "Hit the sack", "No pain, no gain"];
let idomLetters = [];

getRandomPhraseAsArray(phrases);

addPhraseToDisplay(idomLetters);


// listen for the start game button to be pressed
start.addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
});

// return a random phrase from an array
function getRandomPhraseAsArray(arr){

    let randomGenerator = Math.floor(Math.random()*5);
    console.log(randomGenerator);

    idomLetters = arr[randomGenerator].split("");
    
    console.log(idomLetters);
    return idomLetters;
}

// adds the letters of string to the display
function addPhraseToDisplay(arr) {
    
    // for(let i = 0; i < arr.length; i++){
    //     let letter = arr[i];
    //     if(letter !== " ") {
    //         let entry = document.createElement('li');
    //         entry.appendChild(document.createTextNode(letter));
    //         phrase.getElementsByTagName("ul")[0].appendChild(entry);
    //         console.log(letter);
    //     }
    // }

    // loop through array of characters
  for (let i = 0; i < arr.length; i++) {
    const letter = arr[i];
    // For each character, create a list item
    const item = document.createElement('li');
    // Put each character inside the list item
    item.textContent = letter;

    // Add the appropriate class to the list items
    if (letter !== " ") {
      item.className = 'letter';
    } else {
      item.className = 'space';
    }

    // Append the list item to the DOM (specifically to the #phrase ul )
    ul.appendChild(item);
  }
}

// check if a letter is in the phrase
function checkLetter(guessBtn){

    // let buttonLetter = button.text;
    // document.getElementsByClassName("letter");
    
    // if(idomLetters.includes(buttonLetter)){
    //     show();
    // }


      // Loop through the characters in the phrase
  for (let i = 0; i < li.length; i++) {
    // Make sure a letter is chosen
    if ( li[i].classList.contains('letter') ) {

        // Check the textContent of the button to see if there's a match
        if (li[i].textContent === guessBtn) {
          // Add the 'show' class
          li[i].classList.add('show');
          // Save the correct guess
          letterFound = guessBtn;
        }
    }
  }

  // Return the matching letter guessed correct;
  // Otherwise, return null for incorrect guess
  return letterFound;
}

// check if the game has been won or lost
function checkWin(){
    // Initialize the counters
    // Counter 1 - 'show' class:
    const listItemArray = document.querySelector('ul').children;
  
    let counterShow = 0;
    for (let i = 0; i < listItemArray.length; i++) {
      // check for the 'show' class
      if(listItemArray[i].classList.contains('show')) {
        counterShow += 1;
      }
    }
  
  // Counter 2 - 'letter' class:
    let counterLetters = 0;
    for (let i = 0; i < listItemArray.length; i++) {
      // count the number of letters (exclude spaces) in the phrase
      if(listItemArray[i].classList.contains('letter')) {
        counterLetters += 1;
      }
    }
    // console.log(guessesMissed);
  
      // Check for a win
      if ( counterShow === counterLetters ) {
  
        // Wait for the animation to complete
        setTimeout(function(){
          // Display win overlay
          overlay.style.display = 'flex';
          overlay.classList.add('win');
          overlay.appendChild(win);
        }, 2000);
  
  
      } else {
          // keep playing
          // console.log('checking to see if you won...');
          // console.log(guessesMissed);
  
            if ( guessesMissed < 5 ) {
                // keep playing
                // console.log('letters shown: ' + counterShow);
                // console.log('letters in phrase: ' + counterLetters);
  
            } else if (guessesMissed === 5) {
  
              // Give animation time to finish
              // Disable the rest of the buttons in meantime
              const buttons = document.querySelectorAll('#qwerty button');
              for (let i = 0; i < buttons.length; i++) {
                buttons[i].setAttribute('disabled', '');
              }
  
              setTimeout(function(){
                // Otherwise, if the number of misses is equal to or greater than 5, show the overlay screen with the “lose” class
                overlay.style.display = 'flex';
                overlay.classList.add('lose');
                overlay.appendChild(lose);
              }, 2000);
  
            }
      }
  }
  
  // ==================================
  // Listen for clicks to the keyboard
  // ==================================
  qwerty.addEventListener('click', function(evt){
  
    if (evt.target.tagName === 'BUTTON') {
      let character = evt.target.textContent;
      evt.target.setAttribute('disabled', '');
      evt.target.classList.add('chosen');
      checkLetter(character);
      if (letterFound === character) {
        // console.log('good job!');
        checkWin();
      } else {
        // remove a try
        // 1: increment the guessesMissed variable
        guessesMissed++;
  
        // 2: update the DOM - remove a try
        // get the OL
        const scoreboard = document.querySelector('#scoreboard').firstElementChild;
  
        // get all list items with class 'tries'
        const tries = document.querySelectorAll('.tries');
        scoreboard.removeChild( tries[0] );
  
        checkWin();
      }
    }
  
  });
  
  // ===============
  // Start new game
  // ================
  function init() {
    guessesMissed = 0;
    // Reset hearts
    const scoreboard = document.querySelector('#scoreboard').firstElementChild;
    const old = document.querySelectorAll('.tries');
  
    // clear screen
    for (let i = 0; i < old.length; i++) {
      scoreboard.removeChild(old[i]);
    }
  
    const listItem = document.createElement('li');
    const img = document.createElement('img');
    listItem.classList.add('tries');
    img.style.repeat = 'norepeat';
    img.src = "images/liveHeart.png";
    listItem.appendChild(img);
  
    for (let i = 0; i < 5; i++) {
      scoreboard.appendChild(listItem.cloneNode(true));
    }
  
    // Reset the keyboard
    const buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++){
      buttons[i].removeAttribute('disabled');
      buttons[i].removeAttribute('class', 'chosen');
    }
  
    // Remove the old phrase
    const oldLetters = ul.querySelectorAll('li');
    // Clear old phrase from screen
    for (let i = 0; i < oldLetters.length; i++) {
      ul.removeChild( oldLetters[i] );
    }
  
  
    // Generate a random phrase from the array and save the result
    let currentPhraseChar = getRandomPhraseAsArray(phrasesArr);
    // Call the function to add the new random phrase to the DOM
    addPhraseToDisplay(currentPhraseChar);
  
  }