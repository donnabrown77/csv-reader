import React from "react";
import "./DisplayTable.css";

const Table = (props) => {
  let body = props.body;
  let heading = props.heading;

  return (
    <table>
      <TableHeader heading={heading} />
      <tbody>
        {body.map((row, index) => (
          <TableRow key={index} row={row} />
        ))}
      </tbody>
    </table>
  );
};

const TableRow = (props) => {
  let row = props.row;
  return (
    <tr key={row}>
      {row.map((val, index) => (
        <td key={index}>{val}</td>
      ))}
    </tr>
  );
};

const TableHeader = (props) => {
  let heading = props.heading;
  if (heading) {
    return (
      <thead>
        <tr>
          {heading.map((head, index) => (
            <th key={index}>{head}</th>
          ))}
        </tr>
      </thead>
    );
  }
};

const DisplayTable = (props) => {
  // convert each row of csv data to an array of rows
  const body = Object.entries(props.value).map(([key, value]) => {
    return value.split(" ");
  });

  // take first row off to get table data
  body.shift();

  // get first row off to make table headings
  const firstRow = props.value[0];
  let heading;
  if (firstRow) {
    heading = firstRow.split(" ");
  }

  // make an array of strings
  return <Table body={body} heading={heading}></Table>;
};

export default DisplayTable;
