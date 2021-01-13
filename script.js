const container = document.querySelector('.container')
const eraseButton = document.querySelector('.erase')
const playButton = document.querySelector('.playGame')
let color = ''

function grid() {
    let squareNumber = prompt('How many do you want? :)')
    if (squareNumber > 100) {
        alert('Not above 100 please!!')
        grid()
        squareNumber = 0
    }
    else {
        for (let i = 0; i < squareNumber; i++) {
            const bigDiv = document.createElement('div')
            bigDiv.classList.add('bigDiv')
            for (let index = 0; index < squareNumber; index++) {
                const squareDiv = document.createElement('div')
                squareDiv.classList.add('squareDiv')
                bigDiv.appendChild(squareDiv)
            }
            container.appendChild(bigDiv)
        }
        const squareDiv = document.querySelectorAll('.squareDiv')
        squareDiv.forEach(
            key => key.addEventListener('mouseover', changeColor)
        )
    }
}    

function changeColor() {
    color = 'blue'
    this.style.backgroundColor = color
}

function clear() {
    color = 'gray'
    const squareDiv = document.querySelectorAll('.squareDiv')
    squareDiv.forEach(
        square => square.style.backgroundColor = color
    )
}

playButton.addEventListener('click', grid)
eraseButton.addEventListener('click', clear)