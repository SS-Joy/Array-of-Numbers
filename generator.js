const fs = require("fs");
target = 10000;
let num = [];
function makeNumbers() {
  for (let i = 0; i <= target; i++) {
    num[i] = i;
  }
  return num;
}
let ans = makeNumbers();
fs.writeFileSync("Nums.txt", ans.toString());
