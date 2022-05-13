import React from "react";

const Table = (props) => {
  let body = props.body;
  return (
    <table>
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
    <tr>
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

  return (
    <Table body={rows}>
      <TableRow></TableRow>
    </Table>
  );
};

export default DisplayTable;
