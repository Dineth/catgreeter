// A simple wrapper to create images inside combined grid
const createImageBlock = (positionX, positionY, bufferString) => {
  return {
    buffer: Buffer.from(bufferString, "binary"),
    x: positionX,
    y: positionY,
  };
};

module.exports = createImageBlock;
