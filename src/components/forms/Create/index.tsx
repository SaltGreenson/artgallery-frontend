import React, { FormEvent, useCallback } from "react";
import CustomInput from "@/components/common/Input";
import { FlexBlock } from "@/components/common/Block";
import CustomButton from "@/components/common/Button";
import { Colors } from "@/styles/colors";
import { useForm } from "react-hook-form";
import { StyledCreateForm } from "@/components/forms/Create/styles";
import { IGallery } from "@/models/IGallery";
import { submitBtnTextConfig } from "@/components/forms/Create/config";

interface CreateFormProps {
  onSubmitHandler: (photo: File, title: string) => void;
  onDeleteHandler?: (event: FormEvent) => void;
  defaultValues?: IGallery;
  isFetching: boolean;
}

const CreateForm = ({
  onSubmitHandler,
  onDeleteHandler,
  defaultValues,
  isFetching,
}: CreateFormProps): JSX.Element => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const handleFileChange = useCallback(
    (file: File) => {
      setValue("photo", file);
    },
    [setValue]
  );

  return (
    <FlexBlock direction="column" gap="5px">
      <StyledCreateForm
        onSubmit={handleSubmit((data) =>
          onSubmitHandler(data.photo, data.title)
        )}
      >
        <CustomInput
          imageUrl={defaultValues?.photo.compressedUrl}
          variant="file"
          label=""
          fileTypes={["jpeg"]}
          disabled={!!defaultValues}
          register={register("photo", {
            required: {
              value: !defaultValues,
              message: "Image should be selected",
            },
          })}
          error={errors.photo && String(errors.photo.message)}
          onChangeFile={handleFileChange}
        />
        <CustomInput
          defaultValue={defaultValues?.title}
          variant="dynamicLabel"
          label="Title"
          register={register("title", {
            required: {
              value: true,
              message: "Title is required",
            },
            maxLength: {
              value: 40,
              message: "Title length should be less than 40",
            },
            minLength: {
              value: 3,
              message: "Title length should be more than 3",
            },
          })}
          error={errors.title && String(errors.title.message)}
          required
        />
        <FlexBlock direction="column" gap="10px">
          <CustomButton variant="default" isFetching={isFetching} type="submit">
            {submitBtnTextConfig(defaultValues)}
          </CustomButton>
        </FlexBlock>
      </StyledCreateForm>
      {defaultValues && onDeleteHandler && (
        <form onSubmit={onDeleteHandler}>
          <CustomButton
            variant="default"
            isFetching={isFetching}
            color={Colors.RED}
            bgColor={Colors.LIGHT_RED}
            bgHover={Colors.HOVER_RED}
          >
            DELETE
          </CustomButton>
        </form>
      )}
    </FlexBlock>
  );
};

export default CreateForm;
