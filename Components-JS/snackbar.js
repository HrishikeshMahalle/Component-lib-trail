const baseline = document.querySelector('.snackbar-btn')
const close1 = document.querySelector('.close-btn');
const pop1 = document.querySelector('.show')

function remove(){
    pop1.classList.remove('popup1')
}

baseline.addEventListener('click',() =>{
    pop1.classList.add('popup1'),
    console.log("clicked")
    setInterval(remove,5000)
})
close1.addEventListener('click',()=>{
    pop1.classList.remove('popup1'),
    console.log("removed")
})