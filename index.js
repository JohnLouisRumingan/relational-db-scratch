

// create factory function or class? We can use class here to make it more OOP-like
// We will create a simple relationship between employees of an organization.

class Record{
    constructor(name, position, building){
        this.name = name;
        this.position = position;
        this.building = building;
    }

    // positions are experience levels for this simple record system.  Multiply by 1000 for bimonthly salary
    calcSalary(position){
        return position * 1000;
    }

    // getter. get syntax binds an object property to a function that will be called when that property is looked up

    get salary(){
        return `$${this.calcSalary()}`;
    }
    
}

// sample: let JL = new Record("John Louis", 1, "A");
// console.log(JL.salary); // 1000