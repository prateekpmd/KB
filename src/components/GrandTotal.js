import React from "react";

const GrandTotal = ({ total, local, local1,local2, grand, setGrand }) => {
  setGrand(total + local1 + local+ local2);
  const val=grand;
  return (
    <div className="flex items-end justify-end mr-6 ">
      <h2 className="font-bold md:text-md lg:text-md xl:text-md ">
        Grand Total:
        <span> ₹ {val.toLocaleString("en-US")}</span>
      </h2>
    </div>
  );
};

export default GrandTotal;
