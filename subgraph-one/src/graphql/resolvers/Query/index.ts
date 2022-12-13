import { QueryResolvers } from '../../../generated/graphql';
import { getUserResolver } from '../User';

export const Query: QueryResolvers = {
  getUser: getUserResolver,
};
