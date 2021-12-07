
// 1) prompt() istifadə edərək ad və soyad tələb edin və bu daxil edilən məlumatlardan istifadə edərək alert() metodu ilə ekrana 
// "Memmed Hesenov sən xoş gəlmisən" formatında yazı çıxarın . Template Literal mövzusu faydalı ola bilər.
// (Yazılan kodlar ad.js faylında olmalıdır)

// username=prompt("Adınızı daxil edin: ")
// surname=prompt("Soyadınızı daxil edin: ")
// if (username=="admin" && surname=="admin"){
//     alert("Memmed Hesenov sən xoş gəlmisən")
// }
// else{
//     alert("Zəhmət olmasa düzgün parol daxil edin")
// }


// 2) 3+(2-true+false)/3&&true complex ifadəsinin nəticəsi nə olacaq və 
// bunun hansı sıralamalı ilə həllediləcəyi kod yazaraq izah edin

// Soldan sağa oxunur.Əvvləcə mötərizənin içi yəni
// 2-true+false 2-1+0 yəni 1 edir .  1/3==0.33333 

// 0.3333+ 3 = 3.3333 
// sonuncu mərhələdə 3.333 && true  neice true qalir ancaq sebebini tamda bsha dusmemisem .
3+(2-true+false)/3&&true     netice   true



// 3) 3=='3'==='3' bu kodun neticesini tapin ve niye bu netice elde edildiyini kod yazaraq izah edin. 
// izahlari kodun daxilinde comment olaraq bildirmeyiniz kifayetdir.

// Hər ikisi bərabərlik yoxlayan müqayisə operatorudur. "==" operatoru variablenin tipine baxmır. Biri stringdə olsa  true verir ( 3=="3"  cavab true çıxacaq)
// "===" isə hər ikisinə baxır yəni,  dəyişənlərin özü və tipi eyni olmalıdır. ( "3"==="3" true-dir)

// Bu misalda 3=="3" true    daha sonra true==="3" cavab false

// 3=='3'==='3'  False




// 4) prompt vasitəsi ilə istifadəçidən username və password tələb olunmalıdır. bu daxil olunan məlumatlara əsasən aşağıdakı işlər görülməlidir.
// Əgər username və ya password bos buraxılıbsa ekrana alert vasitəsi ilə 'Deyerler bos ola bilmez' yazısı çıxsın
// Əgər username 'admin' ve password '123456'-dirsa ekrana alert vasitesi ile 'Tebrikler siz sisteme daxil oldugunuz'
// Daxil edilen deyerlerden her hansi biri duz deyilse ona uygun mesaj cixsin. Meselen username duz deyil.


// username=prompt("Adınızı daxil edin")
// password=prompt("Shifrenizi daxil edin")
// if(username=="admin" && password=="12345"){
//     alert("Tebrikler siz sisteme daxil oldunuz")
// }
// else if (username!="admin" && password=="12345"){
//     alert("Daxil etdiyiniz ad sehfdir")
    
// }
// else  if(username=="admin" && password!="12345"){
//     alert("Daxil etdiyiniz shifre sehfdir")
// }

// else if (username=="" || password==""){
//     alert("Deyerler bosh buraxila bilmez")
// }

// else
//     alert("Ad ve shifre sehfdir")


// 5)  while və ya for istifadə edərək aşağıdakı tapşırıqları yazın
    // 1-1000 arasındakı ədədləri ekrana çap edin
    // 1-1000 arasındakı tək ədədləri ekrana çap edin
    // 1-1000 3-ə bölünən ədədləri ekrana çap edin
    // 1-1000 arasındakı ədədlərin cəmini hesablayıb ekrana çap edin


// 1-1000 arasındakı ədədləri ekrana çap edin
        // let a=0
        // while( a < 1000 ) {
        //     console.log(a)
        //     a=a+1
        // }

 // 1-1000 arasındakı tək ədədləri ekrana çap edin
        // let a=0
        // while(a<1000){
        //     if(a%2!=0)
        //         console.log(a)
        //     a=a+1
        // }

        
        // for(let a=0; a<1000;a++){
        //     if(a%2!=0){
        //         console.log(a)
        //     }
        // }


  // 1-1000 3-ə bölünən ədədləri ekrana çap edin
        // let a=0
        // while(a<1000){
        //     if(a%3==0){
        //         console.log(a)
        //     }
        //     a=a+1
        // }


        // for(let a=0;a<1000;a++ ){
        //     if(a%3==0){
        //         console.log(a)
        // }
        //     }
        
        // 1-1000 arasındakı ədədlərin cəmini hesablayıb ekrana çap edin

        // b=0
        // for(let a=0;a<5;a++){
        //     b=b+a
        // }
        // console.log(b)
        

        // let a=0 
        // let b=0
        // while (a<1000){
        //     b=b+a
        //     a=a+1
        //     console.log(b)
        // }