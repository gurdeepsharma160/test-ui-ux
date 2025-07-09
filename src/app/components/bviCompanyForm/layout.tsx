import { Form, Input } from "antd";
import React from "react";
import AppContainer from "../shared/appContainer";

type FormLayoutProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const FormLayout = ({ children, description, title }: FormLayoutProps) => {
  return (
    <div className="text-white ">
      <hr className="text-[#5B42F3] my-16 border-[1.5px]" />
      <h2 className="text-4xl text-center  font-[family-name:var(--font-nunito)] font-bold">
        {title}
      </h2>
      <AppContainer className="!max-w-[890px] ">
        <div className="font-[family-name:var(--font-poppins)] text-base mt-4 text-center w-full">
          {description}
        </div>
        <div className="flex justify-center mt-12">
          <div className="w-full"> {children}</div>
        </div>
      </AppContainer>
    </div>
  );
};

export default FormLayout;
