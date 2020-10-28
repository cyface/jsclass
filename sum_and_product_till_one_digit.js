/**
 Coding Challenge | Create a function that takes n numbers as arguments, adds them together,
 and returns the product of digits until the answer is only 1 digit long.

 Input: sumDigProd(16,28)
 Output: 6
 (16 + 28 = 44 -> 4 * 4 = 16 -> 1 * 6 -> 6)
 Input: sumDigProd(0)
 Output: 0
 Input: sumDigProd(1, 2, 3, 4, 5, 6)
 Output: 2
 **/

function sumAndProductTillSingle () {
  const args = Array.from(arguments) // Convert arguments to an array we can reduce

  const argSum = args.reduce((runningSum, currentNum) => runningSum + currentNum) // Sum all args

  // Create product of digits of sum
  const product = argSum.toString().split('').reduce(
    (runningProduct, digit) => runningProduct * digit
  )

  // Check product digit count, and recurse if > 1, otherwise return
  if (product.toString().length > 1) {
    return sumAndProductTillSingle(product, 0)
  } else {
    return product
  }
}

console.log(`Final Answer: ${sumAndProductTillSingle(16, 28)}`) // Should be 6
console.log(`Final Answer: ${sumAndProductTillSingle(0)}`) // Should be 0
console.log(`Final Answer: ${sumAndProductTillSingle(1, 2, 3, 4, 5, 6)}`) // Should be 2