import { MutationResolvers } from '../../../generated/graphql';
import { createProgramResolver } from '../Program';

export const Mutation: MutationResolvers = {
  createProgram: createProgramResolver,
};
