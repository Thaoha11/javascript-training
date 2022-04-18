// time out
setTimeout(function () {
    console.log(1)
}, 1000)

console.log(2)

// Interval
setInterval(myFunction, 1000)

function myFunction() {
    let d = new Date();
    document.getElementById("demo").innerHTML =
        d.getHours() + ":" +
        d.getMinutes() + ":" +
        d.getSeconds();
}



