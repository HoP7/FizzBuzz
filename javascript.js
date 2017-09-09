

function fizzBuzz() {
  var number = prompt("Please enter your number!");
  var array = [];
  for (var i = 1; i <= number; i++) {
    if (i % 3 == 0 && i % 5 == 0)
      array.push("fizzbuzz");
    else if (i % 3 == 0)
      array.push("fizz");
    else if (i % 5 == 0)
      array.push("buzz");
    else
      array.push(i);
  }
 //for testing loop
  for (var i = 0; i < number; i++) {
    console.log(array[i]);
  }
  return array;
}
fizzBuzz();