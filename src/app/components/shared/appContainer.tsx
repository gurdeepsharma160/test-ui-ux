import React from "react";

const AppContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;

}) => {
  return (
    <div className="flex justify-center">
      <div className={`w-full max-w-[1400px] px-10 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default AppContainer;
