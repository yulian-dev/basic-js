/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
    if (Array.isArray(members)){
        let subarray = [];
        members.forEach(item => {
            if (typeof item === 'string') {
                let firstLetter = item.trim().slice(0, 1).toUpperCase();
                subarray.push(firstLetter);
            }
        })
        return subarray.sort().join('')
    } else {
        return false
    }
}
