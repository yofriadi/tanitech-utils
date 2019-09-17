const { snakeCase } = require('lodash');

function snakeCaseObj(obj) {
  return Object.keys(obj).reduce(
    (acc, name) => ({
      ...acc,
      [snakeCase(name)]: obj[name],
    }),
    {},
  );
}

module.exports = snakeCaseObj;
