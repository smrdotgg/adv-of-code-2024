import { input } from "./001.input";
const sortedLeft = input.leftCol.sort()
const sortedRight = input.rightCol.sort();

let distance = 0;
for (let i = 0; i < sortedLeft.length; i ++){
  const currDist = Math.abs(sortedRight[i] - sortedLeft[i]);
  if (currDist < 0) console.log(currDist);
  distance += currDist
}
console.log(distance)
