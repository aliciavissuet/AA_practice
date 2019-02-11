// window.setTimeout(() => {
//   alert('HAMMERTIME')
// }, 5000);
//
// window.setTimeout(() => alert('HAMMERTIME'), 5000);
//
//
// const hammertime = (time) => {
//   window.setTimeout(() => alert(`${time} is hammertime!`), time)
// }

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const callback = (tea, biscuits) => {
  return `${tea} to tea and ${biscuits} to biscuits`
}

const teaAndBis = (callback) => {
  reader.question('Would you like tea?', (tea) => {
    reader.question('Would you like biscuits?', (biscuits) => {
      const tea1 = tea;
      const bis1 = biscuits;

      callback(tea1, biscuits1)
    })
  })
}
