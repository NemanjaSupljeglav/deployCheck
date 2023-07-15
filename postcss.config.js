module.exports = {
  plugins: {
    "postcss-preset-env": {
      autoprefixer: false,
      stage: 4,
      features: {
        "display-two-values": true
      }
    }
  }
};
