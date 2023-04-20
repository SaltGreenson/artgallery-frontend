import React, { useCallback } from "react";
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
  defaultValues?: IGallery;
  isFetching: boolean;
}

const CreateForm = ({
  onSubmitHandler,
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
    <StyledCreateForm
      onSubmit={handleSubmit((data) => onSubmitHandler(data.photo, data.title))}
    >
      <CustomInput
        imageUrl={defaultValues?.photo.compressedUrl}
        variant="file"
        label=""
        fileTypes={["jpeg"]}
        register={register("photo", {
          required: {
            value: true,
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
        {defaultValues && (
          <CustomButton
            variant="default"
            isFetching={isFetching}
            color={Colors.RED}
            bgColor={Colors.LIGHT_RED}
            bgHover={Colors.HOVER_RED}
          >
            DELETE
          </CustomButton>
        )}
      </FlexBlock>
    </StyledCreateForm>
  );
};

export default CreateForm;
