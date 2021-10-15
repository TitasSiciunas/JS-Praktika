console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  // ...sprendimas ir spausdinimas
  function getFirstElement(array) {
    return array[0];
  }

  const names = ['Fiona', 'Zylė', 'Kalifornija', 'Pečius'];
  console.log({
    names,
    result: getFirstElement(names)
  });
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  // ...sprendimas ir spausdinimas
  function removeFirstElement(array) {
    return array.shift();
  }

  const names = ['Fiona', 'Zylė', 'Kalifornija', 'Pečius'];
  console.log({
    names,
    result: removeFirstElement(names)
  });
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  // ...sprendimas ir spausdinimas
  function getLastElement(array) {
    return array[array.length - 1];
  }

  const names = ['Fiona', 'Zylė', 'Kalifornija', 'Pečius'];
  console.log({
    names,
    result: getLastElement(names)
  });
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  // ...sprendimas ir spausdinimas
  function removeLastElement(array) {
    return array.pop();
  }

  const names = ['Fiona', 'Zylė', 'Kalifornija', 'Pečius'];
  console.log({
    names,
    result: removeLastElement(names)
  });
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  // ...sprendimas ir spausdinimas
  function getArrayElementCount(array) {
    return array.length
  }

  const names = ['Fiona', 'Zylė', 'Kalifornija', 'Pečius'];
  console.log({
    names,
    result: getArrayElementCount(names)
  });
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  // ...sprendimas ir spausdinimas
  function getLastArrayElementIndex(array) {
    return array.length - 1;
  }

  const names = ['Fiona', 'Zylė', 'Kalifornija', 'Pečius'];
  console.log({
    names,
    result: getLastArrayElementIndex(names)
  });
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  // ...sprendimas ir spausdinimas
  function printArrayIndexesRows(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(i);
    }
  }

  printArrayIndexesRows(['Fiona', 'Zylė', 'Kalifornija', 'Pečius']);
}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  // ...sprendimas ir spausdinimas
  function printArrayElementsRows(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }

  printArrayElementsRows(['Fiona', 'Zylė', 'Kalifornija', 'Pečius']);
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  // ... sprendimas ir spausdinimas
  function printArrayIndexesAndElements(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(`[${i}] => ${array[i]}`);
    }
  }

  printArrayIndexesAndElements(['Fiona', 'Zylė', 'Kalifornija', 'Pečius']);
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  // ...sprendimas ir spausdinimas
  function printArrayElementsRowsReverse(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      console.log(array[i]);
    }
  }

  printArrayElementsRowsReverse(['Fiona', 'Zylė', 'Kalifornija', 'Pečius']);
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  // ...sprendimas ir spausdinimas
  function printArrayIndexesInLine(array) {
    let result = '';
    for (let i = 0; i < array.length; i++) {
      result += i + ', ';
    }
    result = result.slice(0, -2);
    console.log(result);
  }

  printArrayIndexesInLine(['Fiona', 'Zylė', 'Kalifornija', 'Pečius']);
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  // ...sprendimas ir spausdinimas
  function printArrayElementsInLine(array) {
    console.log(array.join(', ') + '.');
  }
  
  printArrayElementsInLine(['Fiona', 'Zylė', 'Kalifornija', 'Pečius']);
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  // ...sprendimas ir spausdinimas
  function printArrayAndElementPairInLine(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(`[${i}]=>${array[i]}`);
    }
    console.log(result.join(' '));
  }

  printArrayAndElementPairInLine(['Fiona', 'Zylė', 'Kalifornija', 'Pečius']);
}
console.groupEnd();
