

// ### kvadrata yukseltme funksiyasi

// function kvadrat (a){
//     return(a**2)
// }
// let b=prompt('ededi daxil et')
// alert(`daxil etdiyiniz ${b} ededinin kvdrati= ${kvadrat(b)} `)




// ###boyuk herflere cevirmek

// function boyukherf(a){
//     return (a.toUpperCase())
// }

// let b=prompt('sozu daxil edin')
// alert(`daxil etdiyiniz ${b} boyuk herflerle ${boyukherf(b)}`)




// ###Parametr olaraq cümlə qəbul edib onun daxilində neçə söz olduğunu return edən method yazın
// 

// let cem=0
// let a=prompt("Cumleni daxil edin")
// for(let i=0; i<a.length; i++){
//     if(a[i]==" " || a[i]=="." || a[i]=="?"){
//         cem=cem+1
//     } 
// }
// alert(`Bu cumlede olan sozlerin sayi ${cem+1}-dir`)

// 2-ci usul

// function sozsayi(a){
//     return (a.match(/(\w+)/g).length)
// }

// let str=prompt('Cumleni daxil edin')
// alert(`Bu cumledeki soz sayisi ${sozsayi(str)}-dir`)



// ###Parametr olaraq string qəbul edən və o stringin daxilindəki hərflərdən neçəsinin sait olduğunu return edən method yazın
// 1-ci usul
// let a=prompt('Sozlerin sayini bilmek istediyiniz cumleni daxil edin')
// say=0
// for(let i=0; i<a.length; i++){
    // if(a[i]=="a" || a[i]=="ı" || a[i]=="o" || a[i]=="u" || a[i]=="e" || a[i]=="ə" || a[i]=="i" || a[i]=="ö" || a[i]=="ü" || a[i]=="A" || a[i]=="I" || a[i]=="O" || a[i]=="U" || a[i]=="E" || a[i]=="Ə" || a[i]=="İ" || a[i]=="Ö" || a[i]=="Ü"){
    //     cem+=1
    // }
// alert(`Bu cumlede ${say} sait herf var`)

// 2-ci usul
// function saitsayi(a){
//     return a.match(/[aeəiıöouü]/gi).length
// }

// let str=prompt("Cumleni daxil edin")
// alert(`Cumledeki saitlerin sayi ${saitsayi(str)}-dir`)



// ### Parametr olaraq array qəbul edib o arrayın daxilindəki ikirəqəmli ədədləri ayrı bir arraya toplayaraq yeni arrayı return edən method yazın.

// let ikireqem_ededler=[]
// function ikireqemli_eded(a){
//     for(let i=0; i<a.length; i++){
//         if(a[i]>9 && a[i]<100){
//             ikireqem_ededler.push(a[i])
//         }
//     }
//     return(ikireqem_ededler)
// }

// let a=[]
// let eded_elave=confirm("eded daxil etmek isteyirsiz?")
// while(true){
//     let eded=prompt("Ededi daxil edin")
//     if(eded){
//         a.push(eded)
//     }
//     else{
//         break
//     }
// }
// console.log(a)
// ikireqemli_eded(a)
// console.log(ikireqem_ededler)





// ### Parametr olaraq maas və vergi faizi qəbul edərək yekun maaş məbləğını return edən method yazın

// let maas=prompt('Maashinizi daxil edin')
// function maashfaiz(a){
//     return (a*0.82)
// }

// alert(`Sizin maashiniz ${maashfaiz(maas)} manatdir`)






// ### Daxil edilən argumentin tipinə görə fərqli nəticələr verən method yazın

// argument obyektdirsə onun daxilində necə propertisinin olduğunu return etsin
// argument ədəddirsə neçə rəqəmli ədəd olduğunu return etsin
// argument stringdirsə o stringin daxilindəki hərflərdən istifadə edərək təsadufi 5 söz istehsal edib , istehsal edilən sözləri array olaraq return etsin

let daxil=prompt()
// let b=(daxil*1)
console.log(typeof(daxil/3))

// if(typeof(b)==Number){
//     // console.log(b)
//     alert(b)
// }