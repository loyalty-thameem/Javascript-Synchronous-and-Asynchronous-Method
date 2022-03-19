//Callback Functions
const courses = [
    {'courseID': 1111, 'title': 'Introduction to Business', 'Duration': '2 Months'},
    {'courseID': 2222, 'title': 'Introduction to Marketing', 'Duration': '3 Months'},
    {'courseID': 3333, 'title': 'Technology', 'Duration': '6 Months'}
]


function Courses () {
    setTimeout(()=>{
        let result =''
        courses.forEach((course)=>{
            result+= `<li> ${course.title} </li>`
        })
        document.getElementById('show').innerHTML = result
    }, 1000
        
    )
}

function newCourses (post, callback){
    setTimeout(()=> {
        courses.push(post)
        callback()
    }, 3000
        
    )
}

newCourses (
    {'courseID': 4444, 'title': 'Science', 'Duration': '11 Months'}, Courses
)
