export interface IInvestment {
  ticker: string;
  amount: number;
  currentPrice: number;
  averageCost: number;
  result: number;
  totalCost: number;
}

export interface IUserPosition {
  checkingAccountAmount: number;
  positions: IInvestment[];
  consolidated: number;
}
