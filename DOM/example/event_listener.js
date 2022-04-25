let btn = document.querySelector('button')

function step1() {
    console.log('step 1')
}
function step2() {
    console.log('step 2')
}
// listen
btn.addEventListener('click', step1)
btn.addEventListener('click', step2)

setTimeout(function () {
    btn.removeEventListener('click', step1)// remove listening
}, 3000)

