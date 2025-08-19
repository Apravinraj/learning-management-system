import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";

function ChartBubble({ data }) {
  // decide chart type based on data shape
  const isProgressChart = data[0]?.day !== undefined;

  return (
    <div
      style={{
        background: "#f1f1f1",
        padding: "10px",
        borderRadius: "10px",
        margin: "5px 0"
      }}
    >
      {isProgressChart ? (
        <LineChart width={250} height={150} data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="progress" stroke="#007bff" />
        </LineChart>
      ) : (
        <BarChart width={250} height={150} data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="student" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="score" fill="#007bff" />
        </BarChart>
      )}
    </div>
  );
}

export default ChartBubble;
