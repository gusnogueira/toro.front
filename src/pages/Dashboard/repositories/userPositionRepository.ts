import { IUserPosition } from "../../../Interfaces/interfaces";

const userPosition: IUserPosition = {
  checkingAccountAmount: 120,
  positions: [
    {
      ticker: "GOAU4F",
      amount: 1,
      currentPrice: 10,
      averageCost: 10,
      result: 30,
      totalCost: 10
    },
    {
      ticker: "OIBR3F",
      amount: 2,
      currentPrice: 10,
      averageCost: 10,
      result: -10,
      totalCost: 10
    },
    {
      ticker: "JHSF3",
      amount: 3,
      currentPrice: 10,
      averageCost: 10,
      result: 10,
      totalCost: 10
    }
  ],
  consolidated: 120
};
export const getUserPosition = () => {
  return userPosition;
};
