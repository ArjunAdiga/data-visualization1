
import React from "react";
import Typography from "./Typography";
import { InfoIcon } from "../assets/Assets";

type KpiCardProps = {
  title: string;
  description: string;
  value: string;
};

const KpiCard: React.FC<KpiCardProps> = ({ title, description, value }) => {
  return (
    <div className="bg-[#1C1C1C] text-white rounded-xl p-4 w-full shadow border border-[#2D2D2D]" >
      <div className="flex items-start justify-between mb-2">
        <Typography variant="label2" styles={{color:"white"}}>{title}</Typography>
        <InfoIcon />
      </div>
      <Typography variant="label3" styles={{marginTop:"4px",textAlign:"start"}}>{description}</Typography>
      <div className="flex justify-end" style={{marginTop:"32px"}}>

      <Typography variant="body1" styles={{color:"white"}}>{value}</Typography>
      </div>
    </div>
  );
};

export default KpiCard;