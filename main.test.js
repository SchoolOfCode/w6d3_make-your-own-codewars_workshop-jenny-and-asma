import catDemands from "./main.js";

//👉 Write your tests below here:

describe("The catDemands function", () => {
  it(
    `Should take 10:00 and return: "Feed me, you can see I'm hungry. My bowl is empty, I'm STARVING!"`
  );

  // arrange
  const time = "10.00";
  const expected =
    "Feed me, you can see I'm hungry. My bowl is empty, I'm STARVING!";

  // act
  const actual = catDemands(time);

  // assert
  expect(actual).toBe(expected);
});
