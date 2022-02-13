const personObject = {
  name: 'jonh',
  age: 34,
  height: '34inch',
}

const leaderPerson = {
  ...personObject,
  position: 'leader'
}

console.log(personObject);
console.log(leaderPerson);