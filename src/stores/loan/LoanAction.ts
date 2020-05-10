import { createActions } from 'redux-actions';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import IStore from 'models/IStore';
import * as LoanEffect from './LoanEffect';
import { toggleLoading } from '../loading/LoadingAction';

export const LOAN_FETCH_REQUEST = 'LOAN_FETCH_REQUEST';
export const LOAN_FETCH_SUCCESS = 'LOAN_FETCH_SUCCESS';
export const LOAN_FETCH_FAILURE = 'LOAN_FETCH_FAILURE';

export const LOAN_CREATE_REQUEST = 'LOAN_CREATE_REQUEST';
export const LOAN_CREATE_SUCCESS = 'LOAN_CREATE_SUCCESS';
export const LOAN_CREATE_FAILURE = 'LOAN_CREATE_FAILURE';

export const LOAN_REPAY_REQUEST = 'LOAN_REPAY_REQUEST';
export const LOAN_REPAY_SUCCESS = 'LOAN_REPAY_SUCCESS';
export const LOAN_REPAY_FAILURE = 'LOAN_REPAY_FAILURE';

const actionCreators = createActions(
  LOAN_FETCH_REQUEST,
  LOAN_FETCH_SUCCESS,
  LOAN_FETCH_FAILURE,
  LOAN_CREATE_REQUEST,
  LOAN_CREATE_SUCCESS,
  LOAN_CREATE_FAILURE,
  LOAN_REPAY_REQUEST,
  LOAN_REPAY_SUCCESS,
  LOAN_REPAY_FAILURE,
  {
    prefix: '@@loan',
  },
);

export const loanFetch = () => async (dispatch: ThunkDispatch<IStore, unknown, Action<string>>) => {
  dispatch(actionCreators.loanFetchRequest());
  dispatch(toggleLoading(true));
  try {
    const response = await LoanEffect.loanFetchRequest();
    dispatch(actionCreators.loanFetchSuccess(response));
    dispatch(toggleLoading(false));
  } catch (error) {
    dispatch(actionCreators.loanFetchFailure(error));
    dispatch(toggleLoading(false));
  }
};

export const loanCreate = (data: any) => async (
  dispatch: ThunkDispatch<IStore, unknown, Action<string>>,
) => {
  dispatch(actionCreators.loanCreateRequest());
  try {
    const response = await LoanEffect.loanCreateRequest(data);
    dispatch(actionCreators.loanCreateSuccess(response));
  } catch (error) {
    dispatch(actionCreators.loanCreateFailure(error));
  }
};

export const loanRepay = (data: any) => async (
  dispatch: ThunkDispatch<IStore, unknown, Action<string>>,
) => {
  dispatch(actionCreators.loanRepayRequest());
  try {
    const response = await LoanEffect.loanRepayRequest(data);
    dispatch(actionCreators.loanRepaySuccess(response));
  } catch (error) {
    dispatch(actionCreators.loanRepayFailure());
  }
};
