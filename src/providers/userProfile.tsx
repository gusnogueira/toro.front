import React from "react";
import { IUserPosition } from "../Interfaces/interfaces";
import { getUserPosition } from "../repositories/userPositionRepository";

export const UserProfileContext = React.createContext<IUserPosition>({
  checkingAccountAmount: 0,
  consolidated: 0,
  positions: []
});

export const UserProfileProvider = (props: any) => {
  const userPosition = getUserPosition();
  return (
    <UserProfileContext.Provider value={userPosition}>{props.children}</UserProfileContext.Provider>
  );
};
