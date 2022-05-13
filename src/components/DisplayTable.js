import React from "react";

const Table = (props) => {
  let body = props.body;
  let heading = props.heading;

  return (
    <table>
      <thead>
        <tr key={heading}>
          <th>{heading}</th>
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

  return <Table body={rows} heading={rows[0]}></Table>;
};

export default DisplayTable;
