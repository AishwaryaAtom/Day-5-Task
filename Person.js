class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  toString() {
    return `${this.firstName} ${this.lastName}, Age: ${this.age}, Gender: ${this.gender}`;
  }
}

const person1 = new Person("Milir", "Purushothaman", 4, "Female");
console.log(person1.toString());
