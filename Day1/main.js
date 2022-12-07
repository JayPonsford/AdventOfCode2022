const readFileSync = require("fs").readFileSync;

const input = readFileSync("./input.txt", { encoding: "utf8" })
  .replace(/\r/g, "") //Fixes issues with \r characters
  .trimEnd() //Remove white space on start/end
  .split("\n\n"); //Split when new line

function part1() {
  const calories = input.map((elf) => {
    const calories = elf.split("\n").map(Number);
    return calories.reduce((previous, current) => previous + current, 0);
  });

  console.log(Math.max(...calories));
}

function part2() {
  const calories = input.map((elf) => {
    const calories = elf.split("\n").map(Number);
    return calories.reduce((previous, current) => previous + current, 0);
  });

  console.log(
    calories
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((previous, current) => previous + current, 0)
  );
}

part1();
part2();
