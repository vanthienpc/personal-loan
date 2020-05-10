import { handleActions, ReducerMap } from 'redux-actions';
import * as ModalAction from './ModalAction';
import IModalState from './models/IModalState';

const initialState: IModalState[] = [];

const reducerMap: ReducerMap<IModalState[], IModalState> = {
  [ModalAction.MODAL_OPEN]: (state, { payload }): IModalState[] => [...state, payload],
  [ModalAction.MODAL_CLOSE]: (state, { payload }): IModalState[] =>
    state.filter((modal) => modal.id !== payload.id),
};

export default handleActions(reducerMap, initialState, { prefix: '@@modal' });
