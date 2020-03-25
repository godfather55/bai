names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }
    

    startWith(letter){
        let arrletter = [];

        this.names.forEach(names => {
            if(names.charAt(0) == letter) arrletter.push(names);
            }
        );
        return new Students(arrletter);// names (array) which starts with the letter
    }

    sort() {
        let arrSort = [];
        this.names.forEach(names => arrSort.push(names));
        arrSort.sort();
        
        return new Students(arrSort);// names (array) in alphabetical order 
    }

    get() {
        return this.names;// names (array) in natural order
        
    }
    getFirst(n) {
        let arrFirst = []; // get first 'n' names (array) 
        for(let i=0; i<n; i++) arrFirst.push(names[i]);
        
        return new Students(arrFirst);
    }
    
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.sort().getFirst(4));
console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());



