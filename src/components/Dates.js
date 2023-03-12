import React from 'react'

const Dates = ({ invoiceNumber, invoiceDate, dueDate }) => {
  return (
    <article>
      <ul className="flex item-center justify-between mt-5 lg:text-sm xl:text-sm md:text-md sm:text-md ">
        <div>
          <li>
            <span className="font-bold">Invoice Number :</span> {invoiceNumber}
          </li>
          <li>
            <span className="font-bold">Purchase Order :</span> XXXXX872
          </li>
          {/* <li className="bg-gray-100">
          <span className=" font-bold">Invoice Date:</span> {invoiceDate}
        </li> */}
          <li>
            <span className="font-bold"> Date :</span> {dueDate}
          </li>
        </div>
        <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 ml-24 ">
          {/* <li className="bg-gray-100">
          <span className=" font-bold">Invoice Date:</span> {invoiceDate}
        </li> */}
          <li>
            <span className="font-bold"> Order Date : </span> {dueDate}
          </li>
          <li>
            <span className="font-bold">Freight Terms :</span> FOB
          </li>
          <li>
            <span className="font-bold">Payment Terms :</span>
            <span className="text-red-500">
              {" "}
              30% Advance & 70% When the Products are ready to dispatch
            </span>
          </li>
        </div>
      </ul>
    </article>
  );
};

export default Dates