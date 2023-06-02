const fs = require("fs");
const [box, cubeType, ...cubes] = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [boxLength, boxWidth, boxHeight] = box.split(" ").map(Number);
const boxVolume = boxLength * boxWidth * boxHeight;

const [count, cubeVolume] = cubes
  .map((cube) => cube.split(" ").map(Number))
  .reverse()
  .reduce(
    ([count, usedCubeVolume], [i, n]) => {
      const cubeLength = 2 ** i;

      if (boxLength < cubeLength || boxWidth < cubeLength || boxHeight < cubeLength) return [count, usedCubeVolume];

      const maxUsed =
        Math.floor(boxLength / cubeLength) * Math.floor(boxWidth / cubeLength) * Math.floor(boxHeight / cubeLength) -
        usedCubeVolume;
      const used = Math.min(maxUsed, n);

      return [count + used, (usedCubeVolume + used) * 8];
    },
    [0, 0]
  );

console.log(boxVolume === cubeVolume / 8 ? count : -1);
