//Introduction to Promises 
class Person {
    constructor(Name,Age, School, Phone, Courses){
        this.Name = Name
        this.Age = Age
        this.School = School
        this.Phone = Phone
        this.Courses = Courses
    }
}

// let Esther = new Person ('Esther Anane', 25, 'Wesley Girls High School',
// 22316784, 'Home Economics'
// )
// document.getElementById('result').innerHTML = Esther.School
// A promise follows a similar structure like that of a Class.
//It is initiated with a 'New' keyword but we pass in resolve and reject as the
//function argument. 

let Esther = new Promise ((resolve, reject)=>{
    const x = 5
    const y = 7
    if (x == y){
        resolve()
    }
    else {
        reject()
    }
}
)

Esther.then(()=>{
    document.getElementById('result').innerHTML='x + y equals 12'
}
    
).catch(()=>{
    document.getElementById('result').innerHTML='Error!, X not Equal to Y'
}
    
)
