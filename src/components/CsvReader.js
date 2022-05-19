import React, { useEffect } from "react";
import { useState } from "react";
import DisplayTable from "./DisplayTable";

const CsvReader = () => {
  // save the input file name to a state variable
  const [csvFile, setCsvFile] = useState(null);
  // save the file data to a state variable
  // so the DisplayTable component can use it
  const [csvArray, setCsvArray] = useState([]);

  const processCSV = (text) => {
    // split the file data into rows from the newline character
    console.log(text)
    let rows = text.split("\n");

    // remove comma
    rows = rows.map(function (row) {
      
      return row.replace(/,/g, "  ");
    });
    setCsvArray(rows );
    
  };

  useEffect(() => console.log(csvArray) , [csvArray])

  const handleFileUpload = () => {
    
    const file = csvFile;
    const reader = new FileReader();

    reader.onload = function (e) {
      const text = e.target.result;
      processCSV(text);
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <input
        type="file"
        accept=".csv"
        onChange={(e) => {
          setCsvFile(e.target.files[0]);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleFileUpload();
        }}
      >
        Submit
      </button>
      <br />
      <DisplayTable value={csvArray} />
    </div>
  );
};

export default CsvReader;
