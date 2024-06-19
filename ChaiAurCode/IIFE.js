//Immediately Invoked Function Experssion
(()=>{
    //Simple IIFE
    console.log('Db Conneted')
})();


(function chai(name) {
    //Named IIFE
    console.log(`Db Conneted Too ${name}`)
})('Avneesh')