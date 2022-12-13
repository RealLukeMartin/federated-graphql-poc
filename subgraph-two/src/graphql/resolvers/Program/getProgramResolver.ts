import { Program } from '../../../generated/graphql';

export async function getProgramResolver() {
  return {
    _id: '3',
    name: 'GRP',
    type: 'Rain',
  } as Program;
}
