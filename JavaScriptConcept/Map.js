//Description
//map() creates a new array by calling a function for every array element.

//map() does not execute the function for empty elements.

//map() does not change the original array.

// const cars = ["Saab", "Volvo", "BMW", "Nexon", "I10"];
//  const realArr=cars.map((cars)=>{
//     console.log(cars)
//     return cars.toUpperCase()
//  })
//  console.log(realArr)

// const courses = ["HTML", "CSS", "Javascript", "React","C++"];
// const FilterCours=courses.filter((courses,index)=>{
//     return courses.toUpperCase()
// })



/*


const months=["January","Febuary","March","Aprial","May","June","July","August","September","Octeber","November","December"]
const Filtermonths= months.filter((months,index)=>{
    return (index,months.length>=5)
})
console.table(Filtermonths)

const Filtermonths2= months.filter((months,index)=>{
    return (months.toUpperCase().includes('M'))
})
console.table(Filtermonths2)

*/

/*********************** 
const student=[
    {
        name:'Avii',
        age:21,
    }
    , {
        name:'Priya',
        age:22,
    },
    {
        name:'Anisha',
        age:20,
    },
    {
        name:'Laxu',
        age:23,
    },
    {
        name:'Priyanshi',
        age:24,
    }
]

const selectedStudent=student.filter((student)=>{
    return student.age>21
})
console.log(selectedStudent)

const selectedStudentName=selectedStudent.map((student)=>{
    return student.name
})
console.log(selectedStudentName)

*/

