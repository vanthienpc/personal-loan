import { createSelector } from 'reselect';
import IStore from 'models/IStore';
import * as HelpUtility from 'utilities/HelpUtility';
import { LoanModel } from 'stores/loan/models/LoanModel';

export const getLoanList = (state: IStore): LoanModel[] =>
  HelpUtility.camelizeKeys(state.loan.items);

export const getLoanListWithFormat = createSelector(getLoanList, (loan: LoanModel[]) => {
  return loan.map((item: LoanModel) => ({
    ...item,
    amount: HelpUtility.currencyFormat(item.amount),
    paid: HelpUtility.currencyFormat(item.paid),
    repayAmount: HelpUtility.currencyFormat(
      HelpUtility.amountPaid(Number(item.amount), item.term, 5),
    ),
    key: item.id,
    frequency: `Repay ${HelpUtility.currencyFormat(
      HelpUtility.amountPaid(Number(item.amount), item.term, 5),
    )} SGD ${item.frequency}`,
    createdAt: HelpUtility.formatDate(item.createdAt),
    repayHistory: item.repayHistory.map((item: LoanModel) => ({
      title: `Paid ${HelpUtility.currencyFormat(
        item.repayAmount,
      )} SGD on ${HelpUtility.formatDateTime(item.createdAt)}`,
    })),
  }));
});
