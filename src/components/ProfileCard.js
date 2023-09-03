import React from "react";
import CustomButton from "./common/CustomButton";
import { applyTypes } from "../constants";
import { getCurrencyFormat } from "../utils";
import EditDeleteMenu from "./EditDeleteMenu";

export default function ProfileCard({ profileData }) {
  const {
    jobTitle,
    companyName,
    industry,
    location,
    remoteType,
    experience,
    salary,
    totalEmployee,
    applyType,
    avatar,
  } = profileData;
  return (
    <div className="bg-card lg:w-[46%] w-[100%] border-[1px] rounded-4xl border-cardborder md:m-lg m-md p-md flex flex-row gap-sm">
      <div className="w-exl">
        <img src={avatar} alt="applicant avatar" />
      </div>
      <div className="text-font w-[100%]">
        <div className="pb-lg ">
          <div className="flex justify-between">
            <div className="text-lg">{jobTitle}</div>
            <EditDeleteMenu profileData={profileData} />
          </div>

          <div>
            {companyName && <span>{companyName}</span>}
            {companyName && industry && <span>-</span>}
            {industry && <span>{industry}</span>}
          </div>
          <div className="!text-placholder">
            {location && <span>{location}</span>}
            {remoteType && <span>{remoteType}</span>}
          </div>
        </div>
        <div className="pb-sm">Part-Time (9.00 am - 5.00pm IST)</div>
        {experience?.minimum && experience?.maximum && (
          <div className="pb-sm">
            Experience ({experience?.minimum} - {experience?.maximum} years)
          </div>
        )}
        {salary?.minimum && salary?.maximum && (
          <div className="pb-sm">
            INR (&#8377;) {getCurrencyFormat(salary?.minimum)} -{" "}
            {getCurrencyFormat(salary?.maximum)} / Month
          </div>
        )}
        {totalEmployee && (
          <div className="pb-lg">
            {totalEmployee?.toLocaleString("en-IN")} employees
          </div>
        )}
        {applyTypes[applyType]?.type && (
          <div>
            <CustomButton
              buttonName={applyTypes[applyType]?.name}
              buttonType={applyTypes[applyType]?.type}
              handleButtonClick={() => {
                console.log("clicked");
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
