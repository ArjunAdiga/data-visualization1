import { useState } from "react";
import Typography from "../components/Typography";
import Button from "../components/Button";
import Graphs from "../components/Graphs";
import VariableDrawer from "../components/VariableDrawer";
import KpiCard from "../components/KpiCard";
import { Ellipsis, Plus } from "lucide-react";
import { kpis } from "../components/DummyData";
import { ChargeIcon, DownloadIcon, DropdownIcon,  RetryIcon } from "../assets/Assets";

const MainDashboard = () => {
  const [openDrawer, setOpenDrawer] = useState(false);    // to handle drawer
  const handleDrawer = () => {                   // to toggle drawer
    setOpenDrawer((prev) => !prev);
  };
  return (
    <>
      <div
        className="m-4 p-4  h-full bg-gray-900 flex flex-col w-90%"
        style={{ border: "1px solid #525252", borderRadius: "4px" }}
      >
        <div className="flex items-center justify-between m-2">
          <div className="flex items-center" style={{gap:"4px"}}>
          <ChargeIcon/>
          <Typography variant="h1">Charging Station</Typography>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary"><RetryIcon/></Button>
            <Button variant="secondary" onClick={() => handleDrawer()}>
              Edit Variables
            </Button>
            <Button variant="secondary"><DownloadIcon/></Button>
          </div>
        </div>

        <div
          className="flex  flex-col w-full"
          style={{ gap: "8px",padding:"2px 8px 4px" }}
        >
          <div className="flex  justify-between flex-row" style={{padding:"8px 4px"}}>
            <div className="flex items-center" style={{gap:"4px"}}>
              <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.93007 0L7.37496 1.21154L6.16783 1.76224L7.37496 2.31734L7.93007 3.52448L8.48077 2.31734L9.69231 1.76224L8.48077 1.21154M3.52448 1.32168L2.42308 3.74476L0 4.84615L2.42308 5.94755L3.52448 8.37063L4.62587 5.94755L7.04895 4.84615L4.62587 3.74476M7.93007 6.16783L7.37496 7.37496L6.16783 7.93007L7.37496 8.48077L7.93007 9.69231L8.48077 8.48077L9.69231 7.93007L8.48077 7.37496"
            fill="#C8E972"
          />
        </svg>
              <Typography variant="body1" styles={{ color: "#DCFF7FFD" }}>
                Best case scenario
              </Typography>
            </div>
            <div>
              <DropdownIcon />
            </div>
          </div>
          <div className="flex  flex-col w-full" style={{ gap: "8px",padding:"2px 8px 4px" }}>
           <div className="flex  w-full justify-between flex-row" style={{padding:"4px 6px",border:"1px solid #C9FF3B" , borderRadius:"4px",gap:"12px"}}>
               <Typography variant="label2" styles={{color:"#C9FF3B"}}>The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.</Typography>
               <Ellipsis color="#C9FF3B"/>
           </div>
           <div className="flex  w-full justify-between  flex-row" style={{padding:"4px 6px",border:"1px solid #C9FF3B" , borderRadius:"4px",gap:"12px"}}>
               <Typography variant="label2" styles={{color:"#C9FF3B"}}>The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles.</Typography>
               <Ellipsis color="#C9FF3B"/>
           </div>
          </div>
        </div>
        <div className="bg-gray-900 p-6 flex  justify-between w-full" style={{gap:"24px"}}>
          <div style={{width:"75%"}}>

          <Graphs />
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Typography variant="label1" styles={{color:"#FDFDFDFD"}}>
              Key Performance Indicators       
              </Typography>
              <Button variant="secondary" styles={{height:"32px",display:"flex",gap:"4px", alignItems:"center"}}>
                Variables <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-x-1 lg:grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2" style={{gap:"12px",columnGap:"12px"}}>
              {kpis.map((kpi, index) => (
                <KpiCard key={index} {...kpi} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {openDrawer && (
        <VariableDrawer isOpen={openDrawer} onClose={handleDrawer} />
      )}
    </>
  );
};

export default MainDashboard;
