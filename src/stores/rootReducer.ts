import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import IStore from 'models/IStore';
import ErrorReducer from './error/ErrorReducer';
import LoanReducer from './loan/LoanReducer';
import ModalReducer from './modal/ModalReducer';
import LoadingReducer from './loading/LoadingReducer';

const rootReducer = (history: History): Reducer<IStore> =>
  combineReducers({
    router: connectRouter(history) as any,
    error: ErrorReducer,
    loan: LoanReducer,
    modal: ModalReducer,
    loading: LoadingReducer,
  } as ReducersMapObject<IStore>);

export default rootReducer;
