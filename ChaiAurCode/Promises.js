// const promiseOne=new Promise(function(resolve,reject){
//     //Do an Async task
//     //DB Calls , Cryptography , network calls

//     setTimeout(function(){
//         console.log('Async Task is Complete')
//         resolve()
//     },1000)
// })
// promiseOne.then(function()
// {
//     console.log('Promise Consume')
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
// console.log('Async Task 2')
// resolve()
//     },1000)
// })
// .then(function()
// {
//     console.log('resolve')
// })


// const promisethree=new Promise(function(resolve,reject){
//     setTimeout(function(){

//         resolve({
//             username: "avneesh",
//             email:"kaviikumar010@gmail.com"
//         })

//     },2000)
// })

// promisethree.then(function(user){

// console.table(user)
// })

// const promiseFour=new Promise(function(resolve,reject){
// let error=true
// if(!error==false){
//     resolve({username:"Avii", Password:"123"})
// }

// else{
//     reject('Error')
// }

// },1000)

// promiseFour
// .then(function(user){
// console.log(user)
// return user.username
// })
// .then((username)=>{
// console.log(username)
// })
// .catch(function(err){
//     console.log(err)
// }).finally(()=>{
//     console.log('Finally Resolved')
// })

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()




fetch('https://api.github.com/users/avneeshku21')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
