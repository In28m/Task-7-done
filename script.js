/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  marke: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

const showObjectKeysMain = Object.keys(audi)
const showObjectKeys = Object.keys(audi).map((key) => [(key), audi[key]])

console.log(audi)
console.log(showObjectKeysMain) 
console.log(showObjectKeys)



