import { input } from "./001.input";

const rightNumberToCountMap: {[key:string]:number} = {};
for (const rightString of input.rightCol){
  rightNumberToCountMap[rightString] = (rightNumberToCountMap[rightString] ?? 0) + 1
}


let total = 0
for (const leftString of input.leftCol){
  const current = Number(leftString) * (rightNumberToCountMap[leftString] ?? 0)
  total += current
}

console.log(total);
