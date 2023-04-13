import React, { useCallback } from "react";
import CustomInput from "@/components/common/Input";
import { FlexBlock } from "@/components/common/Block";
import CustomButton from "@/components/common/Button";
import { Colors } from "@/styles/colors";
import { useForm } from "react-hook-form";
import { StyledCreateForm } from "@/components/forms/Create/styles";

interface CreateFormProps {
  onSubmitHandler: (photo: File, title: string) => void;
}

const CreateForm = ({ onSubmitHandler }: CreateFormProps): JSX.Element => {
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
        variant="dynamicLabel"
        label="Title"
        register={register("title", {
          required: {
            value: true,
            message: "Title is required",
          },
          maxLength: {
            value: 30,
            message: "Title length should be less than 30",
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
        <CustomButton variant="primary" type="submit" width="100%">
          CREATE
        </CustomButton>
        <CustomButton
          variant="primary"
          color={Colors.RED}
          bgColor={Colors.LIGHT_RED}
          bgHover={Colors.HOVER_RED}
          width="100%"
        >
          DELETE
        </CustomButton>
      </FlexBlock>
    </StyledCreateForm>
  );
};

export default CreateForm;
