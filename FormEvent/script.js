const usernameInput=document.querySelector('#username')
const para=document.querySelector('p')
const form=document.querySelector('form')
// usernameInput.addEventListener('click',()=>{
//     console.log('Hello')
// })

//***********Input Event************* */

// usernameInput.addEventListener('input',(e)=>{
//     console.log(e.target.value)
//     console.log('event click')
//     para.innerText=e.target.value

// })

//***********Change Event************* */

// usernameInput.addEventListener('change',(e)=>{
//         console.log(e.target.value)
//         // console.log('event click')
//         para.innerText=e.target.value
    
//     })
    
    //***********Focus Event************* */
    // usernameInput.addEventListener('focus',(e)=>{
    //     console.log(e.target.value)
    //     // console.log('event click')
    //     para.innerText=e.target.value
    
    // })
    //***********blur Event************* */
    // usernameInput.addEventListener('blur',(e)=>{
    //     console.log(e.target.value)
    //     // console.log('event click')
    //     para.innerText=e.target.value
    
    // })

//     form.addEventListener('submit',(e)=>{
//         e.preventDefault()
// const myFormData=new FormData(form)
// for(const p of myFormData.entries())
//     {
//         console.log(p)
//     }
//     })

    form.addEventListener('submit',(e)=>{
        e.preventDefault()
const myFormData=new FormData(form)
for(const p of myFormData.entries())
    {
        console.log(p)
    }
    })