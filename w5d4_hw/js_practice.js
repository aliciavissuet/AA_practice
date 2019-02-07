const madLib = (verb, adjective, noun)  => {
    return `We shall ${verb} the ${adjective} ${noun}`
};

const is_substring = (searchString, subString) => {
    return searchString.includes(subString)
};

const fizzBuzz = (array) => {
    result = []
    for(let i=0; i<array.length; i++) {
        if (array[i] % 3 === 0 && array[i] % 5 === 0) {

        } else if(array[i] % 3=== 0 || array[i] % 5=== 0) {
            result.push(array[i])
        }
    }
    return result
};

const isPrime = (num) => {
    if (num===2) {
        return true
    }
    for (let i=2; i<num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true;
};

const sumOfNPrimes = (num) => {
  const result = [];
  let n = 2;
  while (result.length < num) {
      if(isPrime(n)){
          result.push(n);

      }
      n+=1
  }
  return result;
};