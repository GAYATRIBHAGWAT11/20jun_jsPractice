let h1="0"
let h2="0"
let hh=h1*10+h2;
 if (hh < 12) {
     let Meridien = "AM";
 }
 else{
    let Meridien = "PM";
 }
     

 hh %= 12;
if (hh == 0){
  console.log("12")
  for (let  i = 2; i < 8; ++i) {
        console.log(i)
     }
}
else{
  console.log(hh)
  for (let i = 2; i < 8; ++i) {
        console.log(i)
     }
    }

console.log(" ", +meridien) 