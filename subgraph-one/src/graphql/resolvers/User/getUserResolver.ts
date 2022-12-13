import { User } from '../../../generated/graphql';

export async function getUserResolver() {
  const _id = '3';
  const email = 'hello@world.com';
  const activationCode = '0909';
  return {
    _id,
    email,
    activationCode,
  } as User;
}
