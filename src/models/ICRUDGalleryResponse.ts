import { IGallery } from "@/models/IGallery";

export interface ICRUDGalleryResponse extends IGallery {
  postsCount: number;
}
