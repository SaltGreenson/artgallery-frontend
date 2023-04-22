import { IGallery } from "@/models/IGallery";

export interface ICRUDGalleryResponse extends IGallery {
  galleryId: string;
  postsCount: number;
}
