import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const pxToMm = (px) => {
  return Math.floor(px / document.getElementById("myMm").offsetHeight);
};

const mmToPx = (mm) => {
  return document.getElementById("myMm").offsetHeight * mm;
};

const range = (start, end) => {
  return Array(end - start)
    .join(0)
    .split(0)
    .map(function(val, id) {
      return id + start;
    });
};

const PrintButton = ({ id, datee }) => (
  <button className="">
    {/*
    Getting pixel height in milimeters:
    https://stackoverflow.com/questions/7650413/pixel-to-mm-equation/27111621#27111621
  */}
    <div id="myMm" style={{ height: "1mm" }} />
    <div
      className="   bg-blue-500 text-white font-bold px-8 py-2 rounded shadow
    border-2 border-blue-500 hover:bg-transparent hover:text-blue-500
    transition-all duration-250 cursor-pointer  pointer dim shadow-1"
      onClick={() => {
        const input = document.getElementById(id);
        const sss = input.scrollWidth;
        const inputHeightMm = pxToMm(input.offsetHeight);
        const a4WidthMm = 210;
        const a4HeightMm = 297;
        const a4HeightPx = mmToPx(a4HeightMm);
        const numPages =
          inputHeightMm <= a4HeightMm
            ? 1
            : Math.floor(inputHeightMm / a4HeightMm) + 1;
        console.log({
          input,
          inputHeightMm,
          a4HeightMm,
          a4HeightPx,
          numPages,
          range: range(0, numPages),
          comp: inputHeightMm <= a4HeightMm,
          inputHeightPx: input.offsetHeight,
        });
        html2canvas(input, {
          scale: 5,
        }).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");

          if (inputHeightMm > a4HeightMm) {
            let pdf = new jsPDF("p", "mm", "a4");
            pdf.addImage(imgData, "JPEG", 0, 0, a4WidthMm, inputHeightMm + 16);
            pdf.save(`${datee}.pdf`);
          } else {
            let pdf = new jsPDF();
            pdf.addImage(imgData, "JPEG", 0, 0, a4WidthMm, inputHeightMm + 16);
            pdf.save(`${datee}.pdf`);
          }
        });
      }}
    >
      Download
    </div>
  </button>
);

export default PrintButton;

// const input = document.getElementById(id);
// const sss = input.scrollWidth;
// const inputHeightMm = pxToMm(input.offsetHeight);
// const a4WidthMm = 210;
// const a4HeightMm = 297;
// const a4HeightPx = mmToPx(a4HeightMm);
// const numPages =
//   inputHeightMm <= a4HeightMm
//     ? 1
//     : Math.floor(inputHeightMm / a4HeightMm) + 1;
// console.log({
//   input,
//   inputHeightMm,
//   a4HeightMm,
//   a4HeightPx,
//   numPages,
//   range: range(0, numPages),
//   comp: inputHeightMm <= a4HeightMm,
//   inputHeightPx: input.offsetHeight,
// });

// // var opt = {
// //   image: { type: "png", quality: 4 },
// //   html2canvas: {
// //     dpi: 192,
// //     scale: 10,
// //     letterRendering: true,
// //     useCORS: true,
// //   },
// // };

//       }
// )};

////////////////////////////////////////////////////////
// System to manually handle page breaks
// Wasn't able to get it working !
// The idea is to break html2canvas screenshots into multiple chunks and stich them together as a pdf
// If you get this working, please email me a khuranashivek@outlook.com and I'll update the article
////////////////////////////////////////////////////////
// range(0, numPages).forEach((page) => {
//   console.log(`Rendering page ${page}. Capturing height: ${a4HeightPx} at yOffset: ${page*a4HeightPx}`);
//   html2canvas(input, {height: a4HeightPx, y: page*a4HeightPx})
//     .then((canvas) => {
//       const imgData = canvas.toDataURL('image/png');
//       console.log(imgData)
//       if (page > 0) {
//         pdf.addPage();
//       }
//       pdf.addImage(imgData, 'PNG', 0, 0);
//     });
//   ;
// });

// setTimeout(() => {
//   pdf.save(`${id}.pdf`);
// }, 5000);
