import React from "react";
import CreateForm from "@/components/forms/Create";
import GalleryViewLayout from "@/components/layouts/Gallery";
import { IGallery } from "@/models/IGallery";

export interface EditProps {
  editGallery: (photo: File, title: string) => void;
  defaultValues: IGallery;
  isFetching: boolean;
}

const Edit = ({
  editGallery,
  defaultValues,
  isFetching,
}: EditProps): JSX.Element => (
  <GalleryViewLayout title="Create">
    <CreateForm
      onSubmitHandler={editGallery}
      defaultValues={defaultValues}
      isFetching={isFetching}
    />
  </GalleryViewLayout>
);

export default Edit;
