let map = new Map();
map.set('Петя', '13');
map.set('Вася', '15');
map.set('Галя', '16');
 
for (let el of map.keys()) {
  console.log(`Ключ — ${el}, значение — ${map.get(el)}`)
}