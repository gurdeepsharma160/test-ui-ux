import { Input, InputProps } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import React from "react";

const AppInput = (props: InputProps) => {
  return (
    <Input
      size="large"
      {...props}
      className={`!h-[55px] !font-[family-name:var(--font-poppins)] !text-xl ${props.className} `}
    />
  );
};

export default AppInput;
