import { IUserPosition } from "../Interfaces/interfaces";
import axiosInstance from "../shared/util/AxiosInstance";

export const getUserPosition = async () => {
  const retorno = axiosInstance.get<IUserPosition>(`/UserPosition/`);
  return retorno;
};
