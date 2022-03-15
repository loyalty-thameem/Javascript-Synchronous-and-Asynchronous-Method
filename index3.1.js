//coding challenge

let a = "Yes You Can !"
let b = "Yes We Can !"
let c = "Together We Can !"
let d = "<button>" + "SIGN UP NOW !" + "</button>"

function show(){
    document.getElementById('first').innerHTML = a
    
    setTimeout(()=>{
        document.getElementById('second').innerHTML = b
    }, 2000
        
    )
    
    setTimeout(()=>{
        document.getElementById('third').innerHTML = c
    }, 3000
        
    )
    
    setTimeout(()=>{
        document.getElementById('btn').innerHTML = d
    }, 4000
        
    )
}

show()
