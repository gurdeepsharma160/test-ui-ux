"use client";

import { useState } from "react";
import ProgressSteps from "./components/bviCompanyForm/progressSteps";
import AppContainer from "./components/shared/appContainer";
import Step1CompanyDetails from "./components/bviCompanyForm/step1CompanyDetails";
import { Button, Form } from "antd";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import { useForm } from "antd/es/form/Form";

export default function Home() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [form] = useForm();

  return (
    <div className="bg-[#0D1124] min-h-screen py-14 !text-white">
      <AppContainer>
        <h1 className="text-6xl text-center  font-extrabold  font-geist font-[family-name:var(--font-nunito)]">
          Time to start your BVI company!
        </h1>
        <p className=" mt-5 text-2xl leading-[33px] text-center  text-[#A7A5AC] font-[family-name:var(--font-poppins)] ">
          All questions below must be answered. Take your time, and if you
          <br /> need to take a break, the form will save automatically and you
          can
          <br /> continue later. Good luck!
        </p>

        <ProgressSteps currentStep={activeStep} />
        <Form
          form={form}
          onFinish={() => {
            setActiveStep(2);
          }}
        >
          {activeStep === 1 && <Step1CompanyDetails />}
          {activeStep === 2 && (
            <p className="text-center text-3xl mt-6 text-white py-10 pb-20">
              Coming soon.......
            </p>
          )}

          <div className="flex mt-10 justify-center gap-x-18">
            <Button
              disabled={activeStep === 1}
              size="large"
              className="!h-[55px] w-[140px]  !text-xl !rounded-md"
              icon={<LuMoveLeft />}
              onClick={() => {
                form.resetFields();
                setActiveStep(activeStep - 1);
              }}
            >
              BACK
            </Button>

            <Button
              disabled={activeStep > 1}
              htmlType="submit"
              size="large"
              type="primary"
              className="!h-[55px] w-[140px]  !text-xl !rounded-md"
              icon={<LuMoveRight />}
            >
              NEXT
            </Button>
          </div>
          <div className="flex justify-center mt-10">
            {" "}
            <Button
              disabled={activeStep >= 1}
              className=" flex !h-[70px] w-[350px] gap-y-0 leading-2 justify-center  flex-col"
            >
              <div>I know the form autosaved but, I wish to</div>
              <div>
                <span className="font-bold text-xl">SAVE & EXIT </span>anyway{" "}
                {":)"}
              </div>
            </Button>
          </div>
        </Form>
      </AppContainer>
    </div>
  );
}
