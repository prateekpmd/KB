import React, { useState, useRef,useEffect } from "react";
import ClientDetails from "./components/ClientDetails";
// import Dates from "./components/Dates";
// import Header from "./components/Header";
// import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Tables from "./components/Tables";
import Footer from "./components/Footer";
import TableForm from "./components/TableForm";
import Tax from "./components/Tax";
import Tax1 from "./components/Tax1";
import GrandTotal from "./components/GrandTotal";
import CompanyHeader from "./components/CompanyHeader";
// import TermsAndCondition from "./components/TermsAndCondition";
import ReactToPrint from "react-to-print";
// import { jsPDF } from "jspdf";
// import PrintButton from "./components/PrintButton";
// import { BiLastPage } from "react-icons/bi";
// import html2pdf from "html2pdf.js";

const App = () => {
  const [showInvoice, setShowInvoice] = useState(false);
  // const [name, setName] = useState("");
  // const [address, setAddress] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [bankName, setBankName] = useState("");
  // const [bankAccount, setbankAccount] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  // const [invoiceNumber, setInvoiceNumber] = useState("");
  // const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  // const [subject, setSubject] = useState("");
  // const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState("");
  const [list, setList] = useState([]);
  const [notesl,setNotesL]=useState("");

  const [sgsttax, setSGstTax] = useState("");
  const [local, setLocal] = useState("");
  const [cgsttax, setCgstTax] = useState("");
  const [local1, setLocal1] = useState("");
  const [grand, setGrand] = useState("");
  const [unit, setUnit] = useState("");
  const [noteToggle, setNoteToggle] = useState("");
  const componentRef = useRef();
  let currentDate = new Date();

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + "." + minutes + " ";
    return strTime;
  }
  let time = formatAMPM(currentDate);

  console.log(time);
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth() + 1;
  let cYear = currentDate.getFullYear();
  const datee = `KB_ ${clientName}(${cDay}.${cMonth}.${cYear})[${time}]`;

  // const handleDownload = () => {
  //   const hell = componentRef.current;

  //   var doc = new jsPDF({
  //     unit: "px",
  //     format: "a4",
  //   });

  //   doc.html(hell, {
  //     callback: function(doc) {
  //       doc.save(`${datee}.pdf`);
  //     },
  //   });
  // };

  // const woww=document.getElementById('wow');
    useEffect(() => {
      window.onbeforeprint= addPageNumbers;
      function addPageNumbers() {
        var totalPages = Math.ceil(document.body.scrollHeight / 1123); //842px A4 pageheight for 72dpi, 1123px A4 pageheight for 96dpi,
        for (var i = 1; i <= totalPages; i++) {
          var pageNumberDiv = document.createElement("div");
          var pageNumber = document.createTextNode(
            "Page " + i + " of " + totalPages
          );
          pageNumberDiv.style.position = "absolute";
          pageNumberDiv.style.top =
            "calc((" + i + " * (297mm - 0.5px)) - 40px)"; //297mm A4 pageheight; 0,5px unknown needed necessary correction value; additional wanted 40px margin from bottom(own element height included)
          pageNumberDiv.style.height = "16px";
          pageNumberDiv.appendChild(pageNumber);
          document.body.insertBefore(
            pageNumberDiv,
            document.getElementById("main")
          );
          pageNumberDiv.style.center =
            "calc(100% - (" + pageNumberDiv.offsetWidth + "px +20px))";
        }
      }
    }, [showInvoice]);

  return (
    <>
      <main className="m-5  mx-auto p-5  rounded shadow-2xl  sm:max-auto md:mx-auto md:max-w-xl lg:max-w-2xl xl:max-w-4xl">
        {showInvoice ? (
          <>
            <>
              {/* <PrintButton datee={datee} id={"invoice"} /> */}
              <ReactToPrint
                pageStyle="@page { 
                  padding:0 0 10%,
                   margin=5%,
                   } 
                 }"
                trigger={() => (
                  <div className="flex flex-end">
                    <button
                      style={{ marginLeft: "auto" }}
                      className=" text-right  mt-1 bg-red-500 text-white  font-bold px-4 py-2 rounded shadow border-2 hover:text-red-500 hover:bg-transparent  hover:border-red-500  transition-all duration-250"
                    >
                      Print
                    </button>
                  </div>
                )}
                content={() => componentRef.current}
                documentTitle={datee}
              />

              {/* <button
                onClick={() => {
                  html2pdf()
                    .from(document.getElementById("invoice"))
                    .outputPdf()
                    .then((url2) => {
                      console.log(btoa(url2))
                      let base64 = btoa(url2);
                      const blob = base64ToBlob(base64, "application/pdf");
                      const url = URL.createObjectURL(blob);
                      const pdfWindow = window.open("");
                      pdfWindow.document.write(
                        "<iframe width='100%' height='100%' src='" +
                          url +
                          "'></iframe>"
                      );

                      function base64ToBlob(
                        base64,
                        type = "application/pdf"
                      ) {
                        const binStr = atob(base64);
                        const len = binStr.length;
                        const arr = new Uint8Array(len);
                        for (let i = 0; i < len; i++) {
                          arr[i] = binStr.charCodeAt(i);
                        }
                        return new Blob([arr], { type: type });
                      }
                    })}}
                            

                      
              >
                print it
              </button> */}
              <div page="a4" id="invoice" ref={componentRef}>
                <div
                  id="last"
                  className=" sm:max-auto md:mx-auto md:max-w-xl lg:max-w-2xl xl:max-w-4xl p-10"
                >
                  {/* <Header /> */}
                  <CompanyHeader />

                  {/* <Dates
                    invoiceNumber={invoiceNumber}
                  invoiceDate={invoiceDate}
                    dueDate={dueDate}
                  /> */}
                  {/* <MainDetails name={name} address={address} /> */}
                  <ClientDetails
                    dueDate={dueDate}
                    clientName={clientName}
                    clientAddress={clientAddress}
                  />

                  <Notes clientName={clientName} notesl={notesl} />
                  <Tables
                    local={local}
                    local1={local1}
                    description={description}
                    serialNumber={serialNumber}
                    quantity={quantity}
                    price={price}
                    amount={amount}
                    list={list}
                    total={total}
                    setTotal={setTotal}
                    grand={grand}
                  />
                  <div id="hijda"></div>
                  <Footer
                    noteToggle={noteToggle}
                    setNoteToggle={setNoteToggle}
                  ></Footer>
                </div>
              </div>
            </>

            <button
              id="no"
              onClick={() => setShowInvoice(!showInvoice)}
              className="bg-blue-500 text-white font-bold px-8 py-2 mt-5 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-250"
            >
              Back
            </button>
          </>
        ) : (
          <div className="flex flex-col justify-center ">
            <CompanyHeader />
            {/* <article className="sm:grid grid-cols-3 gap-10 ">
              <div className="flex flex-col ">
                <label htmlFor="name"> Enter Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  placeholder="Please Enter Company's Name"
                  autoComplete="off"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="noteToggle"> Enter Note</label>
                <input
                  type="text"
                  name="noteToggle"
                  id="noteToggle"
                  value={noteToggle}
                  placeholder="Please Enter Note"
                  autoComplete="off"
                  onChange={(e) => setNoteToggle(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Enter Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="Please Enter Company's Address"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </article> */}
            <article className="sm:grid grid-cols-2 gap-10 ">
              <div className="flex flex-col ">
                <label htmlFor="clientName">Enter Client's Name</label>
                <input
                  required
                  type="text"
                  name="clientName"
                  id="clientName"
                  value={clientName}
                  placeholder="Please Enter Client's Company Name"
                  autoComplete="off"
                  onChange={(e) => setClientName(e.target.value)}
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="dueDate">Enter Date</label>
                <input
                  type="date"
                  name="dueDate"
                  id="dueDate"
                  value={dueDate}
                  placeholder="Please Enter The Invoice Due Number"
                  autoComplete="off"
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>
            </article>

            <label htmlFor="clientAddress">Enter Client's Address</label>
            <input
              type="text"
              name="clientAddress"
              id="clientAddress"
              value={clientAddress}
              placeholder="Please Enter Client's Company Address"
              autoComplete="off"
              onChange={(e) => setClientAddress(e.target.value)}
            />
            <label htmlFor="notesl">Enter Subject</label>
            <input
              type="text"
              name="notesl"
              id="notesl"
              value={notesl}
              placeholder="Please Enter Client's Company Address"
              autoComplete="off"
              onChange={(e) => setNotesL(e.target.value)}
            />

            {/* <label htmlFor="phone">Enter Phone Number</label>
            <input
              type="number"
              name="phone"
              id="phone"
              value={phone}
              placeholder="Please Enter Company's Address"
              autoComplete="off"
              onChange={(e) => setPhone(e.target.value)}
            />

            <label htmlFor="address">Enter Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={address}
              placeholder="Please Enter Company's Address"
              autoComplete="off"
              onChange={(e) => setAddress(e.target.value)}
            />

            <label htmlFor="bankName">Enter Bank Name</label>
            <input
              type="text"
              name="bankName"
              id="bankName"
              value={bankName}
              placeholder="Please Enter Banks Name"
              autoComplete="off"
              onChange={(e) => setBankName(e.target.value)}
            />

            <label htmlFor="bankAccount">Enter Bank Acc No</label>
            <input
              type="text"
              name="bankAccount"
              id="bankAccount"
              value={bankAccount}
              placeholder="Please Enter Bank Account Number"
              autoComplete="off"
              onChange={(e) => setbankAccount(e.target.value)}
            />

            <label htmlFor="invoiceNumber">Enter Invoice Number</label>
            <input
              type="text"
              name="invoiceNumber"
              id="invoiceNumber"
              value={invoiceNumber}
              placeholder="Please Enter The Invoice Number"
              autoComplete="off"
              onChange={(e) => setInvoiceNumber(e.target.value)}
            /> */}
            {/* <TermsAndCondition
                    noteToggle={noteToggle}
                    setNoteToggle={setNoteToggle}
                  /> */}
            {/* <Footer
               name={name} 
                email={email}
               bankName={bankName}
               bankAccount={bankAccount}
                 /> */}
            {/* <label htmlFor="subject">Enter Subject</label>
            <textarea
              type="text"
              name="subject"
              id="subject"
              value={subject}
              placeholder="Please Enter The Notes"
              autoComplete="off"
              onChange={(e) => setSubject(e.target.value)}
            />

            <label htmlFor="notes">Enter Subject Notes</label>
            <textarea
              type="text"
              cols="30"
              rows="10"
              name="notes"
              id="notes"
              value={notes}
              placeholder="Please Enter The Notes"
              autoComplete="off"
              onChange={(e) => setNotes(e.target.value)}
            /> */}

            <TableForm
              clientAddress={clientAddress}
              setClientAddress={setClientAddress}
              clientName={clientName}
              setClientName={setClientName}
              description={description}
              setDescription={setDescription}
              serialNumber={serialNumber}
              setSerialNumber={setSerialNumber}
              quantity={quantity}
              setQuantity={setQuantity}
              price={price}
              setPrice={setPrice}
              amount={amount}
              setAmount={setAmount}
              list={list}
              setList={setList}
              total={total}
              setTotal={setTotal}
              unit={unit}
              setUnit={setUnit}
            />
            <article className="grid grid-cols-2 gap-10">
              <Tax
                sgsttax={sgsttax}
                setSGstTax={setSGstTax}
                total={total}
                local={local}
                setLocal={setLocal}
              />
              <Tax1
                cgsttax={cgsttax}
                setCgstTax={setCgstTax}
                total={total}
                local1={local1}
                setLocal1={setLocal1}
              />
            </article>

            <GrandTotal
              total={total}
              local={local}
              local1={local1}
              grand={grand}
              setGrand={setGrand}
            />

            <button
              onClick={() => setShowInvoice(!showInvoice)}
              className="mt-5 bg-blue-500 text-white font-bold px-8 py-2 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-250"
            >
              <span>Preview Letter</span>
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default App;
