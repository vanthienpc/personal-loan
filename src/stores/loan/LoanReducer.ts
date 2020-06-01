import { handleActions, ReducerMap } from 'redux-actions';
import * as LoanAction from './LoanAction';
import ILoanState from './models/ILoanState';
import { LoanModel } from './models/LoanModel';

const initialState: ILoanState = {
  items: [],
};

const reducerMap: ReducerMap<ILoanState, any> = {
  [LoanAction.LOAN_FETCH_SUCCESS]: (state, { payload }): ILoanState => ({
    ...state,
    items: payload,
  }),
  [LoanAction.LOAN_CREATE_SUCCESS]: (state, { payload }): ILoanState => ({
    ...state,
    items: [...state.items, payload],
  }),
  [LoanAction.LOAN_REPAY_SUCCESS]: (state, { payload }): ILoanState => ({
    ...state,
    items: state.items.map((item: LoanModel) =>
      item.id !== payload.id
        ? item
        : {
            ...item,
            paid: payload.paid,
            repay_history: payload.repay_history,
          },
    ),
  }),
};

export default handleActions(reducerMap, initialState, { prefix: '@@loan' });
