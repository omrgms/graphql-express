const { buildSchema } = require('graphql');

// GraphQL şeması
const schema = buildSchema(`
  type Query {
    messages: [String]
  }
`);

// Root resolver
const root = {
    messages: () =>
        ['Ömer', 'Berna', 'Merve'],
};

module.exports = { schema, root };