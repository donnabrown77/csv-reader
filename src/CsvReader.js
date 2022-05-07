import { useState } from "react";

function DisplayTable(props) {
  const items = props.value;
  return (
    <table>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            {Object.keys(item).map((key) => (
              <td>{item[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function CsvReader() {
  const [csvFile, setCsvFile] = useState();
  const [csvArray, setCsvArray] = useState([]);

  const processCSV = (str, delim = ",") => {
    const rows = str.split("\n");
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
          if (csvFile) handleFileUpload();
        }}
      >
        Submit
      </button>
      <br />
      <DisplayTable value={csvArray} />
    </div>
  );
}
