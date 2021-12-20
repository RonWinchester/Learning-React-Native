import { createStore, createEvent } from 'effector';

type PopupStore = {
  text: string;
  time?: number;
  backgroundColor?: string
};


export const $popup = createStore<PopupStore>({ text: 'Ошибка'});
export const addPopup = createEvent<PopupStore>();
export const closePopup = createEvent<any>();

$popup.on(addPopup, (_, payload) => payload);

$popup.on(closePopup, (_, payload) => payload);

/* export const $modal = createStore<boolean>(false);
export const handlerPopup = createEvent<boolean>();
$modal.on(handlerPopup, (_, payload) => payload); */



