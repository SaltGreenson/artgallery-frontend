import { IUser } from "@/models/IUser";
import { IPhoto } from "@/models/IPhoto";

export interface IGallery {
  _id: string;
  title: string;
  user: IUser;
  photo: IPhoto;
  likes: number;
  dislikes: number;
  createdAt: Date;
}
