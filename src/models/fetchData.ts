import { TElement } from '@pages/list-company/list-company';
import { createStore, createEvent, createEffect } from 'effector';

type Tdata = {
    data: any
}

export const $data = createStore<TElement[] | []>([]);

export const fetchDataReposFx = createEffect(async () => {
  const url = `https://github.com/kode-frontend/files/raw/main/categories.json`;
  const req = await fetch(url);
  return req.json();
});

export const fetchData = createEvent<any>();
$data.on(fetchDataReposFx.doneData, (_, payload) => payload["category"])


