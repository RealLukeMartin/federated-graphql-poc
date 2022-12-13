import { buildSubgraphSchema } from '@apollo/subgraph';

import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

const baseSchema = buildSubgraphSchema({
  resolvers,
  typeDefs,
  // inheritResolversFromInterfaces: true,
});

export const schema = baseSchema;
