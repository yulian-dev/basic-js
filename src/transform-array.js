/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
    if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!')
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            newArr.push(arr[i]);
        } else if (typeof arr[i] === 'string') {
            switch (arr[i]) {
                case '--discard-next':
                    arr[i + 1] !== undefined ? arr.splice(i, 2) : '';
                    break;
                case '--discard-prev':
                    arr[i - 1] !== undefined ? newArr.pop() : '';
                    break;
                case '--double-next':
                    arr[i + 1] !== undefined ? newArr.push(arr[i + 1]) : '';
                    break;
                case '--double-prev':
                    arr[i - 1] !== undefined ? newArr.push(arr[i - 1]) : '';
                    break;
                default: newArr.push(arr[i]);
            }
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr
}
