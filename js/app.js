// Header
document.addEventListener('DOMContentLoaded', () => {
    $(document).ready(function () {
        $('.header').height($(window).height());
    })

})

// MEMORY GAME
document.addEventListener('DOMContentLoaded', () => {
    // Card options
    const cardArray = [
        {
            name: 'orange-flower',
            img: 'images/orange-flower.png' 
        },
        {
            name: 'frog',
            img: 'images/frog.png'
        },
        {
            name: 'mushroom-green',
            img: 'images/mushroom-green.png'
        },
        {
            name: 'star',
            img: 'images/star.png'
        },
        {
            name: 'star-rainbow',
            img: 'images/star-rainbow.png'
        },
        {
            name: 'monster',
            img: 'images/monster.png'
        },
        {
            name: 'orange-flower',
            img: 'images/orange-flower.png'
        },
        {
            name: 'frog',
            img: 'images/frog.png'
        },
        {
            name: 'mushroom-green',
            img: 'images/mushroom-green.png'
        },
        {
            name: 'star',
            img: 'images/star.png'
        },
        {
            name: 'star-rainbow',
            img: 'images/star-rainbow.png'
        },
        {
            name: 'monster',
            img: 'images/monster.png'
        }
    ]
    // Random selection of cards
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []

    // Create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/cover.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // Check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        // Conditions if player gets a match
        if (cardsChosen[0] === cardsChosen[1]) {
            Swal.fire(
                'Good job!',
                'You found a match!',
                'success'
              )
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        } else {// Conditions if player doesn't get match
            cards[optionOneId].setAttribute('src', 'images/cover.png')
            cards[optionTwoId].setAttribute('src', 'images/cover.png')
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sorry :( try again!',
              })
        } // Conditions if player match them all
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all! :)'
        }
    }

    // Flip cards
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    createBoard()
})


// SIMON GAME
document.addEventListener('DOMContentLoaded', () => {
// Board game controls most of the flow of the game
let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let strict = false;
let noise = true;
let on = false;
let win;

// Elements that user interacts with when playing the game
const turnCounter = document.querySelector('#turn');
const topLeft = document.querySelector('#top-left');
const topRight = document.querySelector('#top-right');
const bottomLeft = document.querySelector('#bottom-left');
const bottomRight = document.querySelector('#bottom-right');
const strictButton = document.querySelector('#strict');
const onButton = document.querySelector('#on');
const startButton = document.querySelector('#start');

// Strict button option for higher dificulty
strictButton.addEventListener('click', (event) => {
    if (strictButton.checked == true) {
        strict = true;
    } else {
        strict = false;
    }
});

// Power ON button to turn on the game board
onButton.addEventListener('click', (event) => {
    if (onButton.checked == true) {
        on = true;
        turnCounter.innerHTML = '-';
    } else {
        on = false;
        turnCounter.innerHTML = '';
        clearColor();
        clearInterval(intervalId);
    }
});

// START button for user to start sequence of the game
startButton.addEventListener('click', (event) => {
    if (on || win) {
        play();
    }
});

// Play function set conditions to start first round of the game
function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;
    for (let i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 4) + 1);
    }
    compTurn = true;
    intervalId = setInterval(gameTurn, 800);
}

// Function calls for computer sequence turn, flashing lights
function gameTurn() {
    on = false;

    if (flash == turn) {
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
        on = true;
    }

    if (compTurn) {
        clearColor();
        setTimeout(() => {
            if (order[flash] == 1) one();
            if (order[flash] == 2) two();
            if (order[flash] == 3) three();
            if (order[flash] == 4) four();
            flash++;
        }, 200);
    }
}

// Set of functions in charge of playing audio for each color
function one() {
    if (noise) {
        let audio = document.getElementById('clip1');
        audio.play();
    }
    noise = true;
    topLeft.style.backgroundColor = 'lightgreen';
}

function two() {
    if (noise) {
        let audio = document.getElementById('clip2');
        audio.play();
    }
    noise = true;
    topRight.style.backgroundColor = 'tomato';
}

function three() {
    if (noise) {
        let audio = document.getElementById('clip3');
        audio.play();
    }
    noise = true;
    bottomLeft.style.backgroundColor = 'yellow';
}

function four() {
    if (noise) {
        let audio = document.getElementById('clip4');
        audio.play();
    }
    noise = true;
    bottomRight.style.backgroundColor = 'lightskyblue';
}

// Function to clear colors after sequence
function clearColor() {
    topLeft.style.backgroundColor = 'darkgreen';
    topRight.style.backgroundColor = 'darkred';
    bottomLeft.style.backgroundColor = 'goldenrod';
    bottomRight.style.backgroundColor = 'darkblue';
}
// Function to flash computer sequence colors
function flashColor() {
    topLeft.style.backgroundColor = 'lightgreen';
    topRight.style.backgroundColor = 'tomato';
    bottomLeft.style.backgroundColor = 'yellow';
    bottomRight.style.backgroundColor = 'lightskyblue';
}

// Set of functions to check if the player is correct
topLeft.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(1);
        check();
        one();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

topRight.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(2);
        check();
        two();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

bottomLeft.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(3);
        check();
        three();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

bottomRight.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(4);
        check();
        four();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

// Function check if player is correct or incorrect when following the sequence as the computer
function check() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
        good = false;

        if (playerOrder.length == 20 && good) {
            winGame();
        }

        if (good == false) {
            flashColor();
            turnCounter.innerHTML = 'NO!';
            setTimeout(() => {
                turnCounter.innerHTML = turn;
                clearColor();

                // If playing strict this functions will re-start the game if player got something wrong
                if (strict) {
                    play();
                } else {
                    compTurn = true;
                    flash = 0;
                    playerOrder = [];
                    good = true;
                    intervalId = setInterval(gameTurn, 800);
                }
            }, 800);
            noise = false;
        }

        // Set confitions if player has correct sequence
        if (turn == playerOrder.length && good && !win) {
            turn++;
            playerOrder = [];
            compTurn = true;
            flash = 0;
            turnCounter.innerHTML = turn;
            intervalId = setInterval(gameTurn, 800)
        }
    }
    // Condition if player follow sequence correctly and win the game
    function winGame() {
        flashColor();
        turnCounter.innerHTML = 'WIN!';
        on = false;
        win = true;
        
    }

})

// Function in the navbar which refresh the games to start over
function refreshPage() {
    window.location.reload()
}

















