import React from "react";
import PointOfContact from "./pointOfContact";
import CompanyInformation from "./companyInformation";
import CountriesOfInterest from "./countriesOfInterest";
import SharesStructure from "./sharesStructure";

const Step1CompanyDetails = () => {
  return (
    <>
      <PointOfContact />
      <CompanyInformation />
      <CountriesOfInterest />
      <SharesStructure />
    </>
  );
};

export default Step1CompanyDetails;
