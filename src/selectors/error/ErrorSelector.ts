import IStore from 'models/IStore';
import IErrorState from 'stores/error/models/IErrorState';

export const error = (state: IStore): IErrorState => state.error;
