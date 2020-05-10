import { createActions } from 'redux-actions';

export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

export const { modalOpen, modalClose } = createActions(MODAL_OPEN, MODAL_CLOSE, {
  prefix: '@@modal',
});
