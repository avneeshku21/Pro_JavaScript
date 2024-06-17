const  count=document.querySelector('.count')
const  minusBtn=document.querySelector('.minus-btn')
const  plusBtn=document.querySelector('.plus-btn')


minusBtn.addEventListener('click',()=>{
    const countValue=parseInt(count.innerText)
    console.log(countValue)
    count.innerText=countValue-1
    })
    
    

plusBtn.addEventListener('click',()=>{
const countValue=parseInt(count.innerText)
console.log(countValue)
count.innerText=countValue+1
})

