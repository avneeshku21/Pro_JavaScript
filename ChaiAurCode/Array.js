//combine two arry
 let marvel=["Thor","spidermna","hulk"
 ]
let dc=["batman","superman","flash"]
 //const allhero=marvel.concat(dc)
//  console.log(allhero)

 //********* ************Spread Operaotr
 const newall=[...dc,...marvel]
 console.log(newall)

 //important

 const anotherArr=[1,2,3,4,[10,,30,40],[5,68,8,9,[21,33,44,55]]]
 console.log(anotherArr.flat(Infinity))

 //******Dtata fecth krte hai to array m convert krne k liye */

 console.log(Array.isArray("Avneesh"))
 console.log(Array.from("Avneesh"))
 console.log(Array.from({name:"AVneesh"}))// intresting

 let a=10
 let b=20
 let c=40
 console.log(Array.of(a,b,c))

 