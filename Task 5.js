var witcherPers = ["Геральт из Ривии", "Цирилла", "Йенифер из Венгерберга", "Трисс Меригольд"];
console.log(witcherPers.length);
witcherPers.forEach((item, i) => {
  setTimeout(() => {
  console.log(item)
}, (i + 1) * 1000)
})