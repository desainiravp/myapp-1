module.exports = {
    meta: {
      type: "suggestion",
      docs: {
        description: "enforce camelCase for variables, method parameters, and class properties",
        category: "Stylistic Issues",
        recommended: false,
      },
      schema: [], // no options
      messages: {
        camelCase: "Identifier '{{ name }}' should be in camelCase."
      }
    },
    create: function (context) {
      function isCamelCase(name) {
        return /^[a-z][a-zA-Z0-9]*$/.test(name);
      }
  
      return {
        VariableDeclarator(node) {
          const name = node.id.name;
          if (!isCamelCase(name)) {
            context.report({
              node: node.id,
              messageId: "camelCase",
              data: { name }
            });
          }
        },
        FunctionDeclaration(node) {
          node.params.forEach(param => {
            const name = param.name;
            if (!isCamelCase(name)) {
              context.report({
                node: param,
                messageId: "camelCase",
                data: { name }
              });
            }
          });
        },
        FunctionExpression(node) {
          node.params.forEach(param => {
            const name = param.name;
            if (!isCamelCase(name)) {
              context.report({
                node: param,
                messageId: "camelCase",
                data: { name }
              });
            }
          });
        },
        ArrowFunctionExpression(node) {
          node.params.forEach(param => {
            const name = param.name;
            if (!isCamelCase(name)) {
              context.report({
                node: param,
                messageId: "camelCase",
                data: { name }
              });
            }
          });
        },
        PropertyDefinition(node) {
          const name = node.key.name;
          if (!isCamelCase(name)) {
            context.report({
              node: node.key,
              messageId: "camelCase",
              data: { name }
            });
          }
        },
        ClassProperty(node) {
          const name = node.key.name;
          if (!isCamelCase(name)) {
            context.report({
              node: node.key,
              messageId: "camelCase",
              data: { name }
            });
          }
        },
        MethodDefinition(node) {
          const name = node.key.name;
          if (!isCamelCase(name)) {
            context.report({
              node: node.key,
              messageId: "camelCase",
              data: { name }
            });
          }
        }
      };
    }
  };
  