import { ApolloServer } from '@apollo/server';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { resolvers } from '.';
// load schema from graphql files
const typeDefs=loadSchemaSync('./graphql/*.graphql', {
    loaders: [
        new GraphQLFileLoader()
    ]
});

// create apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers
});

// export server
 export {  server}