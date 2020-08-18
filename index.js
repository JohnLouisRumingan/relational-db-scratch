

// create factory function or class? We can use class here to make it more OOP-like
// We will create a simple relationship between employees of an organization.

class Record{
    records = [];

    constructor(name, position, building){
        this.name = name;
        this.position = position;
        this.building = building;

        // Record.allInstances = [];
        // Record.allInstances.push(this);
    }

    // note for class variables and ES7+. In ES6, there is native support for class creation but no option for class variables
    // https://stackoverflow.com/questions/22528967/es6-class-variable-alternatives

    // static allRecords(){
    //     return Record.allInstances;
    // }

    // positions are experience levels for this simple record system.  Multiply by 1000 for bimonthly salary
    calcSalary(){
        return this.position * 1000;
    }

    // getter. get syntax binds an object property to a function that will be called when that property is looked up
    get salaryPrint(){
        return `$${this.calcSalary()}`;
    }

    get salary(){
        return this.calcSalary();
    }
}



// sample: let JL = new Record("John Louis", 1, "A");
// console.log(JL.salary); // 1000