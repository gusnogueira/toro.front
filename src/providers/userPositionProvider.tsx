import React, { useState, useCallback, useEffect } from "react";
import { IUserPosition } from "../Interfaces/interfaces";
import { getUserPosition } from "../repositories/userPositionRepository";

export const UserPositionContext = React.createContext<IUserPosition>({
  checkingAccountAmount: 0,
  consolidated: 0,
  positions: []
});

const getUserPositionEmpty = (): IUserPosition => {
  return {
    checkingAccountAmount: 0,
    consolidated: 0,
    positions: []
  };
};

export const UserPositionProvider = (props: any) => {
  const [userPosition, setUserPosition] = useState<IUserPosition>(getUserPositionEmpty());

  const getPosition = useCallback(async () => {
    const result = await getUserPosition()
      .then(resposta => resposta && resposta.data)
      .catch(erro => erro);
    setUserPosition(result);
    return result;
  }, []);

  useEffect(() => {
    getPosition();
  }, [getPosition]);

  return (
    <UserPositionContext.Provider value={userPosition}>
      {props.children}
    </UserPositionContext.Provider>
  );
};
