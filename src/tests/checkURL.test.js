import checkURL from "../client/js/checkURL";

test("String 'https://example.com/article' should be true", () => {
	expect(checkURL("https://example.com/article")).toBe(true);
});

test("String 'abc' should be false", () => {
	expect(checkURL("abc")).toBe(false);
});
