import React from "react";
import CustomInput from "@/components/common/Input";
import { FlexBlock } from "@/components/common/Block";
import CustomButton from "@/components/common/Button";
import { Colors } from "@/styles/colors";

const CreateForm = () => (
  <FlexBlock direction="column" gap="30px">
    <CustomInput variant="file" label="" fileTypes={["jpeg"]} />
    <CustomInput variant="dynamicLabel" label="Title" />
    <FlexBlock direction="column" gap="10px">
      <CustomButton variant="primary" width="100%">
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
  </FlexBlock>
);

export default CreateForm;
