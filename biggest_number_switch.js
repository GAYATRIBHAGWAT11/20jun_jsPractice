let a=10;
let b=30;
let c=20;
let biggest;
switch(a>b)
{
    case 1:
    switch(a>c){

        case 1:
          biggest=a;
            break;

            case 0:
                biggest=c;
            break;
    }
    break;
    case 0:
        switch(b>c){

        case 1:
            biggest=b;
            break;

            case 0:
                biggest=c;
            break;
        }
        break;
       
}
console.log(biggest)

    