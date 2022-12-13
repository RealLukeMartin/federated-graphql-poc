import { QueryResolvers } from '../../../generated/graphql';
import { getProgramResolver } from '../Program';

export const Query: QueryResolvers = {
  getProgram: getProgramResolver,
};
