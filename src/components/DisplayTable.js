import React from "react";
import "./DisplayTable.css";

const Table = (props) => {
  let body = props.body;
  let heading = props.heading;

  return (
    <table>
      <thead>
        <tr>
          {heading.map((head) => (
            <th>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((row) => (
          <TableRow row={row} />
        ))}
      </tbody>
    </table>
  );
};

const TableRow = (props) => {
  let row = props.row;
  return (
    <tr key={row}>
      {row.map((val) => (
        <td>{val}</td>
      ))}
    </tr>
  );
};

const DisplayTable = (props) => {
  const items = props.value;

  const rows = Object.entries(items).map(([key, value]) => {
    return value.split(" ");
  });

  // take first row off to make table headings
  const headings = rows.shift();

  return <Table body={rows} heading={headings}></Table>;
};

export default DisplayTable;
