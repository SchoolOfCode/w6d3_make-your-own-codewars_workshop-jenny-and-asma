import catDemands from "./main.js";
const catDemandsByTime = [
  [10, `Feed me, you can see I'm hungry. My bowl is empty, I'm STARVING!`],
  [
    11,
    `It's been a while since I ate, this litter tray is also starting to pong a bit.`,
  ],
  [12, `Leave me alone, I'm taking nap!`],
  [13, `Is that a chicken sandwich.`],
  [14, `I'd like a belly rub... no wait, don't touch me.`],
  [15, `Get off your phone and pay attention to me.`],
  [16, `Here I've brought you this dead thing.`],
  [17, `Get your offspring away from me!`],
  [
    18,
    `Hello! I'm very pleased to see you, allow me to give you a front row view of my bum.`,
  ],
  [
    19,
    `I have a bet on how long it will take you to find the pee I did in your room.`,
  ],
  [3, `I see dead people...it's time to play.`],
];

//👉 Write your tests below here:

describe(
  "The catDemands function",
  () => {
    it.each(catDemandsByTime)(`Should take %i and return: %s`, (hour, string) =>
      expect(catDemands(hour)).toBe(string)
    );
    // arrange
    const time = 27;
    const expected = "Your cat is sleeping. Leave them alone.";
    // act
    const actual = catDemands(time);
    // assert
    expect(actual).toBe(expected);
  },
  () => {
    it.each(catDemandsByTime)(`Should take %i and return: %s`, (hour, string) =>
      expect(catDemands(hour)).toBe(string)
    );
    // arrange
    const time = 3;
    const expected = `I see dead people...it's time to play.`;
    // act
    const actual = catDemands(time);
    // assert
    expect(actual).toBe(expected);
  }
);
