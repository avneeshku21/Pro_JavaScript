const  count=document.querySelector('.count')
const  minusBtn=document.querySelector('.minus-btn')
const  plusBtn=document.querySelector('.plus-btn')
const changeBy=document.querySelector('.changeBy')
const reset=document.querySelector('.reset')

minusBtn.addEventListener('click',()=>{
    const changeByval=parseInt(changeBy.value)
    const countValue=parseInt(count.innerText)
    console.log(countValue)
    count.innerText=countValue-changeByval
    })
    
    

plusBtn.addEventListener('click',()=>{
const changeByval=parseInt(changeBy.value)
const countValue=parseInt(count.innerText)
console.log(countValue)
count.innerText=countValue+changeByval
})

reset.addEventListener('click',()=>{
    const countValue=parseInt(count)
    count.innerText='0'
    
})
