//header
document.addEventListener('DOMContentLoaded', () => {
    $(document).ready(function () {
        $('.header').height($(window).height());
    })
})

//memory game
document.addEventListener('DOMContentLoaded', () => {
    //card options
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

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []

    //create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/cover.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/cover.png')
            cards[optionTwoId].setAttribute('src', 'images/cover.png')
            alert('Sorry :( try again!')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all! :)'
        }
    }

    //Flip cards
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


//SIMON game
document.addEventListener('DOMContentLoaded', () => {
//Boad game object that controls most of the flow of the game
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

//Elements user interacts with when playing the game
const turnCounter = document.querySelector('#turn');
const topLeft = document.querySelector('#top-left');
const topRight = document.querySelector('#top-right');
const bottomLeft = document.querySelector('#bottom-left');
const bottomRight = document.querySelector('#bottom-right');
const strictButton = document.querySelector('#strict');
const onButton = document.querySelector('#on');
const startButton = document.querySelector('#start');


strictButton.addEventListener('click', (event) => {
    if (strictButton.checked == true) {
        strict = true;
    } else {
        strict = false;
    }
});

//Turn on the game board
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

//Function START for user to start the game
startButton.addEventListener('click', (event) => {
    if (on || win) {
        play();
    }
});

//Function set conditions to start play the game
function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;
    for (var i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 4) + 1);
    }
    compTurn = true;
    intervalId = setInterval(gameTurn, 800);
}

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
            flash++
        }, 200);
    }
}

//functions in charge of audio for each color
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
    bottomLeft.style.backgroundColor = 'yellow';//change all colors to hex
}

function four() {
    if (noise) {
        let audio = document.getElementById('clip4');
        audio.play();
    }
    noise = true;
    bottomRight.style.backgroundColor = 'lightskyblue';
}

function clearColor() {
    topLeft.style.backgroundColor = 'darkgreen';
    topRight.style.backgroundColor = 'darkred';
    bottomLeft.style.backgroundColor = 'goldenrod';
    bottomRight.style.backgroundColor = 'darkblue';
}

function flashColor() {
    topLeft.style.backgroundColor = 'lightgreen';
    topRight.style.backgroundColor = 'tomato';
    bottomLeft.style.backgroundColor = 'yellow';
    bottomRight.style.backgroundColor = 'lightskyblue';
}

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

function check() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
        good = false;

        if (playerOrder.length == 3 && good) {
            winGame();
        }

        if (good == false) {
            flashColor();
            turnCounter.innerHTML = 'NO!';
            setTimeout(() => {
                turnCounter.innerHTML = turn;
                clearColor();

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

        if (turn == playerOrder.length && good && !win) {
            turn++;
            playerOrder = [];
            compTurn = true;
            flash = 0;
            turnCounter.innerHTML = turn;
            intervalId = setInterval(gameTurn, 800)
        }
    }

    function winGame() {
        flashColor();
        turnCounter.innerHTML = 'WIN!';
        on = false;
        win = true;
    }

})









