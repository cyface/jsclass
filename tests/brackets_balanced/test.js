const test = require('ava');
const bracketsBalanced = require('../../brackets_balanced');

test("Assignment Sample 1", t => {
    t.is(bracketsBalanced('bob'), true)
});

test("Assignment Sample 2", t => {
    t.is(bracketsBalanced('[bob]'), true)
});

test("Assignment Sample 3", t => {
    t.is(bracketsBalanced('[[bob]]'), true)
});

test("Special Chars", t => {
    t.is(bracketsBalanced('[bob\n\n]'), true)
});

test("Starting With Right", t => {
    t.is(bracketsBalanced('][bob\n\n]['), true)
});

test("Rando Mix", t => {
    t.is(bracketsBalanced('i [am[]wr[o]ng[]]'), true)
});

test("Hanging Right", t => {
    t.is(bracketsBalanced('[]bob['), false)
});

test("All Left", t => {
    t.is(bracketsBalanced('[[[bob'), false)
});

test("Missing Left", t => {
    t.is(bracketsBalanced('bob]'), false)
});

test("Missing Left Special Chars", t => {
    t.is(bracketsBalanced('bob\n\n]'), false)
});

test("Missing Right", t => {
    t.is(bracketsBalanced('[bob'), false)
});
