function makePerson(name) {
  let name1 = name;

  return {
    setName: (newName) => (name1 = newName),
    getName: () => name1,
  };
}

const me = makePerson("Shunnu");
console.log(me.getName());

me.setName("Sunil Kumar");

console.log(me.getName());
