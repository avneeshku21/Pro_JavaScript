// document.getElementById('owl').onclick=function()
// {
//     alert("owls")
// }


// attachEvent()
//jQuery-on

document.getElementById('owl').addEventListener('click', function(e){
console.log(e)
})

 // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode

    document.getElementById('images').addEventListener('click',(e)=>{
console.log('Clicked inside the ul')
    })


document.getElementById('owl').addEventListener('click', function(e){
        console.log("owl clicked");
        e.stopPropagation()
    }, false)
    
    document.getElementById('google').addEventListener('click',function(e){
        e.preventDefault();
        e.stopPropagation()
        console.log("google clicked");
    }, false)
   
    
    document.querySelector('#images').addEventListener('click', function(e){
        console.log(e.target.tagName);
        if (e.target.tagName === 'IMG') {
            console.log(e.target.id);
            let removeIt = e.target.parentNode
            removeIt.remove()
        }
    
        
    })
    
    // removeIt.parentNode.removeChild(removeIt)

