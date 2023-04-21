import React, { FormEvent, useCallback, useState } from "react";
import CreateForm from "@/components/forms/Create";
import GalleryViewLayout from "@/components/layouts/Gallery";
import { IGallery } from "@/models/IGallery";
import { useRouter } from "next/router";

export interface EditProps {
  editGallery: (galleryId: string, title: string, callback: () => void) => void;
  removeGallery: (galleryId: string, callback: () => void) => void;
  defaultValues: IGallery;
  isFetching: boolean;
}

const Edit = ({
  editGallery,
  defaultValues,
  removeGallery,
  isFetching,
}: EditProps): JSX.Element => {
  const router = useRouter();
  const [{ id }] = useState(() => router.query);

  const onSubmitHandler = useCallback(
    (photo: File, title: string) => {
      editGallery(id as string, title, () => {
        void router.push("/own-arts");
      });
    },
    [editGallery]
  );

  const onDeleteHandler = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      removeGallery(id as string, () => {
        void router.push("/own-arts");
      });
    },
    [removeGallery]
  );

  return (
    <GalleryViewLayout title="Edit">
      <CreateForm
        onSubmitHandler={onSubmitHandler}
        onDeleteHandler={onDeleteHandler}
        defaultValues={defaultValues}
        isFetching={isFetching}
      />
    </GalleryViewLayout>
  );
};

export default Edit;
