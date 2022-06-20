let number_of_days=parseInt(process.argv[2])
let charge;
  if(number_of_days<=5){
    charge=number_of_days*0
    console.log(charge)
  }else if(number_of_days>=6 && number_of_days<=10){
    charge=(5*0)+(number_of_days-5)*3
     console.log(charge)
  }else if(number_of_days>=11 && number_of_days<=15){
    charge=(5*0)+(10*3)+(number_of_days-10)*4
     console.log(charge)
  }else if(number_of_days>15){
    charge=(5*0)+(10*3)+(number_of_days-15)*5
     console.log(charge)
  }