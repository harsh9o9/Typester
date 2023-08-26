import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function getChartData(speedPerSec) {
  let data = speedPerSec.map(({ time, speed }) => {
    return {
      name: time,
      WPM: parseFloat(speed),
    };
  });
  return data;
}

const RenderLineChart = ({ speedPerSec }) => {
  {
    speedPerSec[0] = { time: 0, speed: "00" };
  }
  return (
    <ResponsiveContainer width="90%" height="100%">
      <LineChart width={600} height={400} data={getChartData(speedPerSec)}>
        <Line type="monotone" dataKey="WPM" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RenderLineChart;
