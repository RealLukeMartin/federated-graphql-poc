import { MutationCreateUserArgs, User } from '../../../generated/graphql';

export async function createUserResolver(
  _: unknown,
  args: MutationCreateUserArgs,
) {
  const { email, activationCode } = args.input;
  const _id = '3';
  return {
    _id,
    email,
    activationCode,
  } as User;
}
