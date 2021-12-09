
 // 1) Ədədi tərsinə çevirən JavaScript funksiyasını yazın. Redaktora keçin Nümunə x = 32243; Gözlənilən Nəticə : 34223 
// let x='32243'
// let a=[]
// for(let i=x.length; i>-1; i--){
//     // a.push(x[i])
//     console.log(x[i]) 
// }



//  Ders meseleleri
 let nums=[23, 28, 28, 24, 24, 21, 33, 17, 29, 25, 31, 29, 2, 10]
 // Funksiyalar
function boyukedeler(a,b){
    return a>b
}
function tekeded(a){
    return a%2!=0
}
function cuteded(a){
    return a%2==0
}

function cem(a,b=0){
    return a+b
}



// 1) 25-den boyuk olanlari gorsed
 
// 1-ci usul ile meselenin helli
// for(i=0;i<nums.length;i++){
//     if(nums[i]>25){
//         console.log(nums[i])
//     }
// }
    

// funskiyalar ele meselenin helli
// for(i=0;i<nums.length;i++){
//     if(boyukededler(nums[i])){
//         console.log(`25-den boyuk ededleri  ${nums[i]}-dir`)
//     }  
//     else
//     console.log(`25-den kicik ededleri  ${nums[i]}-dir`)
// }



// 2) tek ededleri gorsed

// 1-ci usul ile meselenin helli
// for(i=0;i<nums.length;i++){
//     if(nums[i]%2!=0){
//         console.log(nums[i])
//     }
// }

// funksiyalar ile meselenin helli
// for(i=0;i<nums.length;i++){
//     if(tekeded(nums[i])){
//         console.log(nums[i])
//     }
// }

    




// 3) tek ededlerin cemini gorsed

// 1-ci usul ile meselenin helli 
// for(i=0;i<nums.length;i++){
//     if(nums[i]%2!=0){
//         console.log(nums[i])
//     }
// }

// funksiya ile meselenin helli
// let cem2=0
// for(i=0;i<nums.length;i++){
//     if(tekeded(nums[i])){
//         cem2+=cem(nums[i])
//     }   
// }
// console.log(cem2)


// 4) cut ededlerin cemini gorsed
// 1-ci usul ile meselenin helli
//     cem2=0
//     for(i=0;i<nums.length;i++){
//         if(nums[i]%2==0){
//             cem2=cem2+nums[i]
//         }
//     }
//     console.log(cem2)


// Funksiyalar ile meselenin helli
//    cem2=0
//    for(i=0;i<nums.length;i++){
//        if(cuteded(nums[i])){
//             cem2=cem2+cem(nums[i])
//        }
//    }
//    console.log(cem2)




// 5) yas ortalamasindan boyuk olanlari goster
// 1-ci usul ile helli
    
    // let cem5=0
    // let i=0
    // while(i<nums.length){
    //     cem5=cem5+nums[i]
    //     i++
    // }
    // console.log(`yaslarin cemi--  ${cem5}, yaslarin ededi ortasi ise  ${cem5/nums.length} `)


// // 6) en kicik ve en boyuyu goster
// funksiya ile  meselenin helli
let min=nums[0]
let max=nums[0]
for(i=1;i<nums.length;i++){
    if (nums[i]>max){
        max=nums[i]
    }
    if (nums[i]<min){
        min=nums[i]
    }
    }
    console.log(`en kicik yas  ${min}-dur, en boyuk yas ise  ${max}-dur `)






