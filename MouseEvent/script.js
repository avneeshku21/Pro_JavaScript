const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 0

// card.addEventListener('mousedown', (e) => {
//     console.log(e)
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

card.addEventListener('mouseenter', (e) => {
    console.log(e)
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

/*
MouseUp
MOusedown
Mouseenter
Mouseleave
Mousemove
Mouseout
wheel
touchstart
touchend
pointerenter
*/