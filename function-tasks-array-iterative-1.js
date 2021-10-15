const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];
console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
{
  // ...sprendimas ir spausdinimas
  function printPerson(person) {
    console.log(person);
  }

  people.forEach(printPerson);
}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių varus ir pavardes, atskirtus brūkšneliu');
{
  // ...sprendimas ir spausdinimas
  function printFullname(person) {
    console.log(`${person.name} - ${person.surname}`);
  }

  people.forEach(printFullname);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
  // ...sprendimas ir spausdinimas
  function printFullnameAndMarried(person) {
    console.log(`${person.name} ${person.surname}: ${person.married ? 'married' : 'not married'}`);
  }

  people.forEach(printFullnameAndMarried);
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  // ...sprendimas ir spausdinimas
  function getSexAndIncome(person) {
    return {
      sex: person.sex,
      income: person.income
    };
  }

  const sexAndIncomeData = people.map(getSexAndIncome);
  console.table(sexAndIncomeData);
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  // ...sprendimas ir spausdinimas
  function getNameSurnameSex(person) {
    return {
      name: person.name,
      surname: person.surname,
      sex: person.sex
    };
  }

  const nameSurnameSexData = people.map(getNameSurnameSex);
  console.table(nameSurnameSexData);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  // ...sprendimas ir spausdinimas
  function printMale(person) {
    return person.sex === 'male';
  }

  const men = people.filter(printMale);
  console.table(men);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  // ...sprendimas ir spausdinimas
  function printFemale(person) {
    return person.sex === 'female';
  }

  const women = people.filter(printFemale);
  console.table(women);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  // ...sprendimas ir spausdinimas
  function printDriverFullname(person) {
    if (person.hasCar) {
      console.log(person.name, person.surname);
    }
  }

  people.forEach(printDriverFullname);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  // ...sprendimas ir spausdinimas
  function printMarried(person) {
    return person.married === true;
  }

  const isMarried = people.filter(printMarried);
  console.table(isMarried);
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  // ...sprendimas ir spausdinimas
  function isFemaleDriver(person) {
    return person.hasCar && person.sex === 'female';
  }

  function isMaleDriver(person) {
    return person.hasCar && person.sex === 'male';
  }

  const driverCountBySex = {
    female: people.filter(isFemaleDriver).length,
    male: people.filter(isMaleDriver).length
  }

  console.log(driverCountBySex);
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  // ...sprendimas ir spausdinimas
  function changeIncomeToSalary({income, ...other}) {
    return {
      ...other,
      salary: income
    };
  }

  const peopleWithSalary = people.map(changeIncomeToSalary);
  console.table(peopleWithSalary);
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės');
{
  // ...sprendimas ir spausdinimas
  function removeSexNameSurname({sex, name, surname, ...other}) {
    return other;
  }

  const result = people.map(removeSexNameSurname)
  console.table(result);
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  // ...sprendimas ir spausdinimas
  function changeNameSurnameToFullname({name, surname, ...other}) {
    return { fullname: name + ' ' + surname, ...other};
  }

  const result = people.map(changeNameSurnameToFullname);
  console.table(result);
}
console.groupEnd();

