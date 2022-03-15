//coding challenge
let you = 'yes you can!!!'
let we = 'yes we can!!!'
let together = 'together we can!!!'

function delay() {
    setTimeout(() => {
        document.getElementById('you').innerHTML = you

    }, 1000)
    setTimeout(() => {
        document.getElementById('we').innerHTML = we

    }, 2000)
    setTimeout(() => {
        document.getElementById('together').innerHTML = you

    }, 3000)
}
document.getElementById('add').onClick = delay();
