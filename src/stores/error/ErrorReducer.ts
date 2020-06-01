import { AnyAction } from 'redux';
import IErrorState from './models/IErrorState';

const initialState: IErrorState = {};

export default function reducer(state: IErrorState = initialState, action: AnyAction): IErrorState {
  const { type, payload } = action;

  const isRequestFailureType = type.includes('_FAILURE');

  if (isRequestFailureType) {
    return {
      ...state,
      [type]: payload,
    };
  }

  return state;
}
