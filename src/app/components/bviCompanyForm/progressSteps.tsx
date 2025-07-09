import React from "react";

const ProgressSteps = ({ currentStep = 1 }: { currentStep?: number }) => {
  const progressSteps = [
    { title: "Company details", key: "company_details" },
    { title: "Shareholders", key: "shareholders" },
    { title: "Beneficial owner", key: "beneficial_owner" },
    { title: "Director", key: "director" },
  ];

  return (
    <div>
      <div className="flex my-20 justify-between items-center font-[family-name:var(--font-poppins)] relative">
        {/* Background line - adjust left/right to start/end under circles only */}
        <div
          style={{ borderStyle: "dashed" }}
          className="absolute top-[45px]  border-t-4 border-dashed border-gray-400 z-0  left-[65px] right-[45px] h-1"
        ></div>

        {progressSteps.map((step, index) => {
          const isActive = currentStep === index + 1;
          return (
            <div key={step.key} className="flex flex-col items-center z-10">
              <div className="flex justify-center">
                <div
                  className={`${
                    isActive ? "bg-[#5B42F3]" : "bg-[#525562] text-[#A7A5AC]"
                  } rounded-full h-[90px] w-[90px] text-3xl font-semibold text-center flex items-center justify-center`}
                >
                  0{index + 1}
                </div>
              </div>
              <p className="text-2xl font-medium mt-2 text-center">
                {step.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressSteps;
