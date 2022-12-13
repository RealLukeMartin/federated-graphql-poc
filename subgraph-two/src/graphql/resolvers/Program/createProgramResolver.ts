import { MutationCreateProgramArgs, Program } from '../../../generated/graphql';

export async function createProgramResolver(
  _: unknown,
  args: MutationCreateProgramArgs,
) {
  const { name, type } = args.input;

  const _id = '4';

  return {
    _id,
    name,
    type,
  } as Program;
}
