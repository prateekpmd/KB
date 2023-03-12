import React from "react";

const Tables = ({
  description,
  serialNumber,
  quantity,
  price,
  amount,
  list,
  total,
  setTotal,
  local,
  local1,
  grand,
}) => {
  const val = grand;
  const val1 = total;
  const sval = local;
  const cval = local1;
  let i = 1;
  // 
  return (
    <div className="pb-4 mt-4">
      <table
        
        className="border-collapse border border-slate-500 mb-4 table-auto lg:text-sm md:text-sm my-1"
        width="100%"
      >
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-6 py-1 text-sm font-semibold tracking-wide text-center">
              S. No.
            </th>
            <th className=" border text-sm font-semibold tracking-wide text-center">
              Description
            </th>
            <th className="border  text-sm font-semibold tracking-wide text-center">
              Qty
            </th>
            <th className="border  text-sm font-semibold tracking-wide text-center">
              Unit
            </th>
            <th className="border  text-sm font-semibold tracking-wide text-center">
              Each Unit Rate (Rs.)
            </th>
            <th className="border  text-sm font-semibold tracking-wide text-center">
              Amount
            </th>
          </tr>
        </thead>
        {list &&
          list.map((l) => {
            console.log(i);
            const { amount, price } = l;
            const eachunitPrice = amount;
            const unitPriceAMOUNT = eachunitPrice.toLocaleString("en-US");

            const singlePrice = price;
            const singlePricePrice = parseInt(
              singlePrice.toLocaleString("en-US")
            );
            return (
              <tbody>
                <tr key={l.id}>
                  <td
                    class="border pt-2 pb-2 text-center text-sm text-gray-700"
                    align="center"
                  >
                    {l.serialNumber}
                  </td>
                  <td
                    class="border pt-2 pb-2 text-center text-sm text-gray-700"
                    align="left"
                  >
                    {l.description}
                  </td>
                  <td
                    class="border pt-2 pb-2 text-center text-sm text-gray-700"
                    align="center"
                  >
                    {l.quantity}
                  </td>
                  <td
                    class="border pt-2 pb-2 text-center text-sm text-gray-700"
                    align="center"
                  >
                    {l.unit}
                  </td>
                  <td
                    class="border pt-2 pb-2 text-center text-sm text-gray-700"
                    align="center"
                  >
                    ₹ {singlePricePrice}
                  </td>
                  <td
                    class="border pt-2 pb-2 text-center text-sm text-gray-700"
                    align="center"
                  >
                    ₹ {unitPriceAMOUNT}
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
      <div className="grid grid-cols-2 mt-10">
        <div>
          <div className="flex flex-col ">
            <h1 className="font-bold text-md mb-1">Terms And Conditions : </h1>
            <ul class=" ml-1 max-w-md space-y-1 lg:text-sm md:text-sm list-inside dark:text-gray-400">
              <li class="flex items-center">
                <svg
                  class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Prices quoted are discounted but Exclusive of GST 18%
              </li>
              <li class="flex items-center">
                <svg
                  class="w-4 h-4 mr-3 text-green-500 dark:text-green-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Delivery with 4-6 weeks after confirmation of order.
              </li>
              <li class="flex items-center">
                <svg
                  class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Payment within 30 days.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-1">
          <div className="flex items-end justify-end  ">
            {setTotal(
              list.reduce((acc, curr) => {
                return acc + curr.amount;
              }, 0)
            )}
            <h1 className="text-gray-800  text-md">
              <span className="font-bold ">
                Total: ₹ {val1.toLocaleString("en-US")}
              </span>
            </h1>
          </div>
          <div className="flex items-end justify-end ">
            <h1 className="text-gray-800  text-sm">
              <span className="font-medium ">
                SGST: ₹ {sval.toLocaleString("en-US")}{" "}
              </span>
            </h1>
          </div>
          <div className="flex items-end justify-end  ">
            <h1 className="text-gray-800  text-sm">
              <span className="font-medium ">
                CGST: ₹ {cval.toLocaleString("en-US")}
              </span>
            </h1>
          </div>
          <div className=" mt-2 flex items-end justify-end ">
            <h1 className=" text-gray-800  text-md">
              <span className=" p-4 font-bold ">
                Grand Total: ₹ {val.toLocaleString("en-US")}{" "}
              </span>{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;
