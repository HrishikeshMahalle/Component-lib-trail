const doAction = document.querySelector('#modal-opener');
const disp = document.querySelector('.modal-box')
const container = document.querySelector(".container")

//  function lateRun(){
//     window.addEventListener('click',(e)=>{
//         if(document.querySelector('.act-box').contains(e.target)){
//         console.log("cliked inside")
//         }else{
//             removeClass()
//         }
//     })
//  }

 doAction.addEventListener('click',()=>{
     disp.classList.add("show")
     container.classList.add("show")
    
     console.log("clicked")
    //setTimeout(lateRun,0)
 })

 const redoAction = document.querySelector('.action')
 const redoAction1 = document.querySelector('.action1')

 redoAction.addEventListener('click',()=>{
     removeClass()
 })
 redoAction1.addEventListener('click',()=>{
     removeClass()
 })


 function removeClass(){
     disp.classList.remove("show")
     container.classList.remove("show")
 }