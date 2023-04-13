import React, { useCallback } from "react";
import CreateForm from "@/components/forms/Create";
import GalleryViewLayout from "@/components/layouts/Gallery";
import useActions from "@/utils/hooks/useActions";
import { useSelector } from "react-redux";
import { getIsFetchingApp } from "@/selectors/userSelectors";
import Preloader from "@/components/common/Preloader";

const Create = () => {
  const { createGallery } = useActions();
  const isFetching = useSelector(getIsFetchingApp);

  const handleSubmit = useCallback(
    (photo: File, title: string) => {
      console.log(photo);
      console.log(title);
      createGallery(photo, title);
    },
    [createGallery]
  );

  return (
    <GalleryViewLayout title="Create">
      {isFetching ? (
        <Preloader variant="default" />
      ) : (
        <CreateForm onSubmitHandler={handleSubmit} />
      )}
    </GalleryViewLayout>
  );
};

export default Create;
