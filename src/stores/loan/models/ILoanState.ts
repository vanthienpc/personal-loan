import { LoanModel } from './LoanModel';

export default interface ILoanState {
  readonly items: LoanModel[];
  readonly error?: boolean;
}
