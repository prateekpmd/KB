import React, { useEffect} from "react";

const Tax1 = ({ total, cgsttax, setCgstTax, local1, setLocal1 }) => {
  useEffect(() => {
    const taxGenerator1 = () => {
      const tax = total * (cgsttax / 100);
      return tax;
    };
    setLocal1(taxGenerator1());
  }, [total, cgsttax,setLocal1]);
  const CTax=local1;

  return (
    <div className="flex flex-col lg:text-sm xl:text-sm md:text-sm sm:text-sm">
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
  );
};

export default Tax1;
