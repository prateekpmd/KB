import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

const TableForm = ({

  description,
  setDescription,
  serialNumber,
  setSerialNumber,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
  unit,
  setUnit
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const editFunctionality = (item) => {
    setIsEditing(true);
    setList(
      list.filter((lit) => {
        return lit.id !== item.id;
      })
    );
    setDescription(item.description);
    setSerialNumber(item.serialNumber);
    setQuantity(item.quantity);
    setPrice(item.price);
    setAmount(item.amount);
    setUnit(item.unit)
    
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const tableData = {
      id: uuid(),
      serialNumber: serialNumber,
      description: description,
      quantity: quantity,
      price: price,
      amount: amount,
      unit: unit,
    
    };
    if (
      serialNumber &&
      description &&
      quantity &&
      price &&
      unit 

    ) {
      setList([...list, tableData]);
      setSerialNumber("");
      setDescription("");
      setQuantity("");
      setPrice("");
      setAmount("");
      setUnit("");
   
    }
    setIsEditing(false);
  };
  console.log(list);

  

  useEffect(() => {
    const calculation = () => {
      setAmount(quantity * price);
    };
    calculation();
  }, [quantity, price, setAmount]);

  const totalll = total;
  const aamount=amount;

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="lg:text-sm xl:text-sm md:text-sm sm:text-sm border-t-2 border-gray-300 pt-5 "
      >
       
        <div className="md:grid grid-cols-2 gap-10">
          <div className="flex flex-col flex-auto ">
            <label htmlFor="serialNumber">S. No.</label>
            <input
              type="number"
              name="serialNumber"
              id="serialNumber"
              value={serialNumber}
              placeholder="Please Enter Serial Number"
              autoComplete="off"
              required
              onChange={(e) => setSerialNumber(e.target.value)}
            />
          </div>
          <div className="flex flex-col flex-auto">
            <label htmlFor="description">Description</label>
            <input
              required
              type="text"
              name="description"
              id="description"
              value={description}
              placeholder="Please Enter The Product Description"
              autoComplete="off"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="md:grid grid-cols-4 gap-10">
          <div className="flex flex-col">
            <label htmlFor="quantity">Quantity</label>
            <input
              required
              type="number"
              name="quantity"
              id="quantity"
              value={quantity}
              placeholder="Please Enter The Qauntity Value"
              autoComplete="off"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="unit">Unit</label>
            <input
              required
              type="text"
              name="unit"
              id="unit"
              value={unit}
              placeholder="Please Enter The Unit"
              autoComplete="off"
              onChange={(e) => setUnit(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Each Unit Rate (Rs.)</label>
            <input
              required
              type="number"
              name="price"
              id="price"
              value={price}
              placeholder="Please Enter Each Unit Rate (Rs.) "
              autoComplete="off"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Amount</label>
            <p className="font-bold text-lg">
              ₹ {aamount.toLocaleString("en-US")}
            </p>
          </div>
        </div>
        <div className=" flex items-end justify-end  ">
          <button
            className="mt-5  bg-blue-500 text-white font-bold px-8 py-2 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-250"
            type="submit"
          >
            {isEditing ? "Edit & Save Item" : "Add Item"}
          </button>
        </div>
      </form>
      <table
        className="border-collapse border border-slate-500 mb-10 table-auto lg:text-sm md:text-sm my-10"
        width="100%"
      >
        <thead>
          <tr className="bg-gray-200">
            <th className="border">S. No.</th>
            <th className="border">Description</th>
            <th className="border">Qty</th>
            <th className="border">Unit</th>
            <th className="border">Each Unit Rate (Rs.)</th>
            <th className="border">Amount</th>
            <th colspan="2" className="border">
              <span className="text-red-500 text-sm">Actions</span>
            </th>
          </tr>
        </thead>
        {list &&
          list.map((le) => {
            const { amount } = le;
            const val1 = amount;
            const valAmount = val1.toLocaleString("en-US");
            return (
              <tbody>
                <tr key={le.id}>
                  <td className="border" align="center">
                    {le.serialNumber}
                  </td>
                  <td className="border normal-case" align="left">
                    {le.description}
                  </td>
                  <td className="border" align="center">
                    {le.quantity}
                  </td>
                  <td className="border uppercase" align="center">
                    {le.unit}
                  </td>
                  <td className="border" align="center">
                    ₹ {le.price}
                  </td>
                  <td className="border" align="center">
                    ₹ {valAmount}
                  </td>
                  <td
                    className="border  cursor-pointer text-green-500"
                    align="center"
                  >
                    <AiFillEdit onClick={() => editFunctionality(le)} />
                  </td>
                  <td
                    className="border cursor-pointer text-red-500"
                    align="center"
                  >
                    <AiFillDelete
                      onClick={(e) => {
                        setList(
                          list.filter((lit) => {
                            return lit.id !== le.id;
                          })
                        );
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
      <div className="flex items-end justify-end mr-6">
        {setTotal(
          list.reduce((acc, curr) => {
            return acc + curr.amount;
          }, 0)
        )}
        <h1 className="text-gray-800  text-xl">
          <span className="font-bold ">Total: </span>₹{" "}
          {totalll.toLocaleString("en-US")}
        </h1>
      </div>
    </>
  );
};

export default TableForm;
