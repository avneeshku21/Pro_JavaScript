// fetch('https://dummyjson.com/products')
// .then((response)=>{
// return response.json()
// }).then((data)=>{
//     console.log(data)
// })

fetch('https://dummyjson.com/carts/add', {
    method: 'POST',
    body: JSON.stringify({
      userId: 1,
      category:'stationary',
    //   products: [
    //     {
    //       id: 144,
    //       quantity: 4,
    //     },
    //     {
    //       id: 98,
    //       quantity: 1,
    //     },
    //   ]
    })
  })
  .then(res => res.json())
  .then(console.log);