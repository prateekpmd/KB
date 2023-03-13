import React, { useState, useEffect } from "react";

const Tax = ({
  total,
  sgsttax,
  setSGstTax,
  local,
  setLocal,
  cgsttax,
  setCgstTax,
  local1,
  setLocal1,
  igsttax,
  setIgstTax,
  local2,
  setLocal2,
}) => {
  useEffect(() => {
    const taxGenerator = () => {
      const tax = total * (sgsttax / 100);
      return tax;
    };
    setLocal(taxGenerator());
  }, [total, sgsttax, setLocal]);
  useEffect(() => {
    const taxGenerator1 = () => {
      const tax = total * (cgsttax / 100);
      return tax;
    };
    setLocal1(taxGenerator1());
  }, [total, cgsttax, setLocal1]);
  useEffect(() => {
    const taxGenerator3 = () => {
      const tax = total * (igsttax / 100);
      return tax;
    };
    setLocal2(taxGenerator3());
  }, [total, igsttax, setLocal2]);
  const CTax = local1;
  const Stax = local;
  const ITax = local2;

  function yesnoCheck() {
    if (document.getElementById("yesCheck").checked) {
      // document.getElementById("myCode").style.visibility = "visible";
      // document.getElementById("myCode2").style.visibility = "visible";
      // document.getElementById("nono").style.visibility = "none";
      setShow(true);
      
    } else {
      //   document.getElementById("myCode").style.visibility = "hidden";
      //   document.getElementById("myCode2").style.visibility = "hidden";
      //  document.getElementById("nono").style.visibility = "visible";
      setShow(!show);
      
    }
  }

  const [show, setShow] = useState(true);

  return (
    <div className="mb-7 flex flex-col lg:text-sm xl:text-sm md:text-sm mt-4 sm:text-sm">
      <div className="flex justify-center items-center">
        {" "}
        <h1
          className="border mb-4 text-red-500 p-4 border-t-2 font-bold text-xl"
          htmlFor="sgsttaxtoggle"
        >
          T A X
        </h1>
      </div>
      <div>
        <div>
          <input
            type="radio"
            defaultChecked
            name="sgsttaxtoggle"
            id="yesCheck"
            onClick={() => yesnoCheck()}
          />
          <label className="text-md ml-4 cursor-pointer" htmlFor="yesCheck">
            SGST & CGST{" "}
          </label>
        </div>
        <div>
          {" "}
          <input
            type="radio"
            name="sgsttaxtoggle"
            id="noCheck"
            value="No"
            onClick={() => yesnoCheck()}
          />
          <label className="text-md ml-4 cursor-pointer" htmlFor="noCheck">
            IGST
          </label>
        </div>
      </div>

      {show && (
        <div className="grid grid-cols-2 ">
          <div className="mt-4 flex flex-col" id="myCode">
            <label htmlFor="sgsttax">SGST(%)</label>
            <input
              type="number"
              name="sgsttax"
              id="sgsttax"
              value={sgsttax}
              placeholder="Enter SGST Value"
              autoComplete="off"
              onChange={(e) => setSGstTax(e.target.value)}
            />
            <h1 className="text-gray-800 lg:text-sm xl:text-sm md:text-sm sm:text-sm">
              <span className="font-bold ">SGST({sgsttax}%): </span>₹{" "}
              {Stax.toLocaleString("en-US")}
            </h1>
          </div>
          <div className="mt-4 ml-4 flex flex-col" id="myCode2">
            <label htmlFor="cgsttax">CGST(%)</label>
            <input
              type="number"
              name="cgsttax"
              id="cgsttax"
              value={cgsttax}
              placeholder="Enter CGST Value"
              autoComplete="off"
              onChange={(e) => setCgstTax(e.target.value)}
            />
            <h1 className="text-gray-800 lg:text-sm xl:text-sm md:text-sm sm:text-sm">
              <span className="font-bold ">CGST({cgsttax}%): </span>₹{" "}
              {CTax.toLocaleString("en-US")}
            </h1>
          </div>
        </div>
      )}
      {!show && (
        <div
          id="nono"
          className="flex mt-4 flex-col lg:text-sm xl:text-sm md:text-sm sm:text-sm"
        >
          <label htmlFor="igsttax">IGST(%)</label>
          <input
            type="number"
            name="igsttax"
            id="igsttax"
            value={igsttax}
            placeholder="Enter IGST Value"
            autoComplete="off"
            onChange={(e) => setIgstTax(e.target.value)}
          />
          <h1 className="text-gray-800 lg:text-sm xl:text-sm md:text-sm sm:text-sm">
            <span className="font-bold ">IGST({igsttax}%): </span>₹{" "}
            {ITax.toLocaleString("en-US")}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Tax;
