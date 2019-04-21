module.exports = {
  presets: [
    "@babel/react",
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        },
        modules: false
      }
    ],
    "@babel/typescript"
  ],
  env: {
    test: {
      presets: [["@babel/preset-env"], "@babel/preset-react"]
    }
  }
};
