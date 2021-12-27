function getdata(){
    // email adresiniz yoxlamaq
    let email= document.querySelector(".email-name")
    let name_txt=email.value
    let say=0
   
    for(i in name_txt){
            if(name_txt[i]=="@"){
                say+=1        
        }   
    }
    if(say!=1){
        alert("duzgun email adres daxil edin")
    }
    // telefon nomresini yoxlamaq
    let number=document.querySelector(".phone")
    let name_phone=number.value
        if(name_phone.length!=13){
            alert('Xahis edirik duzgun nomre daxil edin')
        }


    let birthday=document.querySelector('.birthday')
    
    let name_birthday=birthday.value.split('-')
    let newdata= new Date().getFullYear()
    console.log(name_birthday[0].length)
    if((newdata-((name_birthday[0])*1))<16)
        alert('Yasiniz 15-den kicikdir')


    let first=document.querySelector(".firstname")
    let first_name=first.value
    
    
    let last=document.querySelector('.lastname')
    let last_name=last.value
    
    if(first_name.length==0 || last_name.length==0 || name_txt.length==0 || name_phone.length<4 || name_birthday[0]==0) {
        alert("Secimler bow buraxila bilmez")
    }

    }
  
    

