function findNumber(array, type) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if ((type === 'even' && array[i] % 2 === 0) || (type === 'odd' && array[i] % 2 !== 0)) {
        result.push(array[i]);
      }
    }
  
    return result;
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = findNumber(numbers, 'even');
console.log(evenNumbers); 

const oddNumbers = findNumber(numbers, 'odd');
console.log(oddNumbers);
