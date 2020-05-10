import { RouterState } from 'connected-react-router';
import ILoanState from 'stores/loan/models/ILoanState';
import IModalState from 'stores/modal/models/IModalState';
import { ILoadingState } from 'stores/loading/models/ILoadingState';

export default interface IStore {
  readonly router: RouterState;
  readonly loan: ILoanState;
  readonly modal: IModalState[];
  readonly loading: ILoadingState;
}
