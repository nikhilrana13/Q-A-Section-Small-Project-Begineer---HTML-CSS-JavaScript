const Add = document.getElementById("Add")
const close = document.getElementById("close")
const answer = document.querySelector('.Ans')
const remove = document.getElementById("Remove")
const box = document.querySelector('.box')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const Add2 = document.getElementById("Add2")
const close2 = document.getElementById("close2")
const Add3 = document.getElementById("Add3")
const close3 = document.getElementById("close3")
const answer2 = document.querySelector('.Ans2')
const answer3 = document.querySelector('.Ans3')





function showanswer(){

    Add.addEventListener('click',()=>{
       answer.style.display="block"
       Add.style.display="none"
       close.style.display="block"
       box.style.height = "150px"

    })
  
}

function hideanswer(){

    close.addEventListener('click',()=>{
       answer.style.display="none"
       Add.style.display="block"
       close.style.display="none"
       box.style.height = "100px"

    })
}



function showanswer2(){

    Add2.addEventListener('click',()=>{
       answer2.style.display="block"
       Add2.style.display="none"
       close2.style.display="block"
       box2.style.height = "150px"

    })
  
}

function hideanswer2(){

    close2.addEventListener('click',()=>{
       answer2.style.display="none"
       Add2.style.display="block"
       close2.style.display="none"
       box2.style.height = "100px"

    })
  
}

function showanswer3(){

    Add3.addEventListener('click',()=>{
       answer3.style.display="block"
       Add3.style.display="none"
       close3.style.display="block"
       box3.style.height = "150px"

    })
  
}

function hideanswer3(){

    close3.addEventListener('click',()=>{
       answer3.style.display="none"
       Add3.style.display="block"
       close3.style.display="none"
       box3.style.height = "100px"

    })
  
}









