import { Button } from '@mui/material';

// estilos por variante
const styleVariants = {
  primary: {
    background: "linear-gradient(to right, #2563eb, #06b6d4)",
    fontWeight: "bold",
    py: 1.5,
    textTransform: "none",
    transition: "all 0.5s ease-in-out",
    "&:hover": {
      background: "linear-gradient(to right, #06b6d4, #2563eb)",
      transform: "scale(1.03)",
    },
  },
  secondary: {
    py: 1.5,
    border: 1,
    borderColor: "#06b6d4",
    fontWeight: "bold",
    bgcolor: "rgba(0, 0, 0, 0.7)",
    textTransform: "none",
    transition: "transform 0.5s",
    "&:hover": {
      borderColor: "#06b6d4",
      transform: "scale(1.02)",
    },
  },
  // Si se necesita una nueva variante de boton añadir aca
};

const animationKeyframes = {
  "@keyframes wobble": {
    "0%": { transform: "translateX(0) rotate(0deg)" },
    "25%": { transform: "translateX(-2px) rotate(-5deg)" },
    "50%": { transform: "translateX(2px) rotate(5deg)" },
    "75%": { transform: "translateX(-1px) rotate(-3deg)" },
    "100%": { transform: "translateX(0) rotate(0deg)" },
  },
  "@keyframes bounce": {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-5px)" },
  },
};

const AppButton = ({
  children = "Button",
  onClick,
  color = "primary", // color de MUI (si usás color internamente)
  size = "medium",
  disabled = false,
  fullWidth = false,
  variant = "primary", // custom: primary, secondary...
  startIcon = null,
  endIcon = null,
  animateIcon = false,
  animationType = "",
  sx = {},
  ...rest
}) => {
  const baseStyles = styleVariants[variant] || styleVariants.primary;

  const combinedStyles = {
    ...baseStyles,
    ...(animateIcon && {
      "&:hover": {
        ...baseStyles["&:hover"],
        "& .MuiButton-startIcon, & .MuiButton-endIcon": {
          animation: `${animationType} 0.6s ease-in-out`,
        },
      },
    }),
    ...animationKeyframes,
    ...sx, // sobrescribe si se pasa externamente
  };

  return (
    <Button
      variant="contained"
      color={color}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={combinedStyles}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default AppButton;
