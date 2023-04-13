import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { UseFormRegisterReturn } from "react-hook-form";
import {
  StyledInputDropFileContainer,
  StyledInputDropFileIcon,
  StyledInputDropFileSelectedImage,
  StyledInputDropFileSelectedImageContainer,
  StyledInputFileContainer,
} from "./styles";
import Paragraph from "@/components/common/Paragraph";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Colors } from "@/styles/colors";
import { withLabels } from "@/utils/hocs";

export interface IInputFileProps {
  error?: string;
  hoverTitle?: string;
  maxSize?: number;
  minSize?: number;
  name?: string;
  required?: boolean;
  fileTypes?: string[];
  register?: UseFormRegisterReturn<string>;
  onTypeError?: (err: Error) => void;
  onSizeError?: (file: File) => void;
  onDrop?: (file: File) => void;
  onChangeFile?: (file: File) => void;
  onSelect?: (file: File) => void;
}

const InputFile = ({
  fileTypes,
  register,
  onChangeFile,
  ...props
}: IInputFileProps): JSX.Element => {
  const [previewUrl, setPreviewUrl] = useState("");
  const handleChange = (file: File) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setPreviewUrl(reader.result as string);
    });
    if (file) {
      reader.readAsDataURL(file);
    }
    onChangeFile?.(file);
  };

  return (
    <StyledInputFileContainer>
      <FileUploader
        handleChange={handleChange}
        types={fileTypes}
        dropMessageStyle={{
          borderRadius: "23px",
          backgroundColor: Colors.PURPLE,
          color: Colors.WHITE,
          fontFamily: "Gotham Pro Medium",
          fontWeight: 700,
          border: "4px dashed ${Colors.PURPLE}",
        }}
        {...register}
        {...props}
      >
        <StyledInputDropFileContainer>
          <StyledInputDropFileSelectedImageContainer>
            <StyledInputDropFileSelectedImage src={previewUrl} />
          </StyledInputDropFileSelectedImageContainer>
          <StyledInputDropFileIcon>
            <AiOutlinePlusCircle fontSize="30px" color={Colors.PURPLE} />
            <Paragraph color={Colors.PURPLE} bold>
              Select {fileTypes?.join(", ")} file
            </Paragraph>
          </StyledInputDropFileIcon>
        </StyledInputDropFileContainer>
      </FileUploader>
    </StyledInputFileContainer>
  );
};

export default withLabels(InputFile);
