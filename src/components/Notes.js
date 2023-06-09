import React from "react";

const Notes = ({ clientName, notesl, salutation }) => {
  return (
    <section className="my-4 lg:text-sm xl:text-sm md:text-sm sm:text-sm flex flex-col  lg:max-w-4xl ">
      <div className="flex justify-center items-center ">
        <p className=" flex justify-center items-center ml-10  sm:mx-auto  sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto">
          <h2 className=" text-center font-bold md:text-md lg:text-md xl:text-md text-md uppercase">
            Subject :
          </h2>{" "}
          <span className="ml-2"> {notesl}. </span>
        </p>
      </div>

      <div className="flex flex-col justify-left items-left">
        <p className="mt-4  mb-1">Dear {salutation},</p>
        <p className=" ml-16 mb-1">
          We are pleased to quote you our most resonable rate for the following :
        </p>
      </div>
      {/* 
      <p className="lg:max-w-3xl ml-10"> {notes}</p>
      <div className="flex flex-col justify-left items-left">
        <p className="mt-4 mb-3 ml-10">Thanks & Regards</p>
        <p className="mt-4 mb-3 ml-10">B.D Yadav</p> */}
      {/* </div> */}
    </section>
  );
};

export default Notes;
