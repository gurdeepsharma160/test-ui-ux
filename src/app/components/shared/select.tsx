import { Select, SelectProps } from "antd";
import React from "react";

const AppSelect = (props: SelectProps) => {
  return (
    <Select
      {...props}
      className={`!h-[55px] ${props.className}  !font-[family-name:var(--font-poppins)] !text-xl !text-white`}
    />
  );
};

export default AppSelect;
