import { IUser } from "@/models/IUser";

export interface IGallery {
  title: string;
  user: IUser;
  photoUrl: string;
  createdAt: Date;
}
