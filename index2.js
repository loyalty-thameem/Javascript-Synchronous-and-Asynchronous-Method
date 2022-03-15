//synchronous javascript action
let x = 5
let y = 10
let sum = x + y

document.getElementById('x').innerHTML = x
document.getElementById('y').innerHTML = y
document.getElementById('add').innerText = sum

//asynchronous javascript action
function delay(){
    document.getElementById('x1').innerHTML = x
    setTimeout(()=>{
        document.getElementById('y2').innerHTML = y
    }, 3000
        
    )
    document.getElementById('addB').innerHTML = sum
}

delay()
