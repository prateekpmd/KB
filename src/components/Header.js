import React from "react";

const Header = () => {
  const print=()=>{
    window.print();
  }
  return (
    <header className="flex items-end justify-end mb-5 ">
      <div>
        <ul className="flex items-center justify-between flex-wrap ">
          <li>
            <button
              onClick={print}
              className="bg-gray-500 text-white font-bold px-8 py-2 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-250"
            >
              Print
            </button>
          </li>
          <li className="mx-2">
            <button className="bg-blue-500 text-white font-bold px-8 py-2 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-250">
              Download
            </button>
          </li>
          <li>
            <button className="bg-green-500 text-white font-bold px-8 py-2 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-250">
              {" "}
              Send
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
