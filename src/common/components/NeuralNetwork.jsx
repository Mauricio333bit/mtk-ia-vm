import { useTheme } from "@mui/material/styles"
const NeuralNetwork = ({ top = "8rem", left = "2.5rem", right, bottom }) => {
  const theme = useTheme()
  const positionStyle = {
    position: "absolute",
    top,
    left,
    right,
    bottom,
  };

  return (
    <div className="w-80 h-80 opacity-50" style={positionStyle}>
      <svg viewBox="0 0 300 300" className="w-full h-full">
        {[...Array(12)].map((_, i) => (
          <circle
            key={i}
            cx={50 + (i % 4) * 70}
            cy={50 + Math.floor(i / 4) * 70}
            r="4.5"
            fill={`${theme.palette.primary.main}`}
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <line
            key={i}
            x1={50 + (i % 4) * 70}
            y1={50 + Math.floor(i / 4) * 70}
            x2={120 + (i % 3) * 70}
            y2={120 + Math.floor(i / 3) * 70}
            stroke={`${theme.palette.primary.main}`}
            strokeWidth="1"
            opacity="0.6"
          />
        ))}
      </svg>
    </div>
  );
};

export default NeuralNetwork;
