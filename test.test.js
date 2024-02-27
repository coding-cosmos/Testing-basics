import capitalize from "./capitalize.js"
import reverseString from "./reverse.js";
import calculator from "./calculator.js";
import caesarCipher from "./caesarCipher.js";
import analyzeArray from "./analyzeArray.js";

test('Capitalized', () => {
    expect(capitalize("myString")).toBe("MyString");
});

test('Reversed', () => {
    expect(reverseString("sujal")).toBe("lajus");
});

test('Caculator', () => {
     expect(calculator.Add(5, 6)).toBe(11);
    expect(calculator.Substract(10, 6)).toBe(4);
    expect(calculator.Divide(10, 2)).toBe(5);
    expect(calculator.Multiply(2, 4)).toBe(8);
}
);

test("Encrypted name", () => {
    expect(caesarCipher("sujal", 2)).toBe("uwlcn");
   
});
test("Encrypted z", () => {
    expect(caesarCipher("z", 2)).toBe(".");
   
});
test("Encrypted capital letter", () => {
    expect(caesarCipher("ABVC", 2)).toBe("CDXE");
   
});

test("Encrypted all letters", () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 2)).toBe(
      "cdefghijklmnopqrstuvwxyz ."
    );
});

test("Encrypted some punctuations", () => {
    expect(caesarCipher("i,am.therfore?what?", 2)).toBe("k!co?vjgthqtgayjcva");
});

test("Analyze Array", () => {
   expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
     average: 4,
     min: 1,
     max: 8,
     length: 6,
   }); 
});



