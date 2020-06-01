import { createActions } from 'redux-actions';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import IStore from 'models/IStore';
import * as LoanEffect from './LoanEffect';
import { toggleLoading } from '../loading/LoadingAction';
import HttpErrorResponseModel from 'models/HttpErrorResponseModel';

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

  const response = await LoanEffect.loanFetchRequest();

  if (response instanceof HttpErrorResponseModel) {
    dispatch(actionCreators.loanFetchFailure(response));
    dispatch(toggleLoading(false));
  } else {
    dispatch(actionCreators.loanFetchSuccess(response));
    dispatch(toggleLoading(false));
  }
};

export const loanCreate = (data: any) => async (
  dispatch: ThunkDispatch<IStore, unknown, Action<string>>,
) => {
  dispatch(actionCreators.loanCreateRequest());

  const response = await LoanEffect.loanCreateRequest(data);

  if (response instanceof HttpErrorResponseModel) {
    dispatch(actionCreators.loanCreateFailure(response));
  } else {
    dispatch(actionCreators.loanCreateSuccess(response));
  }
};

export const loanRepay = (data: any) => async (
  dispatch: ThunkDispatch<IStore, unknown, Action<string>>,
) => {
  dispatch(actionCreators.loanRepayRequest());

  const response = await LoanEffect.loanRepayRequest(data);

  if (response instanceof HttpErrorResponseModel) {
    dispatch(actionCreators.loanRepayFailure(response));
  } else {
    dispatch(actionCreators.loanRepaySuccess(response));
  }
};
