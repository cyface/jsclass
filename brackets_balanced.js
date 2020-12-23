/*
Function to determine if brackets in a string are balanced
Uses regex to count both bracket types and then determines if the count is the same
Requirements were not to make sure they were match in *nested pairs*, just that the count was the matched. ;)
 */

let bracketsBalanced = stringToSearch => {
  const left = stringToSearch.match(/\[/gm) || 0
  const right = stringToSearch.match(/]/gm) || 0
  return left.length === right.length
}
module.exports = bracketsBalanced