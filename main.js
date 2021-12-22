/* 
👉 Write your kata here!

Write a function which take the time of day as an argument and returns a string explaining what your cat is demanding.

The database has already been created for you. The demand should default to `Your cat is sleeping. Leave them alone.` if the time entered is not in the database.

10: `Feed me, you can see I'm hungry. My bowl is empty, I'm STARVING!`
11: `It's been a while since I ate, this litter tray is also starting to pong a bit.`
12: `Leave me alone, I'm taking nap!`
13: `Is that a chicken sandwich.`
14: `I'd like a belly rub... no wait, don't touch me.`
15: `Get off your phone and pay attention to me.`
16: `Here I've brought you this dead thing.`
17: `Get your offspring away from me!`
18: `Hello! I'm very pleased to see you, allow me to give you a front row view of my bum.`
19: `I have a bet on how long it will take you to find the pee I did in your room.`
3: `I see dead people...it's time to play.`

*/

//👉 Write the function your CodeWarriors will start with below here:

const catDatabase = {
  10: `Feed me, you can see I'm hungry. My bowl is empty, I'm STARVING!`,
  11: `It's been a while since I ate, this litter tray is also starting to pong a bit.`,
  12: `Leave me alone, I'm taking nap!`,
  13: `Is that a chicken sandwich.`,
  14: `I'd like a belly rub... no wait, don't touch me.`,
  15: `Get off your phone and pay attention to me.`,
  16: `Here I've brought you this dead thing.`,
  17: `Get your offspring away from me!`,
  18: `Hello! I'm very pleased to see you, allow me to give you a front row view of my bum.`,
  19: `I have a bet on how long it will take you to find the pee I did in your room.`,
  3: `I see dead people...it's time to play.`,
};

export default function catDemands(time) {
  if (catDatabase[time]) {
    return catDatabase[time];
  }
}
