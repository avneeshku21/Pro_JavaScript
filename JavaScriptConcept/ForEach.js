
//const hero=["Iron", "Man", "Captain America", "Hulk", "Thor", "Black Widow" , "Hawkeye"]

// hero.forEach(function(){
//     console.log("Hello")
// })

// function func() {

//     // Original array
//     const items = [12, 24, 36];
//     const copy = [];
//     items.forEach(function (item) {
//         copy.push(item + item + 2);
//     });
//     console.log(copy);
// }
// func();

function newArr()
{
    const a=[12,34,56,78]
    const b=[]
    a.forEach(function(a){
        b.push(a+2)
    });
    console.log(b)
}
newArr();