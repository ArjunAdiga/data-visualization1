import React from "react";

import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartData } from "./DummyData";
import { CustomTooltip } from "./CustomTooltip";
import { CustomDot } from "./CustomDot";
import Typography from "./Typography";

const Graphs = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex items-start" style={{marginBottom:"8px"}}>

        <Typography variant="body1" styles={{color:"#ffffff"}}>Graphs</Typography>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 h-full border border-gray-700">
          <div className="flex items-center  mb-6  justify-end ">           
            <div className="relative flex align-center">
              <select className="bg-[#2C2E334D] text-white text-sm rounded-md px-3 py-2 border border-gray-600 appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option className="  text-white" style={{backgroundColor:"#2C2E33"}}>Unsatisfied Demand %</option>
                <option className="  text-white" style={{backgroundColor:"#2C2E33"}}>Satisfied Demand %</option>
                <option className=" text-white" style={{backgroundColor:"#2C2E33"}}>Total Demand</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex  pr-2 pointer-events-none" style={{top:"30%"}}>
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="h-[450px] sm:h-[300px] md:h-[300px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">                                
            <LineChart                                                 // from here chart begins
              data={chartData}
              margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
              // width={620}
              // height={300}
            >
              <CartesianGrid
                stroke="#343434"
                horizontal={true}
                vertical={false}
                strokeWidth={2}
              />

              <XAxis
                dataKey="month"
                axisLine={true}
                tickLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
                dy={10}
              />

              <YAxis
                axisLine={true}
                tickLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                domain={[0, 100000]}
                ticks={[0, 20000, 40000, 60000, 80000, 100000]}
              />

              <ReferenceLine
                x="Jul"
                stroke="#C8E972"
                strokeDasharray="4 4"
                strokeWidth={1}
                segment={[
                  { x: "Jul", y: 0 },
                  { x: "Jul", y: 40000 },
                ]}
              />
              <ReferenceLine
                x="May"
                stroke="#C8E972" 
                strokeDasharray="2 2"
                strokeWidth={1}
              />


              <Tooltip content={<CustomTooltip />} cursor={false} />

              <Line
                type="linear"
                dataKey="value"
                stroke="#C8E972"
                strokeWidth={3}
                dot={<CustomDot />}
                activeDot={false}
              />
            </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graphs;
