import React from "react";

const TermsAndCondition = ({ noteToggle, setNoteToggle }) => {
  return (
    <div className="flex justify-between lg:text-sm md:text-sm mt-4">
      <div className="">
        {noteToggle ? (
          <div className="lg:text-sm md:text-sm">
            <div className="font-bold text-md"> Note:</div>
            <span>{noteToggle}</span>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="  flex flex-col items-end justify-end mt-2">
        <h3 className=" text-md mb-1">Thanking You, </h3>
        <h1 className=" text-md mb-1">Yours Faithfully, </h1>
        <h1 className=" text-md mb-1">From K.B. Enterprices </h1>
        <h1 className="font-bold text-md mt-20">Kuldeep Yadav </h1>
      </div>
    </div>
  );
};

export default TermsAndCondition;
