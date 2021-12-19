

let elem=prompt("metni daxil edin")

function data(){
    console.log(elem)
    
    document.querySelector(".div-name").innerHTML=elem
    document.querySelector(".div-name").style.background="red"


}

//  bu proqrqamda problem var mentorlardan xahis edirem baxanda komeklik gorsedsin. Demeli promptla metn daxil edib daha 
//   sonra   yadda saxla vurduqda input text-de gorsedmek istirem.
//   bunu nece ede bilerem?