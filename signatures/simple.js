
/*
 * Simple AST structure to match against
 * ex: `angular.module('whatevs').controller( ... )`
 */

module.exports = [{
  "type": "CallExpression",
  "callee": {
    "type": "MemberExpression",
    "object": {
      "ngModule": true
    },
    "property": {
      "type": "Identifier",
      "name": /^(controller|directive|filter|service|factory|decorator|provider)$/
    }
  },
  "arguments": [
    {},
    {
      "type": "FunctionExpression"
    }
  ]
},
{
  "type": "CallExpression",
  "callee": {
    "type": "MemberExpression",
    "object": {
      "ngModule": true
    },
    "property": {
      "type": "Identifier",
      "name": "config"
    }
  },
  "arguments": [
    {
      "type": "FunctionExpression"
    }
  ]
}];
