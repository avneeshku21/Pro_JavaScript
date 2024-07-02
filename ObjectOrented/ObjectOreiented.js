// Fout Pillers Of Object Oriented

// Encapsulation Hide the data and complexity
// Abstraction  dont show the complexity
// Inheritence
// Polymorphism

// function getBirthYear()
// {
//     return new Date().getFullYear()-this.age
// }

// function creatUser(fName ,lName,age){
//     const user={
// fName:fName,
// lName:lName,
// age:age,
// // getBirthYear:creatUser.commonMethods.getBirthYear
//      }
//      return user
//  }

// creatUser.commonMethods={
//      getBirthYear()
// {
//     return new Date().getFullYear()-this.age
// }
// }
// const user2=creatUser('Avii','Kumar',22)
// const user3=creatUser('Anisha','Kumari',20)


//************************ProtoTypee******** */

function CreatePerson(fName,lName,age) {
    this.fName=fName,
    this.lName=lName,
    this.age=age
}
const user2= new CreatePerson('Avii','Kumar',22)
 const user3=new CreatePerson('Anisha','Kumari',20)
