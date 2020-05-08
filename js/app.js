// Header
document.addEventListener('DOMContentLoaded', () => {
    $(document).ready(function () {
        $('.header').height($(window).height());
    })

})

// MEMORY GAME
    // Card options
    const cardsArray = [
        {
            name: 'shell',
            images: 'images/blueshell.png',
        },
        {
            name: 'star',
            images: 'images/star.png',
        },
        {
            name: 'bobomb',
            images: 'images/bobomb.png',
        },
        {
            name: 'mario',
            images: 'images/mario.png',
        },
        {
            name: 'luigi',
            images: 'images/luigi.png',
        },
        {
            name: 'peach',
            images: 'images/peach.png',
        },
        {
            name: '1up',
            images: 'images/1up.png',
        },
        {
            name: 'mushroom',
            images: 'images/mushroom.png',
        },
        {
            name: 'thwomp',
            images: 'images/thwomp.png',
        },
        {
            name: 'bulletbill',
            images: 'images/bulletbill.png',
        },
        {
            name: 'coin',
            images: 'images/coin.png',
        },
        {
            name: 'goomba',
            images: 'images/goomba.png',
        },
    ];
// Duplicate array to create a match 
    const gameGrid = cardsArray
        .concat(cardsArray)
        .sort(() => 0.5 - Math.random()); // Random selection of cards on each load

    let firstGuess = '';
    let secondGuess = '';
    let count = 0;
    let previousTarget = null;
    let delay = 1200;
// Get div with an id of root
    const game = document.getElementById('game');
    const grid = document.createElement('section'); // Create a section with a class of grid
    grid.setAttribute('class', 'grid');
    game.appendChild(grid);
// For each item in the cards array
    gameGrid.forEach(item => {
        const { name, images } = item;

        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.name = name;

        const front = document.createElement('div');
        front.classList.add('front');

        const back = document.createElement('div');
        back.classList.add('back');
        back.style.backgroundImage = `url(${images})`;

        grid.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
    });
// Functions that match elements when called
    const match = () => {
        const selected = document.querySelectorAll('.selected');
        selected.forEach(card => {
            card.classList.add('match');
        });
    };
// Reset user guesses and remove selected
    const resetGuesses = () => {
        firstGuess = '';
        secondGuess = '';
        count = 0;
        previousTarget = null;

        var selected = document.querySelectorAll('.selected');
        selected.forEach(card => {
            card.classList.remove('selected');
        });
    };
// Function will be call if both guesses match
    grid.addEventListener('click', event => {
        const clicked = event.target;

        if (
            clicked.nodeName === 'SECTION' ||
            clicked === previousTarget ||
            clicked.parentNode.classList.contains('selected') ||
            clicked.parentNode.classList.contains('match')
        ) {
            return;
        }
// Counts to two and then adds two cards
        if (count < 2) {
            count++;
            if (count === 1) {
                firstGuess = clicked.parentNode.dataset.name;
                console.log(firstGuess);
                clicked.parentNode.classList.add('selected');
            } else {
                secondGuess = clicked.parentNode.dataset.name;
                console.log(secondGuess);
                clicked.parentNode.classList.add('selected');
            }

            if (firstGuess && secondGuess) {
                if (firstGuess === secondGuess) {
                    setTimeout(match, delay);
                }
                setTimeout(resetGuesses, delay);
            }
            previousTarget = clicked;
        }

    });
//end of memory card game


// SIMON GAME
//Board game object, it controls most of the flow of the game
const BoardGame = {
    level: 0,
    dificulty: 0,
    HighLevel: 0,
    isRunning: false,
    //Set the conditions to start the game
    start: () => {
        if (BoardGame.isRunning == false) {
            BoardGame.isRunning = true
            UserExperience.ShowStart()
            $('#reset').disabled = true
            AppController.AIturn()
        }
    },
    //Called after user's sequence is wrong
    gameOver: () => {
        Audio.Failure()
        $('.color').css('pointer-events', 'none')
        $('#board').addClass('failure')
        $('#reset').disabled = false

    },
    //It sets all the coditions to zero except for high score,
    //to start playing again
    reset: function () {
        $('#board').removeClass('failure')
        Player.sequence = []
        AI.sequence = []
        Player.sequenceIndex = 0
        BoardGame.level = 0
        BoardGame.isRunning = false
        UserExperience.ShowLevel()

    },
    //Called after user's sequence is correct,
    //it resets some turn values and call the AI turn
    nextTurn: function () {
        Audio.Success()
        UserExperience.ShowSuccess()
        Player.sequenceIndex = 0
        Player.sequence = []
        BoardGame.level++
        UserExperience.ShowLevel()
        BoardGame.HighestLevel()
        AppController.AIturn()
    },
    //Checks if the highest score has been beaten
    HighestLevel: function () {

        if (BoardGame.level > BoardGame.HighLevel) {
            BoardGame.HighLevel = BoardGame.level
            AppController.ShowHighest(BoardGame.HighLevel)
        }
    }
}

//Object with the audio play functions
const Audio = {
    Success: () => {
        document.getElementById('success-sound').play()
    },
    Red: () => {
        document.getElementById('red-sound').play()
    },
    Green: () => {
        document.getElementById('green-sound').play()
    },
    Blue: () => {
        document.getElementById('blue-sound').play()
    },
    Yellow: () => {
        document.getElementById('yellow-sound').play()
    },
    Failure: () => {
        document.getElementById('failure-sound').play()
    }
}

