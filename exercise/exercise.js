const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,


toJson () {
  return{id : this.id, age : this.age};
}
};
const json = person.toJson();

console.log(json); // Should return: { id: 1, age: 25 }