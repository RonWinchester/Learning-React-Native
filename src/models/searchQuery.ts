import { createStore, createEvent } from 'effector';

export const $query = createStore<string>('');

export const serachQuery = createEvent<string>();

$query.on(serachQuery, (_,payload)=>payload)