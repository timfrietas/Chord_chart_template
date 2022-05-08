import React from "react";
import { ResponsiveChord } from "@nivo/chord";

/**
 * Graph Component:
 * Built with Nivo chord using its React wrapper, ResponsiveChord.
 * It uses the data obtained from the top level App component to render
 * the Chart. Any modification in the top level data will immediately
 * reflect on the Chord Diagram in real time.
 * */
export default function Graph(props) {
  const { nodes, data } = props;

  return (
    <div className="graph" style={{ height: "500px", width: "500px" }}>
      <ResponsiveChord
        keys={nodes}
        matrix={data}
        valueFormat=".2f"
        margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
        padAngle={0.02}
        innerRadiusRatio={0.96}
        innerRadiusOffset={0.02}
        arcOpacity={1}
        arcBorderWidth={1}
        arcBorderColor={{ from: "color", modifiers: [["darker", 0.4]] }}
        ribbonOpacity={0.5}
        ribbonBorderWidth={1}
        ribbonBorderColor={{ from: "color", modifiers: [["darker", 0.4]] }}
        enableLabel={true}
        label="id"
        labelOffset={12}
        labelRotation={-90}
        labelTextColor={{ from: "color", modifiers: [["darker", 1]] }}
        colors={{ scheme: "nivo" }}
        isInteractive={true}
        arcHoverOpacity={1}
        arcHoverOthersOpacity={0.25}
        ribbonHoverOpacity={0.75}
        ribbonHoverOthersOpacity={0.25}
        animate={true}
        motionStiffness={90}
        motionDamping={7}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 15,
            translateY: 70,
            itemWidth: 45,
            itemHeight: 14,
            itemsSpacing: 0,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            symbolSize: 12,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000"
                }
              }
            ]
          }
        ]}
      />
    </div>
  );
}
