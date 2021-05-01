const { writeFileSync } = require("fs");
const { join } = require("path");
const getImage = require("./get-image");
const imageUtils = require("./image-utils");

const argv = require("minimist")(process.argv.slice(2));
// get command line args
const {
  greeting = "Hello",
  who = "You",
  width = 400,
  height = 500,
  color = "Pink",
  size = 100,
} = argv;

const FILE_OUT = join(process.cwd(), `/cat-card.jpg`);

/* The entry point of the programme we need a self executing function as we need to use await  with async 
without defining another function.
 */
(async () => {
  const queryString = `width=${width}&height=${height}&color=${color}&s=${size}`;

  // can use looping and promise all if we are combining more that two images without writing the same function call  multiple times
  const image1Buffer1 = await getImage(greeting, queryString);
  const image1Buffer2 = await getImage(who, queryString);

  const combinedImage = await imageUtils.combineImages(
    [
      imageUtils.createImageBlock(0, 0, image1Buffer1), // creates a image block in position x,0 y,0
      imageUtils.createImageBlock(width, 0, image1Buffer2), // creates the second image block in position x,[first image width] y,0
    ],
    2 * width,
    height,
    "jpg"
  ); // horizontally combined hence width doubles and height remains same. If we want we can do this vertically as well

  // We write synchronously as we need to make sure file saves before main programme ends
  writeFileSync(FILE_OUT, combinedImage);
})();
