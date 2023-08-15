import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

// const data = [
//     {
//       name: 'Page A',
//       uv: 4000,
//       pv: 2400,
//     },
//     {
//       name: 'Page B',
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       name: 'Page C',
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       name: 'Page D',
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       name: 'Page E',
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       name: 'Page F',
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       name: 'Page G',
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     },
//   ];
const data = [
  {
    name: "0",
    WPM: 61.43,
  },
  {
    name: "1",
    WPM: 52.31,
  },
  {
    name: "2",
    WPM: 53.31,
  },
  {
    name: "3",
    WPM: 43.1,
  },
  {
    name: "4",
    WPM: 47.2,
  },
  {
    name: "5",
    WPM: 38.22,
  },
  {
    name: "6",
    WPM: 52.31,
  },
];

function getChartData(speedPerSec) {
  let data = speedPerSec.map(({ time, speed }) => {
    return {
      name: time,
      WPM: parseFloat(speed),
    };
  });
  console.log(data);
  return data;
}

const RenderLineChart = ({ speedPerSec }) => {
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
