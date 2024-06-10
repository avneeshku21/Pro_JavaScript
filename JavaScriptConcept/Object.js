/*const myName="Avneesh"
const username1=''
const username2=''

const user1={
firstname:"Avii",
lastname:"kumar",
age:21,
education:"Btech",
city:"Bareilly"
}

const user2={
    firstname:"Avii",
    lastname:"kumar",
    age:21,
    education:"Btech",
    city:"Bareilly"
    }
    //update value in object
    user2.email="avneesh@gmail.com"
console.table(user2.email)
console.log(user2)*/

//++++++Object.Freez and Object.seal+++++++++++

//Object. seal() allows modification of existing properties, but does not permit addition or deletion of properties

//Object. freeze(), on the other hand, prevents any modifications, additions, or deletions to properties.
//Modifying properties is not allowed
//Removing properties is not allowed
//Adding new properties is not allowed


//++++++++++++++++Example

// const person = { name: "John", age: 30 };

// Object.freeze(person);

// person.age = 31; // Modifying properties is not allowed
// console.log(person); // Output: { name: "John", age: 30 }

// person.city = "New York"; // Adding new properties is not allowed
// console.log(person); // Output: { name: "John", age: 30 }

// delete person.name; // Removing properties is not allowed
// console.log(person); // Output: { name: "John", age: 30 }

// console.log(Object.isFrozen(person)); // Output: true



const user={
    firstname:"Avii",
    lastname:'kumar',
    address:{
        city:'Bareilly',
        pincode:243501,
        state:'Uttar Pradesh',
        moredetails:{
            phoneNo:989785084,
        
        },
    },
    age:21,
    isPadhai: false,

}
user.mobilenum=989869686
console.table(user)


