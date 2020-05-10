export type LoanModel = {
  id: number;
  amount: number | string;
  paid: number | string;
  term: string | number;
  frequency: string;
  status: string;
  repayAmount: number | string;
  repayHistory: any[];
  createdAt: Date | string;
};
