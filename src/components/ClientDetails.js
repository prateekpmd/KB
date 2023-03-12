import React from 'react'

const ClientDetails = ({ clientName, clientAddress, dueDate }) => {
  return (
    // <section className="my-5">
    //   <h2 className="font-bold md:text-xl lg:text-2xl xl:text-3xl text-xl uppercase ">
    //     {clientName},
    //   </h2>
    //   <p className="normal-case sm:w-1/2 md:w-1/2 lg:w-1/2">{clientAddress}.</p>
    // </section>
    <div className="grid grid-cols-2  lg:text-sm xl:text-sm md:text-sm sm:text-sm  border-t-2 border-gray-300  ">
      <section className=" lg:text-sm xl:text-sm md:text-sm sm:text-sm mt-4 text-left">
        <h2 className=" font-bold md:text-md lg:text-md   text-left xl:text-md  uppercase">
          To,
        </h2>
        <h2 className="mt-1 font-bold md:text-md lg:text-md   text-left xl:text-md uppercase ">
          {clientName}
        </h2>

        <p className="justify-end  text-left items-center normal-case ">
          {clientAddress}
        </p>
        {/* <p className="justify-end  text-left items-end normal-case ">
          <span className="font-bold">GSTIN:</span> XXXXX78376389XX
        </p>
        <p className="justify-end text-left items-end normal-case ">
          <span className="font-bold">MOB:</span> XXXXX783XX
        </p>
        <p className="justify-end text-left items-end normal-case ">
          <span className="font-bold">EMAIL:</span> XXXXX@XXX.COM
        </p> */}
      </section>
      <section className="  lg:text-sm xl:text-sm text-md md:text-sm sm:text-sm mt-4 ">
        <p className=" text-right md:text-sm sm:text-sm items-end normal-case ">
          <span className="font-bold">DATE: </span>
          <span>{dueDate}</span>{" "}
        </p>
      </section>
      {/* <section className="text-left lg:text-sm xl:text-sm md:text-sm sm:text-sm mt-7">
        <h2 className=" font-bold md:text-xl lg:text-md    text-left xl:text-md  uppercase">
          Supplier Name :
        </h2>
        <h2 className="mt-1 font-bold md:text-md lg:text-md text-left xl:text-md uppercase ">
          Prateek Premanand PVT LTD
        </h2>

        <p className="justify-end  text-left items-end normal-case ">
          C/301,Akruti Aneri, Behind SevenHills hospital, Andheri(E),
          Mumbai-400059.
        </p>
        <p className="justify-end  text-left items-end normal-case ">
          <span className="font-bold">GSTIN:</span> XXXXX78376389XX
        </p>
        <p className="justify-end  text-left items-end normal-case ">
          <span className="font-bold">MOB:</span> XXXXX783XX
        </p>
        <p className="justify-end  text-left items-end normal-case ">
          <span className="font-bold">EMAIL:</span> XXXXX@XXX.COM
        </p>
      </section>  */}
    </div>
  );
};

export default ClientDetails