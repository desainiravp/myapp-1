module.exports = {
    meta: {
      type: "suggestion",
      docs: {
        description: "enforce PascalCase for class names",
        category: "Stylistic Issues",
        recommended: false,
      },
      schema: [], // no options
      messages: {
        pascalCase: "Class name '{{ name }}' should be in PascalCase."
      }
    },
    create: function(context) {
      function isPascalCase(name) {
        return /^[A-Z][a-zA-Z0-9]*$/.test(name);
      }
  
      return {
        ClassDeclaration(node) {
          const name = node.id.name;
          if (!isPascalCase(name)) {
            context.report({
              node: node.id,
              messageId: "pascalCase",
              data: { name }
            });
          }
        }
      };
    }
  };
  