import React from "react";
import Cell from "./Cell";

/**
 * A sigle Column Component in the Table.
 * First element in the column is the node(column-hedaer)
 * Next 8 elements represents its weight with the
 * corresponding nodes(row-header).
 * The last element indicates the sum of all its weights.
 * */
export default function Column(props) {
  const {
    columnHeader,
    weights,
    index: node,
    updateCell,
    updateWeights
  } = props;
  const sumOfWeights = weights.reduce((acc, curr) => acc + curr);

  /**
   * A function to modify the weights, such that the sum of all the
   * weights becomes equal to 100.
   * */
  function adjustWeights() {
    // If a user clicks on the button for an un-modified column, return
    if (sumOfWeights === 100) return;

    // Let the fixed weights be initially same as the modified weights
    const fixedWeights = weights;

    // Difference between 100 and the sum of modified weights
    let extraWeights;

    if (sumOfWeights > 100) {
      extraWeights = sumOfWeights - 100;

      /**
       * Keep subtracting values from the top of the column
       * until the sum of weights becomes 100
       * */
      for (let i = 0; i < fixedWeights.length; i++) {
        if (fixedWeights[i] > extraWeights) {
          fixedWeights[i] = fixedWeights[i] - extraWeights;
          break;
        } else {
          extraWeights = extraWeights - fixedWeights[i];
          fixedWeights[i] = 0;
        }
      }
    } else {
      extraWeights = 100 - sumOfWeights;
      fixedWeights[0] += extraWeights;
    }

    // Update the top level data with the modified list of weights
    updateWeights(node, fixedWeights);
  }

  return (
    <div className="column">
      {/* Column Header: Node */}
      <div className="node">{columnHeader}</div>

      {/* It's corresponding weights with other nodes */}
      {weights.map((weight, index) => {
        return (
          <Cell
            i={node}
            j={index}
            data={weight}
            updateCell={updateCell}
            key={index}
          />
        );
      })}

      {/** 
      A button indicating sum of all the weights.
      If total weight is not equal to 100, clicking on it modifies 
      the weights such that, the total will revert back to 100 */}
      <button
        className="weightSum"
        onClick={adjustWeights}
        title={sumOfWeights !== 100 ? "Adjust Weights" : ""}
        style={{ backgroundColor: sumOfWeights !== 100 && "#ff1a1a" }}
      >
        {sumOfWeights}
      </button>
    </div>
  );
}
