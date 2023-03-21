const person = {
    firstName : "John",
    lastName : "Doe",
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
};

const member = {
    firstName : "Chris",
    lastName : "Brown"
};

let x = person.fullName.bind(member);
document.getElementById("demo").innerHTML = x();