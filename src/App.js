// Dependencies, Components and Styles
import React, { useState } from "react";
import Table from "./components/Table";
import Graph from "./components/Graph";
import "./styles.css";

// Dummy Data
import { nodes, weights } from "../data.js";

/**
 * Starting point for the App logic
 * Contains two sections: Table and Graph, which gets rendered
 * and re-rendered using the top level data.
 * */
export default function App() {
  // App data provided by data.js
  const [data, setData] = useState(() => weights);

  // Updates a sigle cell in the matrix
  function updateCell(i, j, data) {
    /**
     * Here, i: node(column), j: corresponding weight(row).
     * This is reverse to that of a traditonal 2D Matrix where
     * (i, j) normally represents (row, column)
     * */

    // Return if Entered data is not a numerical string
    if (isNaN(data)) return;

    // Update the state of the App
    setData((previousState) => {
      const updatedData = [...previousState];
      updatedData[i][j] = Number(data);
      return updatedData;
    });
  }

  // Updates multiple weights of a single node
  function updateMultipleWeights(weights, nodeIndex) {
    setData((previousState) => {
      const updatedData = [...previousState];
      updatedData[nodeIndex] = weights;
      return updatedData;
    });
  }

  return (
    <>
      <h3 style={{ textAlign: "center" }}>
        Graph data Visualization using Nivo Chord Diagram
      </h3>
      <div className="app">
        <Table
          data={data}
          nodes={nodes}
          updateCell={updateCell}
          updateWeights={updateMultipleWeights}
        />
        <Graph data={data} nodes={nodes} />
      </div>
    </>
  );
}