//Object with some information about the player
const Player = {
    sequence: [],
    sequenceIndex: 0,
    playerPick: function (numero) { //It storage the value of the player sequence in the array
        Player.sequence.push(numero)
        Player.sequenceIndex++
        AppController.CheckSequence()//Call the function that checks if player move is correct
    }
}

//Object with some AI information
const AI = {
    sequence: [],
    sequenceIndex: 0,
    //Randomly pick a Color and storage it into the AI array
    AIpickColor: function () {
        this.sequence.push(Math.floor(Math.random() * 4));
        UserExperience.ShowAIonBoard(UserExperience.delay)
        AppController.playerTurn()
    }
}

//Object in charge of showing content on the screen
const UserExperience = {
    delay: 0,
    //Show the AI sequence on the screen
    //Show the player sequence on the screen
    ShowLevel: function () {
        $('#level').text(`${BoardGame.level.toString().padStart(2, '0')}`)
    },
    ShowAIonBoard: function (delay) {
        let index = AI.sequenceIndex
        for (let i = 0; i < AI.sequence.length; i++) {
            if (AI.sequence[i] == 0) {
                setTimeout(UserExperience.LightGreen, delay)
            }
            else if (AI.sequence[i] == 1) {
                setTimeout(this.LightRed, delay)
            }
            else if (AI.sequence[i] == 2) {
                setTimeout(this.LightBlue, delay)
            }
            else if (AI.sequence[i] == 3) {
                setTimeout(this.LightYellow, delay)
            }
            delay += 500
        }

    },
    //Set of functions that controls the color higlights on the screen
    LightGreen: function () {
        setTimeout(function () {
            $('#green').addClass('greenClicked')
            Audio.Green()
        }, 1300)
        setTimeout(function () {
            $('#green').removeClass('greenClicked')
        }, 1600)

    },
    LightRed: function () {
        setTimeout(function () {
            $('#red').addClass('redClicked')
            Audio.Red()
        }, 1300)
        setTimeout(function () {
            $('#red').removeClass('redClicked')
        }, 1600)

    },
    LightBlue: function () {
        setTimeout(function () {
            $('#blue').addClass('blueClicked')
            Audio.Blue()
        }, 1300)
        setTimeout(function () {
            $('#blue').removeClass('blueClicked')
        }, 1600)

    },
    LightYellow: function () {
        setTimeout(function () {
            $('#yellow').addClass('yellowClicked')
            Audio.Yellow()
        }, 1300)
        setTimeout(function () {
            $('#yellow').removeClass('yellowClicked')
        }, 1600)
    },
    

    //Function that controls the white lights after game starts
    ShowStart: function () {

        $('#green').addClass('start')

        setTimeout(function () {
            $('#green').removeClass('start')
        }, 25)

        setTimeout(function () {
            $('#red').addClass('start')
        }, 50)
        setTimeout(function () {
            $('#red').removeClass('start')
        }, 75)

        setTimeout(function () {
            $('#yellow').addClass('start')
        }, 100)
        setTimeout(function () {
            $('#yellow').removeClass('start')
        }, 125)

        setTimeout(function () {
            $('#blue').addClass('start')
        }, 250)
        setTimeout(function () {
            $('#blue').removeClass('start')
        }, 300)

        setTimeout(function () {
            $('#green').addClass('start')
        }, 325)

        setTimeout(function () {
            $('#green').removeClass('start')
        }, 350)

        setTimeout(function () {
            $('#red').addClass('start')
        }, 375)
        setTimeout(function () {
            $('#red').removeClass('start')
        }, 400)

        setTimeout(function () {
            $('#yellow').addClass('start')
        }, 425)
        setTimeout(function () {
            $('#yellow').removeClass('start')
        }, 450)

        setTimeout(function () {
            $('#blue').addClass('start')
        }, 475)
        setTimeout(function () {
            $('#blue').removeClass('start')
        }, 500)
    },
    ShowSuccess: function () {
        $('#board').addClass('success')

        setTimeout(function () {
            $('#board').removeClass('success')
        }, 1000)
    }
}


//Object in charge of some game functionalities
const AppController = {

    playerTurn: function () { //Set the pointer events to auto on player turn, for picking colors
        $('.color').css('pointer-events', 'auto')

    },
    AIturn: function () {// Execute AI turn
        AI.AIpickColor()
    },
    CheckSequence: function () { //It checks if user match AI's sequence
        let index = Player.sequenceIndex - 1
        const playerSeq = Player.sequence
        const AIseq = AI.sequence

        if (playerSeq[index] !== AIseq[index]) {
            BoardGame.gameOver()
        }
        if (playerSeq.length == AIseq.length && playerSeq[index] == AIseq[index]) {
            setTimeout(BoardGame.nextTurn, 600)
        }
    },
    ShowHighest: (score) => {
        $('#highest-level').text(`${score.toString().padStart(2, '0')}`)
    }

}

//Set of functions on click
$('#start').click(function () {//Start the game
    BoardGame.start()
})

$('#reset').click(function () {//Reset the game
    BoardGame.reset()
})

//Player picker set of functions
$('#green').click(function () {
    Audio.Green()
    Player.playerPick(0)
})

$('#red').click(function () {
    Audio.Red()
    Player.playerPick(1)
})

$('#blue').click(function () {
    Audio.Blue()
    Player.playerPick(2)
})

$('#yellow').click(function () {
    Audio.Yellow()
    Player.playerPick(3)
})

// Function in the navbar which refresh the games to start over
function refreshPage() {
    window.location.reload();
};