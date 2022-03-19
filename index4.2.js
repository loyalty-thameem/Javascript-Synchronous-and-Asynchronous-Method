//callback coding challenge
let y = 20

function change(){
    document.getElementById('first').innerHTML= `y is ${y}`
    setTimeout(()=>{
        document.getElementById('second').innerHTML = `y is ${y + 10}` 
    }, 2000

    )
}

change()
 

