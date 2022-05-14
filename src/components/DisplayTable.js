import React from "react";
import "./DisplayTable.css";

const Table = (props) => {
  let body = props.body;
  let heading = props.heading;

  return (
    <table>
      <TableHeader heading={heading} />
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
      {/* TODO */}
      {row.map((val) => (
        <td>{val}</td>
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
          {heading.map((head) => (
            <th>{head}</th>
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
  const heading = props.value[0];
  let headers;
  if (heading) {
    headers = heading.split(" ");
  }

  // make an array of strings
  return <Table body={body} heading={headers}></Table>;
};

export default DisplayTable;
