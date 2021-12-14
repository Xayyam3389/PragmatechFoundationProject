let a=prompt("cumleni daxil edin")
let bosarray=[]
for(let i in a){
    bosarray.push(a[i])
}

let dovr=0
let tesadufi_herf=[]
while(dovr<5){
    let tesadufi_herfler = bosarray[Math.floor(Math.random()*bosarray.length)];
    tesadufi_herf.push(tesadufi_herfler)
    dovr++

}

    alert(tesadufi_herf.join(""))

