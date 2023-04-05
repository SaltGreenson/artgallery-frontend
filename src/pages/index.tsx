import React from "react";
import CustomInput from "@/components/common/Input";

export default function Home() {
  return (
    <div
      style={{
        margin: "50px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <CustomInput variant="default" label="First name" type="password" />
      <CustomInput variant="default" label="First name" />
      <CustomInput variant="checkbox" label="First name" />
      <CustomInput variant="dynamicLabel" label="First name" />
      <CustomInput variant="search" dimension="small" label="First name" />
      <CustomInput variant="search" dimension="large" label="First name" />
    </div>
  );
}
