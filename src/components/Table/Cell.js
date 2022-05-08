import React from "react";

/**
 * A single cell in the table to store and modify weights data.
 * The weights are represnted as an input element, and
 * we bind the updateCell method for its onChange event.
 * */
export default function Cell(props) {
  const { i, j, data, updateCell } = props;

  return (
    <input
      className="cell"
      type="text"
      value={data}
      onChange={(event) => updateCell(i, j, event.target.value)}
    ></input>
  );
}
