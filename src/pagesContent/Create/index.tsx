import React, { useCallback } from "react";
import CreateForm from "@/components/forms/Create";
import GalleryViewLayout from "@/components/layouts/Gallery";
import { useRouter } from "next/router";

export interface DynamicCreateProps {
  createGallery: (photo: File, title: string, callback: () => void) => void;
  isFetching: boolean;
}

const Create = ({
  createGallery,
  isFetching,
}: DynamicCreateProps): JSX.Element => {
  const router = useRouter();

  const onSubmitHandler = useCallback(
    (photo: File, title: string) => {
      createGallery(photo, title, () => {
        void router.push("/own-arts");
      });
    },
    [createGallery]
  );

  return (
    <GalleryViewLayout title="Create">
      <CreateForm onSubmitHandler={onSubmitHandler} isFetching={isFetching} />
    </GalleryViewLayout>
  );
};

export default Create;
