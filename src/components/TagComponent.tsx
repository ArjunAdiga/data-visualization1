import { Plus,Check  } from 'lucide-react';

interface TagComponentProps {
  label: string;
  isSelected?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
  key: string | number;
  onClick: () => void;
}

export const TagComponent: React.FC<TagComponentProps> = ({
  label,
  isSelected = false,
  onHover,
  onLeave,
  key,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-all duration-200
        ${
          isSelected
            ? "   border-yellow-400"
            : "   border-gray-600 hover:bg-gray-600"
        }
      `}
      style={{
        border: isSelected ? "1px solid #C9FF3B" : "1px solid #EEEEEE",
        color: isSelected ? "#C8E972FD" : "#D5D5D5",
        backgroundColor: isSelected ? "#282E16" : "#5959594D",
        display:"flex",
        alignItems:"center",
        flexDirection:"row",
        gap:"4px"
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      key={key}
    >
      <span>{label}</span>
      {isSelected ? (
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
      ) : (
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
      )}
      {isSelected ? <Check color='#C8E972' height={10} width={10} /> : <Plus color='#D5D5D5' height={9} width={9}/>}
    </div>
  );
};
