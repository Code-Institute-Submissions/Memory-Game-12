//header
document.addEventListener('DOMContentLoaded', () =>{
    $(document).ready(function(){
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

    //flip cards
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})