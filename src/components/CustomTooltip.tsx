import {  InfoIcon } from "../assets/Assets";
import { ArrowUp } from 'lucide-react';


interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

export const CustomTooltip = ({ active, payload }:CustomTooltipProps) => {
  if (active && payload?.length) {
    const data = payload[0].payload;
    return (
      <div style={{
        background: "#1F2937", // dark card background
        padding: "12px",
        borderRadius: "4px",
        color: "#fff",
        width: "150px",
        border:"1px solid #5A5A5A"
      }}>
        <div className="flex items-center justify-between">
        <div style={{ fontWeight: "bold", fontSize: "1rem" }}>
          ${data.value.toLocaleString("en-US", { maximumFractionDigits: 2 })}
        </div>
        <InfoIcon/>
        </div>
        <div style={{ color: "#9CA3AF", fontSize: "0.875rem", marginTop: "4px" }} className="flex items-center flex-row">
          <ArrowUp size={12} /> {data?.month === "Jul" ? "4.6% above target" : "3.2% down target"}
        </div>
      </div>
    );
  }

  return null;
};
