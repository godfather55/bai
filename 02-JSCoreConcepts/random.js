
let randomArray = (max=20, min=5) => {
    let array = [];
        for (i=0; i<10; i++) {
            array.push(Math.floor(Math.random()*(max-min+1)+min));    
        } return array;
}

let showArray = () => {
    console.log(randomArray());

}
console.log(showArray());



