import React from "react";
import CreateForm from "@/components/forms/Create";
import GalleryViewLayout from "@/components/layouts/Gallery";

export interface CreateProps {
  createGallery: (photo: File, title: string) => void;
  isFetching: boolean;
}

const Create = ({ createGallery, isFetching }: CreateProps): JSX.Element => (
  <GalleryViewLayout title="Create">
    <CreateForm onSubmitHandler={createGallery} isFetching={isFetching} />
  </GalleryViewLayout>
);

export default Create;
