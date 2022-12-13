import { MutationResolvers } from '../../../generated/graphql';
import { createUserResolver } from '../User';

export const Mutation: MutationResolvers = {
  createUser: createUserResolver,
};
