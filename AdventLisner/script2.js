const h1=document.querySelector('h1')
const card=document.querySelector('.card')
const container=document.querySelector('.container')
const input=document.querySelector('input')

let=count=2
card.addEventListener('click',()=>{
   const newCard=document.createElement('div')
   newCard.classList.add('card')
newCard.innerText=count
count++
   container.append(newCard)

})


input.focus()