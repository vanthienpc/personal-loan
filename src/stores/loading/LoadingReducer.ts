import { handleActions, ReducerMap } from 'redux-actions';
import * as LoadingAction from './LoadingAction';
import { ILoadingState } from './models/ILoadingState';

const initialState: ILoadingState = false;

const reducerMap: ReducerMap<ILoadingState, ILoadingState> = {
  [LoadingAction.TOGGLE_LOADING]: (state, { payload }): ILoadingState => payload,
};

export default handleActions(reducerMap, initialState, { prefix: '@@loading' });
