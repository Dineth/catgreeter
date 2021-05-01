const blend = require("@mapbox/blend");

// A simple wrapper to blend two or more images and create grid buffer
const combineImages = (imageBlocks, gridWidth, gridHeight, outputFormat) => {
  return new Promise((resolve, reject) => {
    blend(
      imageBlocks,
      {
        width: gridWidth,
        height: gridHeight,
        format: outputFormat,
      },
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      }
    );
  });
};

module.exports = combineImages;
