function closeimg(){
document.querySelector(".modal").style.display="none"
}

function openimg(element){
    document.querySelector(".modal").style.display="block"


    let a=document.querySelector('.modal img').setAttribute('src',element.querySelector('.ligthbox-item img').getAttribute('src'))
  
}



