const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  console.log(`Timing addNums10 with increment ${increment}`);
  let results = [];
  for (let i = 1; i <= 10; i++) {
    const label = `addNums(${i * increment})`;
    console.time(label);
    const result = addNums(i * increment);
    console.timeEnd(label);
    results.push(result);
  }
  return results;

}


function addManyNums10Timing(increment) {
  console.log('Timing addManyNums10 with increment ${increment}');
  let results = [];
  for (let i = 1; i <= 10; i++) {
    const label = `addManyNums(${i * increment})`;
    console.time(label);
    const result = addManyNums(i * increment);
    console.timeEnd(label);
    results.push(result);
  }
  return results;

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
