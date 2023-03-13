import React,{useEffect} from 'react'

const Tax3 = ({ total, igsttax, setIgstTax, local2, setLocal2 }) => {
  useEffect(() => {
    const taxGenerator3 = () => {
      const tax = total * (igsttax / 100);
      return tax;
    };
    setLocal2(taxGenerator3());
  }, [total, igsttax, setLocal2]);
  const ITax = local2;
  return (
    <div className="flex flex-col lg:text-sm xl:text-sm md:text-sm sm:text-sm">
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
  );
};

export default Tax3;