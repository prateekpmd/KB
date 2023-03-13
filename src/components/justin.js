import React,{useState} from 'react';
import { v4 as uuid } from "uuid";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

const Justin = ({ setNoteQuantifier, noteQuantifier, listall, setListAll }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const termTable = {
      id: uuid(),
      noteQuantifier: noteQuantifier,
    };
    if (noteQuantifier) {
        setListAll([...listall,termTable]);
        setNoteQuantifier("");
    }
      setIsEditingg(false);
      
  };
  const [isEditing, setIsEditingg] = useState(false);
  const editFunctionality = (item) => {
    setIsEditingg(true);
    setListAll(
      listall.filter((lit) => {
        return lit.id !== item.id;
      })
    );
    setNoteQuantifier(item.noteQuantifier);
  }
  console.log(listall);
  return (
    <>
      <form
        onSubmit={submitHandler}
        className="lg:text-sm xl:text-sm md:text-sm sm:text-sm border-t-2 mt-4  mb-8 border-gray-300 pt-5 "
      >
        <div className="flex flex-col flex-auto ">
          <label htmlFor="terms">Terms & Conditions</label>
          <input
            type="text"
            name="terms"
            id="termsr"
            value={noteQuantifier}
            placeholder="Enter Terms and Conditions"
            autoComplete="off"
            required
            onChange={(e) => setNoteQuantifier(e.target.value)}
          />
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
            <th className="border">S. No</th>
            <th className="border">T & C Description</th>

            <th colspan="2" className="border">
              <span className="text-red-500 text-sm">Actions</span>
            </th>
          </tr>
        </thead>
        {listall &&
          listall.map((le) => {
            return (
              <tbody>
                <tr key={le.id}>
                  <td className="border normal-case" align="center">
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
                  </td>
                  <td className="border normal-case" align="center">
                    {le.noteQuantifier}
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
                        setListAll(
                          listall.filter((lit) => {
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
    </>
  );
};

export default Justin;