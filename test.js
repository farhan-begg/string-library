// Import your code
const stringLib = require('./script')


test("Testing capitalize", () => {
    expect(stringLib.capitalize("test")).toBe("Test")
    expect(stringLib.capitalize("TeSt")).toBe("Test")
})


test("Testing allCaps", () => {
    expect(stringLib.allCaps('test')).toBe("TEST")
    expect(stringLib.allCaps('TESt')).toBe("TEST")
})

test("Testing capitalize words", () => {
    expect(stringLib.capitalizeWords('testing some')).toBe('Testing Some')
    expect(stringLib.capitalizeWords('TESTING SOME')).toBe('Testing Some')
})


test("Testing removeExtraSpaces from input string", () => {
    expect(stringLib.removeExtraSpaces(" Test       ")).toBe("Test")
    expect(stringLib.removeExtraSpaces(" Test something ")).toBe("Testsomething")


})

test("Testing kabob case", () => {
    expect(stringLib.kabobCase("Test Something")).toBe("test-something")
    expect(stringLib.kabobCase("TEST SOMETHING")).toBe("test-something")
})

test("Testing snakeCase", () => {
    expect(stringLib.snakeCase("test another")).toBe("test_another")
    expect(stringLib.snakeCase("TEST ANOTHER")).toBe("test_another")
})

test("Testing camelCase", () => {
    expect(stringLib.camelCase("Camel Case")).toBe("camelCase")

})

test("Testing Shift", () => {
    expect(stringLib.shiftString('StackDev', 3)).toBe("DevStack")

})