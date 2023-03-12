import React from "react";

const Footer = ({
  name,
  email,
  phone,
  bankName,
  bankAccount,
  noteToggle,
  setNoteToggle,
}) => {
  
  return (
    <footer className="footer border bortder-t-2 border-l-0 border-r-0 border-b-0  pt-4 ">
      {/* <ul className="flex flex-wrap items-center lg:text-sm xl:text-sm md:text-sm sm:text-sm justify-center mt-3 ">
        <li className="mr-2 normal-case">
          <span className="font-bold">Your Name: </span> {name}
        </li>
        <li className="mr-2">
          <span className="font-bold">Your email: </span> {email}
        </li>
        <li className="mr-2">
          <span className="font-bold">Your Phone Number: </span>
          {phone}
        </li>
        <li className="mr-2">
          <span className="font-bold">Bank: </span> {bankName}
        </li>
        <li className="mr-2">
          <span className="font-bold">Account Holder: </span> {name}
        </li>
        <li className="mr-2">
          <span className="font-bold">Account Number: </span>
          {bankAccount}
        </li>
      </ul> */}
      <div className="flex justify-between lg:text-sm md:text-sm mt-1">
        <div className="">
          {noteToggle ? (
            <div className="lg:text-sm md:text-sm">
              <div className="font-bold text-md mb-1"> Note:</div>
              <span className="">{noteToggle}.</span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="">
          <div className="   flex flex-col flex-wrap  p-3 items-center justify-center mt-2">
            <h3 className=" text-center text-md mb-1">Thanking You, </h3>
            <h1 className="  text-center text-md mb-1">Yours Faithfully, </h1>
            <h1 className="text-center text-md mb-1">From K.B. Enterprices </h1>
            <h1 className="text-center font-bold text-md mt-3">
              [Kuldeep Yadav]{" "}
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
