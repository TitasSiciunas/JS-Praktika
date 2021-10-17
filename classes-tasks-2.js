console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
  // ... code
  class Player {
    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }

    getAge() {
      return `${this.name} is age ${this.age}`;
    }

    getHeight() {
      return `${this.name} is ${this.height}cm`;
    }

    getWeight() {
      return `${this.name} weighs ${this.weight}kg`;
    }
  }

  const p1 = new Player("David Jones", 25, 175, 75);
  console.log({
    "David Jones is age 25": p1.getAge(),
    "David Jones is 175cm": p1.getHeight(),
    "David Jones weighs 75kg": p1.getWeight(),
  });
}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
  // ... code
  class Calculator {
    add(num1, num2) {
      return num1 + num2;
    }
    subtract(num1, num2) {
      return num1 - num2;
    }
    multiply(num1, num2) {
      return num1 * num2;
    }
    divide(num1, num2) {
      return num1 / num2;
    }
  }
  const calculator = new Calculator();

  console.log(calculator.add(10, 5));
  console.log(calculator.subtract(10, 5));
  console.log(calculator.multiply(10, 5));
  console.log(calculator.divide(10, 5));
}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
  // ... code
  class Employee {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.fullname = `${firstname} ${lastname}`;
      this.email = `${firstname}.${lastname}@company.com`.toLowerCase();
    }
  }
  const emp1 = new Employee("John", "Smith");
  const emp2 = new Employee("Mary", "Sue");
  const emp3 = new Employee("Antony", "Walker");

  console.log({
    'John Smith': emp1.fullname,
    'Mary Sue': emp2.email,
    'Antony Walker': emp3.firstname
  })

}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  // ... code
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    // compareAge(other) {
    //   if (this.age > other.age) {
    //     return `${other.name} is older than me.`
    //   } else if (this.age < other.age) {
    //     return `${other.name} is younger than me.`
    //   } else {
    //     return `${other.name} is the same age as me.`
    //   }
    compareAge(other) {
      if (this.age < other.age) {
        return `${other.name} is older than me.`
      } else if (this.age > other.age) {
        return `${other.name} is younger than me.`
      } else {
        return `${other.name} is the same age as me.`
      }
    }
  }
  const p1 = new Person("Samuel", 24);
  const p2 = new Person("Joel", 36);
  const p3 = new Person("Lily", 24);

  console.log(p1.compareAge(p2));
  console.log(p2.compareAge(p1));
  console.log(p3.compareAge(p3));
}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
  // ... code
  class Circle {
    constructor(radius) {
      this.radius = radius
    }
    getArea() {
      return Math.PI * this.radius ** 2;
    }
    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }
  let circy1 = new Circle(11);
  let circy2 = new Circle(4.44);

  console.log({
    'Area': circy1.getArea(),
    'Perimeter': circy2.getPerimeter()
  });
}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
  // ... code
  class Name {
    constructor(fname, lname) {
      this.fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase();
      this.lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase();
      this.fullname = `${this.fname} ${this.lname}`;
      this.initials = `${this.fname[0]}.${this.lname[0]}`;
    }
  }

  const a1 = new Name('john', 'SMITH');

  console.log({
    John: a1.fname,
    Smith: a1.lname,
    'John Smith': a1.fullname,
    'J.S': a1.initials,
  });
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  // ... code
  class IceCream {
    constructor(flavor, numSprinkles) {
      this.flavor = flavor;
      this.numSprinkles = numSprinkles;
    }
  }
  function sweetestIcecream(arr) {
    const sweetValue = {
      "Plain": 0,
      "Vanilla": 5,
      "ChocolateChip": 5,
      "Strawberry": 10,
      "Chocolate": 10
    };

    const max = Math.max(...arr.map((x) => sweetValue[x.flavor] + x.numSprinkles));

    return max;
  }
  ice1 = new IceCream("Chocolate", 13);
  ice2 = new IceCream("Vanilla", 0);
  ice3 = new IceCream("Strawberry", 7);
  ice4 = new IceCream("Plain", 18);
  ice5 = new IceCream("ChocolateChip", 3);

  console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]));
  console.log(sweetestIcecream([ice3, ice1]));
  console.log(sweetestIcecream([ice3, ice5]));
}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  // ... code
  class OnesThreesNines {
    constructor(num) {
      this.num = num;
      this.ones = this.num / 1;
      this.threes = Math.floor(this.num / 3);
      this.nines = Math.floor(this.num / 9);
    }
  }

  const n1 = new OnesThreesNines(5);

  console.log({
    'Nines 0': n1.nines,
    'Ones 5': n1.ones,
    'Threes 1': n1.threes,
  });
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
  // ... code
  class User {
    static userCount = 0;
    constructor(username) {
      this.username = username;
      User.userCount++;
    }
  }

  u1 = new User("johnsmith10")
  u2 = new User("marysue1989")
  u3 = new User("milan_rodrick")

  console.log(User.userCount);
}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
  // ... code
  class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
    getTitle() {
      return `Title: ${this.title}`;
    }
  
    getAuthor() {
      return `Author: ${this.author}`;
    }
  }

  const HP = new Book('Harry Potter', 'J.K. Rowling');
  const PP = new Book('Pride and Prejudice', 'Jane Austen');
  const H = new Book('Hamlet', 'William Shakespeare');
  const WP = new Book('War and Peace', 'Leo Tolstoy');

  console.log({
    'Harry Potter': HP.title,
    'J.K. Rowling': HP.author,
    'Title: Harry Potter': HP.getTitle(),
    'Author: J.K. Rowling': HP.getAuthor(),
  });
  console.log({
    'Pride and Prajudice': PP.title,
    'Jane Austen': PP.author,
    'Title: Pride and Prajudice': PP.getTitle(),
    'Author: Jane Austen': PP.getAuthor(),
  });
  console.log({
    'Hamlet': H.title,
    'William Shakespeare': H.author,
    'Title: Hamlet': H.getTitle(),
    'Author: William Shakespeare': H.getAuthor(),
  });
  console.log({
    'War and Peace': WP.title,
    'Leo Tolstoy': WP.author,
    'Title: War and Peace': WP.getTitle(),
    'Author: Leo Tolstoy': WP.getAuthor(),
  });
}
console.groupEnd();
