const h1=document.querySelector('h1')
const card=document.querySelector('.card')
const container=document.querySelector('.container')

function sayhi()
{
    console.log('Hello');
}
//h1.onclick=sayhi
h1.addEventListener('click',sayhi)
h1.addEventListener('click',function(){
    console.log('Second Hey')
})

//-----------------Method to  createElement

// let=count=2
// card.addEventListener('click',()=>{
//    const newCard=document.createElement('div')
//    newCard.classList.add('card')
// newCard.innerText=count
// count++
//    container.append(newCard)

// })


// Clone Method
let=count=2
card.addEventListener('click',()=>{
//    const newCard=document.createElement('div')
//    newCard.classList.add('card')
const newcard=card.cloneNode()
newcard.innerText=count
count++
   container.append(newcard)

})