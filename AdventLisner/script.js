const h1=document.querySelector('h1')
const card=document.querySelector('.card')
function sayhi()
{
    console.log('Hello');
}
//h1.onclick=sayhi
h1.addEventListener('click',sayhi)
h1.addEventListener('click',function(){
    console.log('Second Hey')
})
card.addEventListener('click',sayhi)