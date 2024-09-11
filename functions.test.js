import { expect, test } from "vitest";
import { capitalize, reverse, calculator, caesarCipher, analyzeArr } from "./functions";

test("Capitalize - one sentence", () => {
  expect(capitalize("oh boy what a test!")).toBe("Oh boy what a test!");
});

test("Capitalize - two sentences", () => {
  expect(capitalize("oh boy what a test! this sure is a nice test.")).toBe(
    "Oh boy what a test! This sure is a nice test."
  );
});

test("Capitalize - three sentences", () => {
  expect(capitalize("oh boy what a test! this sure is a nice test.who doesn't love tests?")).toBe(
    "Oh boy what a test! This sure is a nice test. Who doesn't love tests?"
  );
});

test("Reverse a string", () => {
  expect(reverse("Oh boy what a test!")).toBe("!tset a tahw yob hO");
});

test("Reverse a longer string", () => {
  expect(reverse("Oh boy what a test! WH0 D032N'7 L0V3 73272?")).toBe("?27237 3V0L 7'N230D 0HW !tset a tahw yob hO");
});

test("Calculator add", () => {
  const c = calculator();
  expect(c.add(1, 2)).toBe(3);
});

test("Calculator subtract", () => {
  const c = calculator();
  expect(c.subtract(1, 2)).toBe(-1);
});

test("Calculator divide", () => {
  const c = calculator();
  expect(c.divide(1, 2)).toBe(0.5);
});

test("Calculator multiply", () => {
  const c = calculator();
  expect(c.multiply(1, 2)).toBe(2);
});

test("CaesarCipher shift 5", () => {
  expect(caesarCipher("Oh boy what a test! This sure is a nice test. Who doesn't love tests?", 5)).toBe(
    "Tm gtd bmfy f yjxy! Ymnx xzwj nx f snhj yjxy. Bmt itjxs'y qtaj yjxyx?"
  );
});

test("CaesarCipher shift 10", () => {
  expect(caesarCipher("Oh boy what a test! This sure is a nice test. Who doesn't love tests?", 10)).toBe(
    "Yr lyi grkd k docd! Drsc cebo sc k xsmo docd. Gry nyocx'd vyfo docdc?"
  );
});

test("CaesarCipher shift 26", () => {
  expect(caesarCipher("Oh boy what a test! This sure is a nice test. Who doesn't love tests?", 26)).toBe(
    "Oh boy what a test! This sure is a nice test. Who doesn't love tests?"
  );
});

test("CaesarCipher shift -15", () => {
  expect(caesarCipher("Oh boy what a test! This sure is a nice test. Who doesn't love tests?", -15)).toBe(
    "Zs mzj hsle l epde! Estd dfcp td l ytnp epde. Hsz ozpdy'e wzgp epded?"
  );
});

test("CaesarCipher shift -26", () => {
  expect(caesarCipher("Oh boy what a test! This sure is a nice test. Who doesn't love tests?", -26)).toBe(
    "Oh boy what a test! This sure is a nice test. Who doesn't love tests?"
  );
});

test("AnalyzeArray [1,2,3,4,5]", () => {
  const analyzeObj = analyzeArr([1, 2, 3, 4, 5]);
  expect(analyzeObj.avg).toBe(3);
  expect(analyzeObj.min).toBe(1);
  expect(analyzeObj.max).toBe(5);
  expect(analyzeObj.length).toBe(5);
});

test("AnalyzeArray [0,500,1000000,-1.5,.987]", () => {
  const analyzeObj = analyzeArr([0, -0, 42, 500, 1000000, -1.5, 0.987]);
  expect(analyzeObj.avg).toBeCloseTo(142934.4981);
  expect(analyzeObj.min).toBe(-1.5);
  expect(analyzeObj.max).toBe(1000000);
  expect(analyzeObj.length).toBe(7);
});

test("AnalyzeArray [3.14,-9.81, 2.2e-5, 1.5e-10, 3.0e-10]", () => {
  const analyzeObj = analyzeArr([3.14, -9.81, 2.2e-5, 1.5e-10, 3.0e-10, 42]);
  expect(analyzeObj.avg).toBeCloseTo(5.888337);
  expect(analyzeObj.min).toBe(-9.81);
  expect(analyzeObj.max).toBe(42);
  expect(analyzeObj.length).toBe(6);
});
