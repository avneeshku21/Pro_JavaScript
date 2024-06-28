//Singleton User
// const tinderUser=new Object()// singletone object
// const tinderUser={}// Non singletone object


//console.log(tinderUser)

const regularUser={
    email:"kavnesh",
    fullname:{
        usefullnme:{
            firstname:"Avneesh",
            lastname:"kumar"
        }
    }
}
//console.log(regularUser.fullname.usefullnme)
// const obj1={1:"a",2:"b"}
// const obj2={3:"e",4:"f"}
// // const obj3=Object.assign({},obj1,obj2)
// // console.log(obj3)
// const newobj={...obj1,...obj2}
// console.log(newobj)
// const tinderUser={}
// tinderUser.id="123abc"
// tinderUser.name="Avii"
// tinderUser.isloggedin=false
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))

//***************Destructure  start ****************/
const course={
    coursename:"js in hindi",
    price:"999",
    courseTeacher:"Avii"
}
const {courseTeacher: mentor}=course
console.log(mentor)
