//Async/Await
const change = time => {
    return new Promise(
        resolve => setTimeout(resolve, time * 1000)
    )
}

const New = async()=>{
    document.getElementById('first').innerHTML="Yes You Can!"
    await change(2)
    document.getElementById('second').innerHTML="Yes We Can!"
    await change (4)
    document.getElementById('third').innerHTML="Together We Can!"
    
    await change(5)
    document.getElementById('btn').innerHTML=`<button> SIGN UP NOW ! </button>`
}

New()

 

