class CreatUser {
        
        
        constructor(firstName,lastName,age){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
    }
  getbirthYear() {
    return new Date().getFullYear-this.age;
  }

  getfullName() {
    return this.firstName + " " + this.lastName;
  }
}

const User1 = new CreatUser("Avneesh", "Kumar", 21);
const User2 = new CreatUser("Anisha", "Kumari", 21);
