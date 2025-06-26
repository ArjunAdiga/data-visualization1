interface CustomDotProps {
  cx?: number;
  cy?: number;
  payload?: any;
} 
export const CustomDot = (props : CustomDotProps) => {
  const { cx, cy,  payload } = props;
  const isActive = payload?.month === "Jul"; 
  const showDotsForMonths = ["May","Jul"]
  if (!showDotsForMonths.includes(payload?.month)) {
    return null; // No dot for other months
  }

  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={6}
        fill="525252"
        stroke="#84CC16"
        strokeWidth={4}
      />
      {isActive && (
        <circle
          cx={cx}
          cy={cy}
          r={10}
          fill="none"
          stroke="#A3E635"
          strokeWidth={4}
          opacity={0.3}
        />
      )}
    </g>
  );
};
