
const para = document.querySelectorAll('p')
const numbers = [12, 34, 76, 123, 56, 8, 2, 988, 90, 345]
const names = ["Alice", "Bob", "Charlie", "Darlington", "Emma", "Fiona", "George", "Hannah", "Joy", "Julia"]

function sum(arrayName) {
    return arrayName.reduce((a,b)=>(a+b))
}
function largestNumber(arrayName){
    return (Math.max(...arrayName))}

function smallestNumber(arrayName) {
    return Math.min(...arrayName);
      }

function numbersDivisibleByTwo(arrayName) {
    return arrayName.filter(num => num % 2 === 0).length;
      }

function average(arrayName){
    return sum(arrayName)/arrayName.length
    }

function greaterThan50(arrayName) {
    return [arrayName.filter(num => num > 50)];
      }

function sortAscending(arrayName) {
    return [...arrayName].sort((a, b) => a - b); 
      }

function allEvenCheck(arrayName) {
    return arrayName.every(num => num % 2 === 0);
      }

function indexOf76(arrayName) {
        return arrayName.indexOf(76);
      }

      function reverse(arrayName) {
        return arrayName.slice().reverse(); 
      }
      
para[0].innerHTML = '<strong>Sum of Numbers</strong>:  '  + sum(numbers)
para[1].innerHTML = '<strong>Largest Nmmber in Array</strong>:  '  + largestNumber(numbers)
para[2].innerHTML = '<strong>Smallest Nmmber in Array</strong>:  ' + smallestNumber(numbers)
para[3].innerHTML = '<strong>Total of Numbers Divisible by 2</strong>:  '  + numbersDivisibleByTwo(numbers)
para[4].innerHTML = '<strong>Average of Numbers</strong>:  '  + average(numbers)
para[5].innerHTML = '<strong>Array of Numbers >50</strong>:  '  + (greaterThan50(numbers))
para[6].innerHTML = '<strong>Array of Numbers >50 in ascending order</strong>:  '  + greaterThan50(sortAscending(numbers))
para[7].innerHTML = '<strong>Check if all the numbers in the array are even</strong>:  '  + allEvenCheck((greaterThan50(numbers)))
para[8].innerHTML = '<strong>Index of number 76</strong>:  '  + indexOf76(numbers)
para[9].innerHTML = '<strong>Reverse numbers in the Array</strong>:  '  + reverse(numbers)

function nameCount(arrayName) {
    return arrayName.length;
  }
  
  function includeCharlie(arrayName) {
    return arrayName.includes("Charlie");
  }
  
  function uppercaseNames(arrayName) {
    return arrayName.map(name => name.toUpperCase());
  }
  
  function sortAlphabetical(arrayName) {
    return [...arrayName].sort(); 
  }
  
  function allFiveChars(arrayName) {
    return arrayName.every(name => name.length >= 5);
  }
  
  function indexOfEmma(arrayName) {
    return arrayName.indexOf("Emma");
  }
  
  function concatenateNames(arrayName) {
    return arrayName.join(", ");
  }
 

  para[10].innerHTML = '<strong>Name Count in Array</strong>:  '  + nameCount(names)
  para[11].innerHTML = '<strong>Check if "Charlie" included in Array?</strong>:  '  + includeCharlie(names)
  para[12].innerHTML = '<strong>Array in UpperCase</strong>:  '  + uppercaseNames(names)
  para[13].innerHTML = '<strong>Name in Alphabetical Order</strong>:  '  + sortAlphabetical(names)
  para[14].innerHTML = '<strong>Check if names contains 5 characters</strong>:  '  + allFiveChars(names)
  para[15].innerHTML = '<strong>Index of Emma</strong>:  '  + indexOfEmma(names)
  para[16].innerHTML = '<strong>Concatenated Names</strong>:  '  + concatenateNames(names)


