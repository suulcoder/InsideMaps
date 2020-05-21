
import { schema } from 'normalizr';


export const map = new schema.Entity(
  'maps', {}, {idAttribute:'_id'}
);
export const maps = new schema.Array(map);


