import { schema } from 'normalizr';


export const marker = new schema.Entity(
  'markers', {}, {idAttribute:'_id'}
);
export const markers = new schema.Array(marker);