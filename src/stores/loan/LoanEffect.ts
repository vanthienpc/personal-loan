import { AxiosResponse } from 'axios';
import environment from 'environment';
import HttpUtility from 'utilities/HttpUtility';
import HttpErrorResponseModel from 'models/HttpErrorResponseModel';
import { LoanModel } from './models/LoanModel';

export const loanFetchRequest = async (): Promise<LoanModel[] | HttpErrorResponseModel> => {
  const endpoint: string = `${environment.api.loan}`;
  const response: AxiosResponse | HttpErrorResponseModel = await HttpUtility.get(endpoint);

  if (response instanceof HttpErrorResponseModel) {
    return response;
  }

  return response.data;
};

export const loanCreateRequest = async (data: any): Promise<LoanModel | HttpErrorResponseModel> => {
  const endpoint: string = `${environment.api.loan}`;
  const response: AxiosResponse | HttpErrorResponseModel = await HttpUtility.post(endpoint, data);

  if (response instanceof HttpErrorResponseModel) {
    return response;
  }

  return response.data;
};

export const loanRepayRequest = async (data: any): Promise<LoanModel | HttpErrorResponseModel> => {
  const endpoint: string = `${environment.api.loan}/${data.id}`;
  const response: AxiosResponse | HttpErrorResponseModel = await HttpUtility.put(endpoint, data);

  if (response instanceof HttpErrorResponseModel) {
    return response;
  }

  return response.data;
};
