import { DropdownIcon } from "../assets/Assets";
import Typography from "./Typography";

export const Accordion: React.FC<{ title: string; isOpen: boolean; onToggle: () => void }> = ({
  title,
  isOpen,
  onToggle
}) => (
  <div className="m-2 " style={{ border: "1px solid #525252",backgroundColor:"#222324", borderRadius: "4px" ,padding:""}}>
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-800 transition-colors"
    >
      <Typography variant="h2" styles={{color:"#C8E972"}}>{title}</Typography>
      <DropdownIcon/>
    </button>
    {isOpen && (
      <div className="pb-4 text-gray-300 text-sm">
        <p>Accordion content goes here...</p> {/*accordion variables goes here */}
      </div>
    )}
  </div>
);