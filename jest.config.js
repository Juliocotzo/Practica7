module.exports = {
    globals: {
      "ts-jest": {
        skipBabel: true,
      },
    },
    moduleFileExtensions: ["js", "ts"],
    testResultsProcessor: "jest-sonar-reporter",
    testMatch: ["<rootDir>/test/**/*.test.js"],
  };