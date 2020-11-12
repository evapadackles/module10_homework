let numberTest = prompt('Здравствуйте! Пожалуйста, введите число')
if (isNaN(+numberTest) || numberTest === null) {
  alert ('Убедитесь, что вы ввели число цифрами')
} else if (value =+numberTest % 2 ===0) {
  console.log ('Чётное')
} else if (value =+numberTest % 2 != 0) {
  console.log ('Нечётное')
}