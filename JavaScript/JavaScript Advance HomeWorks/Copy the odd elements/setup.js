let btn = document.querySelector("#btn");
let results = document.querySelector("#results");

btn.addEventListener("click",function(){
    function findNumber(array, type) {
        const result = [];
        for (let i = 0; i < array.length; i++) {
          if ((type === 'even' && array[i] % 2 === 0) || (type === 'odd' && array[i] % 2 !== 0)) {
            result.push(array[i]);
          }
        }
      
        return result;
      }
    
    const numbers = [12, 45, 88, 1, 567, 3, 91];;
    const evenNumbers = findNumber(numbers, 'even');
    const oddNumbers = findNumber(numbers, 'odd');
    
    let oddNumber  = [];
    let evenNumber = [];

    oddNumber.push(oddNumbers);
    evenNumber.push(evenNumbers);

    results.innerHTML = `The Odd numbers are ${oddNumber} <br>
                         The Even numbers are ${evenNumber}`
})
