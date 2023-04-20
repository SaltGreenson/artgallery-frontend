import React from "react";
import CreateForm from "@/components/forms/Create";
import GalleryViewLayout from "@/components/layouts/Gallery";
import { IGallery } from "@/models/IGallery";

export interface EditProps {
  editGallery: (photo: File, title: string) => void;
  defaultValues: IGallery;
}

const Edit = ({ editGallery, defaultValues }: EditProps): JSX.Element => (
  <GalleryViewLayout title="Create">
    <CreateForm onSubmitHandler={editGallery} defaultValues={defaultValues} />
  </GalleryViewLayout>
);

export default Edit;
