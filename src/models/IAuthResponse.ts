import { IAuthUser } from "@/models/IUser";

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IAuthUser;
}
