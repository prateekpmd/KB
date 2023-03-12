import React, { useEffect } from 'react';


const Tax = ({ total, sgsttax, setSGstTax,local,setLocal }) => {
   

    

    useEffect(() => {
      const taxGenerator = () => {
        const tax = total * (sgsttax / 100);
        return tax;
      };
      setLocal(taxGenerator());
    }, [total, sgsttax,setLocal]);
    const Stax = local;
    

  return (
    <div className="mb-7 flex flex-col lg:text-sm xl:text-sm md:text-sm sm:text-sm">
      <label htmlFor="sgsttax">SGST(%)</label>
      <input
        type="number"
        name="sgsttax"
        id="sgsttax"
        value={sgsttax}
        placeholder="Please Enter The Qauntity"
        autoComplete="off"
        onChange={(e) => setSGstTax(e.target.value)}
      />
      <span className="text-gray-800 lg:text-sm xl:text-sm md:text-sm sm:text-sm">
        <span className="font-bold ">SGST({sgsttax}%): </span>₹ {Stax.toLocaleString("en-US")}
      </span>
    </div>
  );
};

export default Tax;