const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { schema, root } = require('./schema');

const app = express();
const port = 4000;

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(port, () => console.log(`Server is running at http://localhost:${port}/graphql`));