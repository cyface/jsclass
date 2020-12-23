const test = require('ava');
const sumAndProductTillSingle = require('../../sum_and_product_till_one_digit');

test("Assignment Sample 1", t => {
    t.is(sumAndProductTillSingle(16, 28), 6)
});

test("Assignment Sample 2", t => {
    t.is(sumAndProductTillSingle(1, 2, 3, 4, 5, 6), 2)
});

test("Zero", t => {
    t.is(sumAndProductTillSingle(0), '0')
});
