import { RouterState } from 'connected-react-router';
import ILoanState from 'stores/loan/models/ILoanState';
import IModalState from 'stores/modal/models/IModalState';
import { ILoadingState } from 'stores/loading/models/ILoadingState';
import IErrorState from 'stores/error/models/IErrorState';

export default interface IStore {
  readonly router: RouterState;
  readonly error: IErrorState;
  readonly loan: ILoanState;
  readonly modal: IModalState[];
  readonly loading: ILoadingState;
}
