import React, { useEffect, useState } from "react";
import { Accordion } from "./Accordion";
import { TagComponent } from "./TagComponent";
import { initialVariables } from "./DummyData";
import { useVariableStore } from "../store/useVariableStore";
import Typography from "./Typography";
import { Info,RotateCcw } from 'lucide-react';
import Button from "./Button";
type VariableDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

type TooltipType = {
  name :string,
  tooltip:string
}

const VariableDrawer: React.FC<VariableDrawerProps> = ({ isOpen, onClose }) => {
  const [primaryOpen, setPrimaryOpen] = useState(false);
  const [secondaryOpen, setSecondaryOpen] = useState(false);
  const [hoveredTag, setHoveredTag] = useState<TooltipType>({name:"",tooltip:""});
  const [variables, setVariables] = useState(initialVariables);
  const { selectedTags, addSelected, removeSelected } = useVariableStore();

  useEffect(() => {
    const synced = variables.map((category) =>
      category.map((tag) => ({
        ...tag,
        isSelected: selectedTags.some((sel) => sel.id === tag.id),
      }))
    );
    setVariables(synced);
  }, []);

  const toggleTag = (catIndex: number, tagId: number) => { // on click of tags
  setVariables((prev) => {
    const updated = prev.map((cat, i) =>
      i === catIndex
        ? cat.map((tag) => {
            if (tag.id === tagId) {
              const willBeSelected = !tag.isSelected; // storing the state for store

              if (willBeSelected) {
                addSelected({ id: tag.id, name: tag.name });
              } else {
                removeSelected(tag.id);
              }

              return {
                ...tag,
                isSelected: willBeSelected,
              };
            }
            return tag;
          })
        : cat
    );

    return updated;
  });
};


  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-xl  text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-600 z-50 shadow-2xl overflow-y-auto`} style={{backgroundColor:"#0E0D0D",borderLeft:"2px solid #525252",scrollbarWidth:"none"}}
      >
        <div className="flex items-center justify-between p-6 ">
          <h2 className="text-white text-lg font-medium">Edit Variables</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-3  border-gray-700">
          <div className="flex items-center space-x-3 ">
            <div className="relative flex-1">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-[#2C2E334D] text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{border:"1px solid #5A5A5A" ,borderRadius:"4px"}}
              />
            </div>

            <Button variant="secondary" styles={{backgroundColor:"5959594D"}}>
              <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.93007 3L9.37496 4.21154L8.16783 4.76224L9.37496 5.31734L9.93007 6.52448L10.4808 5.31734L11.6923 4.76224L10.4808 4.21154M5.52448 4.32168L4.42308 6.74476L2 7.84615L4.42308 8.94755L5.52448 11.3706L6.62587 8.94755L9.04895 7.84615L6.62587 6.74476M9.93007 9.16783L9.37496 10.375L8.16783 10.9301L9.37496 11.4808L9.93007 12.6923L10.4808 11.4808L11.6923 10.9301L10.4808 10.375"
            fill="#D5D5D5"
          />
        </svg>
              <Typography variant="label1">Autofill</Typography> 
            </Button>

            <Button className="  px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-400 transition-colors"
            styles={{borderColor:"#577113" ,backgroundColor:"#23291E",display:"flex",alignItems:"center",gap:"4px"}}>
           <RotateCcw color="#C9FF3B" height={15} width={17}/> <Typography variant="label1">Rerun</Typography>  
            </Button>
          </div>
        </div>

        <div
          className="relative flex items-center flex-col m-2"
          style={{ border: "1px solid #525252", borderRadius: "4px" }}
        >
          <div className="p-4 space-y-6 w-full">
            {variables?.map((category, catIndex) => (
              <div key={catIndex}>
                <Typography variant="label2" styles={{color:"#D5D5D5",marginBottom:"20px",display:"flex"}}>
                  Variable Category {catIndex + 1}
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {category?.map((tag) => (
                    <TagComponent
                      key={tag.id}
                      label={tag.name}
                      onHover={() => setHoveredTag({name:tag.name,tooltip:tag.tooltip})}
                      onLeave={() => setHoveredTag({name:"",tooltip:""})}
                      onClick={() => toggleTag(catIndex, tag.id)}                        // this gets selected and stored in zustand state management
                      isSelected={tag?.isSelected}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
         
         {!!hoveredTag?.name  && !!hoveredTag?.tooltip &&  (      // for hovering menu
            <div className="absolute  bottom-0 w-full bg-gray-900 text-white text-sm p-3 rounded shadow-lg z-50 translate-y-full" style={{backgroundColor:"#222324", border: "1px solid #525252", borderRadius: "4px"}}>
              <div className="flex items-center justify-start" style={{gap:"12px"}}>
              <Typography variant="h2" styles={{color:"#FFFFFF"}}>{hoveredTag?.name}</Typography>
              <Info height={15} width={15}/>
              </div>
              <div className="mt-2">
                 <Typography variant="label2" styles={{color:'#BBBBBB'}}>{hoveredTag?.tooltip}</Typography>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-0">
          {" "}
          {/*Accordions  */}
          <Accordion
            title="Primary Variables"
            isOpen={primaryOpen}
            onToggle={() => setPrimaryOpen(!primaryOpen)}
          />
          <Accordion
            title="Secondary Variables"
            isOpen={secondaryOpen}
            onToggle={() => setSecondaryOpen(!secondaryOpen)}
          />
        </div>
      </div>
    </>
  );
};

export default VariableDrawer;
