import { createActions } from 'redux-actions';

export const TOGGLE_LOADING = 'TOGGLE_LOADING';

export const { toggleLoading } = createActions(TOGGLE_LOADING, { prefix: '@@loading' });
