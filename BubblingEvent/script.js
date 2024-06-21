const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

green.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('Green Click')
})

pink.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('Pink Click')
})

blue.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('BLue Click')
})