import React, { ChangeEvent, useCallback, useEffect } from "react";

import { useRouter } from "next/router";
import { FieldValues, useForm } from "react-hook-form";
import { usePathname, useSearchParams } from "next/navigation";

import CustomInput from "@/components/common/Input";
import { toggleSortTypeConfig } from "@/components/forms/SearchGallery/config";

import { StyledSearchGalleryForm } from "@/components/forms/SearchGallery/styles";

interface SearchGalleryFormProps {
  searchStringParam?: string;
  isFirstLikedParam?: string;
}

const SearchGalleryForm = ({
  searchStringParam,
  isFirstLikedParam,
}: SearchGalleryFormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setValue("searchString", searchStringParam);
  }, []);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleOnChange = useCallback(
    ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
      const str = createQueryString("isFirstLiked", currentTarget.value);
      void router.push(`${pathname}?${str}`);
    },
    [router, pathname, createQueryString]
  );

  const onSubmitHandler = useCallback(
    (data: FieldValues) => {
      let { searchString } = data;
      if (!searchString) {
        searchString = "";
      }

      const str = createQueryString("searchString", searchString);
      void router.push(`${pathname}?${str}`);
    },
    [pathname, router, createQueryString]
  );

  return (
    <StyledSearchGalleryForm
      onSubmit={handleSubmit((data) => onSubmitHandler(data))}
    >
      <CustomInput
        variant="toggle"
        label="Sort type"
        onChange={handleOnChange}
        elements={toggleSortTypeConfig(isFirstLikedParam)}
        isFlexAlign
        register={register("sortType")}
      />

      <CustomInput
        variant="search"
        label=""
        dimension="small"
        defaultValue={searchStringParam as string}
        register={register("searchString")}
        error={errors.searchString && String(errors.searchString.message)}
      />
    </StyledSearchGalleryForm>
  );
};

export default SearchGalleryForm;
