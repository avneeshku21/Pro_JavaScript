// Fout Pillers Of Object Oriented

// Encapsulation Hide the data and complexity
// Abstraction  dont show the complexity
// Inheritence
// Polymorphism

const user1={
    firsName:'Avneesh',
    lastName:'Kumar',
    age:25,
    getAgeYear:function (){
        new Date().getFullYear()-user.age
    }
}

function creatUser(fName ,lName,age){
    const user={
fName:fName,
lName:lName,
age:age
    }
    return user
}