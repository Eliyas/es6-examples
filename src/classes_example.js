
class Employee {
   
    constructor(name, surName, mobileNo) {
        this.name = name;
        this.surName = surName;
        this.mobileNo = mobileNo;
        var mobileNo = null;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name
    }

    getNameWithSurname() {
        return this.name +" "+ this.surName;
    }

    static validatedMobileNumber(number) {
       // any validation with given parameter
       return true; // or false
    }

    static concatNameWithSurName(name, surname) {
        return name + " "+ surname; 
     }
}


var buhari = new Employee("Buhari", "Shahid", 86456464654);

buhari.setName("Burhan");

console.log("name with surname without static method", buhari.getNameWithSurname());

console.log("name", Employee.validatedMobileNumber(14255646));


var burhan = new Employee("burhan", "fazal", 86456464654);

console.log("name with surname without static method", burhan.getNameWithSurname());

console.log("name with surname with static method", Employee.concatNameWithSurName("burhan", "fazal"));