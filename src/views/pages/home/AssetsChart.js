import React, { useEffect, useRef, useState } from "react";
import CustomText from "views/components/CustomText";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function AssetsChart() {
  const chartContainer = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(300);

  const initWidth = () => {
    if (chartContainer.current) {
      setWidth((chartContainer?.current?.offsetWidth ?? 0) - 40);
    }
  };

  useEffect(() => {
    initWidth();
    // eslint-disble-next-line
  }, [chartContainer.current]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      initWidth();
    });
  }, []);

  const [price, setPrice] = useState(87287287);
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div
      className={`  h-full w-full rounded-xl border border-blue_gray border-opacity-20 bg-white bg-opacity-5 bg-center bg-no-repeat bg-cover pb-2`}
    >
      <div>
          <CustomText color="title" size="xs" bold="bold">
            Volume of Tokenized Assets
          </CustomText>
          <CustomText size="sm" bold="bold">
            (${price})
          </CustomText>
      </div>
      <div>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="6" vertical={false}/>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8"  dot={false} isAnimationActive={true}
            animationDuration={0}/>
        </LineChart>
      </div>
      <div>
        
      </div>
    </div>
  );
}
