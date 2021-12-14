// let cumle=[]
// let daxil_et=prompt("Cumleni daxil edin")
// cumle.push(daxil_et)
// console.log(cumle)
function sait_say(a){
    let sait_cem=0
    let cing_cem=0
    for(let i=0; i<a.length; i++){
    if(a[i]=="a" || a[i]=="ı" || a[i]=="o" || a[i]=="u" || a[i]=="e" || a[i]=="ə" || a[i]=="i" || a[i]=="ö" || a[i]=="ü" || a[i]=="A" || a[i]=="I" || a[i]=="O" || a[i]=="U" || a[i]=="E" || a[i]=="Ə" || a[i]=="İ" || a[i]=="Ö" || a[i]=="Ü"){
        sait_cem+=1
    }
    }
    return(sait_cem)
}
let i
let a=["tyui"]
for( i in a){
    console.log(a[i])
}
   