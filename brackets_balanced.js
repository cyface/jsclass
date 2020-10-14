/*
Function to determine if brackets in a string are balanced
Uses regex to count both bracket types and then determines if the count is the same
Requirements we not to make sure they were match in nested pairs, just that the count was the matched. ;)
 */

let bracketsBalanced = stringToSearch => {
  const left = stringToSearch.match(/\[/gm) || 0
  const right = stringToSearch.match(/]/gm) || 0
  return left.length === right.length
}

console.log(bracketsBalanced('bob')) // true
console.log(bracketsBalanced('[bob]')) // true
console.log(bracketsBalanced('[[bob]]')) //
console.log(bracketsBalanced('[bob\n\n]')) // true
console.log(bracketsBalanced('][bob\n\n][')) // true
console.log(bracketsBalanced('i [am[]wr[o]ng[]]')) // true
console.log(bracketsBalanced('[[[bob]]]')) // true
console.log(bracketsBalanced('[]bob[')) // false
console.log(bracketsBalanced('[[[bob')) // false
console.log(bracketsBalanced('bob]')) // false
console.log(bracketsBalanced('bob\n\n]')) // false
console.log(bracketsBalanced('[bob')) // false