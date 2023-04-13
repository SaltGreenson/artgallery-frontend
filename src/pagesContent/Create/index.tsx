import React from "react";
import CreateForm from "@/components/forms/Create";
import GalleryViewLayout from "@/components/layouts/Gallery";

export interface CreateProps {
  createGallery: (photo: File, title: string) => void;
}

const Create = ({ createGallery }: CreateProps): JSX.Element => (
  <GalleryViewLayout title="Create">
    <CreateForm onSubmitHandler={createGallery} />
  </GalleryViewLayout>
);

export default Create;
