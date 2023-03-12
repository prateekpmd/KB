import React from "react";

const CompanyHeader = () => {
  return (
    <div className="flex flex-col sm:flex-col md:flex-col lg:text-lg xl:text-sm md:text-sm sm:text-sm items-center justify-center mb-5 flex-wrap ">
      <div className="mb-2">
        <h1 className="font-bold text-red-500 uppercase sm:text-sm md:text-5xl tracking-wide  text-5xl ">
          K.B. Enterprises
        </h1>
      </div>
      <div className="mb-4">
        <p className="font-bold text-gray-800 uppercase">
          Authorized Dealer of{" "}
          <span className="text-red-500 uppercase font-bold">"RAYCHEM"</span>{" "}
          RPG PVT. LTD
        </p>
      </div>
      <div>
        <ul className="flex sm:flex-col md:flex-col text-gray-800 items-center lg:text-lg xl:text-sm md:text-sm sm:text-sm justify-center  ">
          <li className="mr-2 uppercase mx-10  ">
            <div className="">
              <span
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "8em",
                }}
                className="upper case flex-wrap "
              >
                A/4 Shankeshwar Nagar, Shiv Vallabh Road, Dahisar(E),
                Mumbai-400068
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex  items-center justify-center 2xl:text-sm lg:text-sm xl:text-sm md:text-sm sm:text-sm justify-center  ">
          <li className="mr-2 uppercase">
            <span className="font-bold uppercase">Tel :</span>
            <span> 2897 5758 /2884 8162</span>
          </li>
          <li className="mr-2 uppercase">
            <span className="font-bold uppercase">Mobile :</span>
            <span>+91 9820239532</span>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center flex-wrap lg:text-sm xl:text-sm md:text-sm sm:text-sm justify-center  ">
          <li className="mr-2 ">
            <span className="font-bold uppercase">Email :</span>
            <span>
              {" "}
              bdyadavelectricals@yahoo.in / bdyadavelectricals10@gmail.com{" "}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CompanyHeader;
