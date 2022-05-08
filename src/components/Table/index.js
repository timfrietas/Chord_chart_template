// Dependencies and Components
import React from "react";
import Column from "./Column";

/**
 * The Table Component.
 * It is rendered as a list of columns, instead of the traditinoal
 * way of rendering it as a list of rows. This is done because the
 * data shared between the Table and Graph are the same where each
 * column represents weights of a single node to itself and other
 * corresponding nodes and the sum of all the weights for a given
 * node(in a column) equals to 100.
 * */
export default function Table(props) {
  const { data, nodes, updateCell, updateWeights } = props;

  // Data to render the first column in the table
  const rowHeaders = ["-", ...nodes];

  return (
    <div className="tableContainer">
      <p>Modify data to see changes on the Graph</p>

      {/* 2D Matrix of a Graph data, represented as a TABLE */}
      <div className="table">
        {/* Row headers, the first column in the Table. */}
        <div className="column">
          {rowHeaders.map((node, index) => {
            return (
              <div className="node" key={index}>
                {node}
              </div>
            );
          })}
        </div>

        {/* Weights data for every node(8 columns in total) */}
        {data.map((column, index) => {
          return (
            <Column
              columnHeader={nodes[index]}
              weights={column}
              index={index}
              updateCell={updateCell}
              updateWeights={updateWeights}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
