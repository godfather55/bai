class Person {
    constructor(firstName, lastName)   {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    firstLastName(){
        console.log(
            `${this.firstName} ${this.lastName.toUpperCase()}`

        );
    }
    initialName(){
        console.log(
            `${this.firstName.charAt(0)}.${this.lastName.charAt(0)}.`


        );


    }

}

person1 = new Person('Jan', 'Nowak');
person2 = new Person('Krystian', 'Hajduk');
person1.firstLastName();
person1.initialName();
person2.firstLastName();
person2.initialName();

