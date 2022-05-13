import React from "react";
import { useState } from "react";
import DisplayTable from "./DisplayTable";

// TODO
// add header
// display using css grid

const CsvReader = () => {
  const [csvFile, setCsvFile] = useState(null);
  const [csvArray, setCsvArray] = useState({});

  const processCSV = (str) => {
    let rows = str.split("\n");

    // remove comma
    rows = rows.map(function (row) {
      return row.replace(/,/g, " ");
    });
    setCsvArray(rows);
  };

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
