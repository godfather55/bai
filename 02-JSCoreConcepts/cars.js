// Pure Functions

function isCar(car1, car2, car3) {
      if(car1==true && car2==true && car3==true){
       return true;
    } else if(car1==false && car2==false && car3==false){
        return true;
    } else if(car1==true && car2==true && car3==false){
        return false;
    } else if(car1==false && car2==false && car3==true){
        return false;
    } else if(car1==true && car2==false && car3==true){
        return false;
    }
}

console.log(isCar(true, true, true));
console.log(isCar(false, false, false));
console.log(isCar(true, true, false));
console.log(isCar(false, false, true));
console.log(isCar(true, false, true));

