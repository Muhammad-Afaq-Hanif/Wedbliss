import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";
import { useVendorContext } from "../../../../Providers/Dashboards/Vendor/VendorProvider";
const ServicesChart = () => {
  const { totalData } = useVendorContext();
  const reformattedData = Object.entries(totalData).map(([name, records]) => ({
    name,
    records,
  }));
  console.log(reformattedData);
  return (
    <div>
      <ResponsiveContainer width={1100} height={400}>
        <LineChart
          width={730}
          height={250}
          data={reformattedData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="records" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ServicesChart;
