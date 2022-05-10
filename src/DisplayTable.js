import React from "react";

const DisplayTable = (props) => {
  const items = props.value;
  // console.log(items);
  //   items.map((item, index) => {
  //     const rowArray = item.split(" ");
  //     rowArray.forEach((element) => {
  //       console.log(element);
  //     });
  //   });
  // };
  return (
    <table>
      <tbody>
        {items.map((item, index) => {
          {
            const rowArray = item.split(" ");
            <tr key={index}>
              {rowArray.forEach((element) => (
                <td>
                  {element}
                  {console.log(element)}
                </td>
              ))}
            </tr>;
          }
        })}
      </tbody>
    </table>
  );
};

export default DisplayTable;
