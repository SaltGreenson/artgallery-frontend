import { IGallery } from "@/models/IGallery";

export interface ICreateGalleryResponse extends IGallery {
  postsCount: number;
}
