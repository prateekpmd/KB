import React from 'react'

const MainDetails = ({name,address}) => {
  return (
    <section className=" flex flex-col justify-end items-end lg:text-sm xl:text-sm md:text-sm sm:text-sm mt-7">
      <h2 className=" ml-4 font-bold md:text-xl lg:text-md md:w-1/2 lg:w-1/2 xl:w-1/2  justify-end text-left xl:text-md  uppercase">
        Supplier Name:
      </h2>
      <h2 className=" ml-4 mt-1 font-bold md:text-md lg:text-md md:w-1/2 lg:w-1/2 xl:w-1/2  justify-end text-left xl:text-md uppercase ">
        Prateek Premanand PVT LTD
      </h2>

      <p className="ml-4  justify-end md:w-1/2 lg:w-1/2 xl:w-1/2 text-left items-end normal-case ">
        C/301,Akruti Aneri, Behind SevenHills hospital, Andheri(E),
        Mumbai-400059.
      </p>
      <p className="justify-end md:w-1/2 lg:w-1/2 xl:w-1/2 text-left items-end normal-case ">
        <span className="font-bold">GSTIN:</span> XXXXX78376389XX
      </p>
      <p className="justify-end md:w-1/2 lg:w-1/2 xl:w-1/2 text-left items-end normal-case ">
        <span className="font-bold">MOB:</span> XXXXX783XX
      </p>
      <p className="justify-end md:w-1/2 lg:w-1/2 xl:w-1/2 text-left items-end normal-case ">
        <span className="font-bold">EMAIL:</span> XXXXX@XXX.COM
      </p>
    </section>
  );
}

export default MainDetails