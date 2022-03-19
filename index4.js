//Callback Functions
const courses = [
    {'courseID': 1111, 'title': 'Introduction to Business', 'Duration': '2 Months'},
    {'courseID': 2222, 'title': 'Introduction to Marketing', 'Duration': '3 Months'},
    {'courseID': 3333, 'title': 'Technology', 'Duration': '6 Months'}
]


function Courses () {
    setTimeout(()=>{
        let result =''
        console.log('1'+result)
        courses.forEach((course)=>{
            // ithu loop pannuthu +
            result+= `<li> ${course.title} </li>`
            console.log('2'+result)
        })
        document.getElementById('show').innerHTML = result
        console.log('3'+result)
    }
        
    )
}

Courses()
