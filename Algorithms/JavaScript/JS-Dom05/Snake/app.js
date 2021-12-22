
let leftposition=10
let topposition=10
let snake=document.querySelector(".snake")

function getleft(){
    leftposition-=20
    snake.style.left=`${leftposition}px`
}


function getrigth(){
    leftposition+=20
    snake.style.left=`${leftposition}px`
}


function gettop(){
    topposition-=20
    snake.style.top=`${topposition}px`
}

function getbottom(){
    topposition+=20
    snake.style.top=`${topposition}px`
}
