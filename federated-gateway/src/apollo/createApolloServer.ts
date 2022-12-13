import { readFileSync } from 'fs';

import { ApolloGateway } from '@apollo/gateway';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';

const supergraphSdl = readFileSync('./supergraph.graphql').toString();

const gateway = new ApolloGateway({
  supergraphSdl,
});

export function createApolloServer() {
  return new ApolloServer({
    gateway,
    introspection: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });
}
