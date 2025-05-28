const { add } = require('../src/index');

test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
});

test("resturns number itself for a single number", () => {
    expect(add("1")).toBe(1);
});

test("handles sum of any numbers in a non empty string", () => {
    expect(add("1,5,3,7")).toBe(16);
});

test("handles newline character in between the string", () => {
    expect(add("1,2\n3")).toBe(6);
})

test("handles any custom delimiter in the string", () => {
    expect(add("//;\n1;2\n3")).toBe(6);
})

test("throws exception for negative numbers in the string", () => {
    expect(() => add('//;\n1;2\n3;-4;2;-1')).toThrow("Negative numbers are not allowed -4,-1");
})