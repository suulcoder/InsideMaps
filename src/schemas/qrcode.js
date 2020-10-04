import { schema } from 'normalizr';


export const node = new schema.Entity(
  'nodes', {}, {idAttribute:'_id'}
);
export const nodes = new schema.Array(node);


