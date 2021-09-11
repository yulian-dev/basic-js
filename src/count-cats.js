import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(backyard) {
  const countAnimals = backyard => {
    let animal = '^^';
    let count = 0;
    backyard.forEach(item => item.forEach(cat => {
      if (cat === animal){
        count++;
      }
    }))
    return count;
  }
  return countAnimals(backyard);
}
