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
   "@keyframes sendPackage": {
    "0%": { 
      transform: "translateX(-100px) scale(0.5)",
      opacity: 0 
    },
    "20%": { 
      transform: "translateX(-20px) scale(0.8)",
      opacity: 0.7 
    },
    "50%": { 
      transform: "translateX(0) scale(1)",
      opacity: 1 
    },
    "80%": { 
      transform: "translateX(20px) scale(0.8)",
      opacity: 0.7 
    },
    "100%": { 
      transform: "translateX(100px) scale(0.5)",
      opacity: 0 
    },
  },

  // 2. Animación de avión de papel volando
  "@keyframes paperPlane": {
    "0%": { 
      transform: "translateX(-50px) translateY(0) rotate(-10deg)",
      opacity: 0 
    },
    "30%": { 
      transform: "translateX(0) translateY(-8px) rotate(0deg)",
      opacity: 1 
    },
    "70%": { 
      transform: "translateX(30px) translateY(-5px) rotate(5deg)",
      opacity: 1 
    },
    "100%": { 
      transform: "translateX(80px) translateY(-15px) rotate(15deg)",
      opacity: 0 
    },
  },

  // 3. Animación de cohete despegando
  "@keyframes rocket": {
    "0%": { 
      transform: "translateY(0) scale(1)",
      opacity: 1 
    },
    "30%": { 
      transform: "translateY(-10px) scale(1.1)",
      opacity: 0.9 
    },
    "60%": { 
      transform: "translateY(-30px) scale(0.8)",
      opacity: 0.6 
    },
    "100%": { 
      transform: "translateY(-80px) scale(0.3)",
      opacity: 0 
    },
  },

  // 4. Animación de pulso con desvanecimiento
  "@keyframes pulseOut": {
    "0%": { 
      transform: "scale(1)",
      opacity: 1 
    },
    "50%": { 
      transform: "scale(1.2)",
      opacity: 0.8 
    },
    "100%": { 
      transform: "scale(1.5)",
      opacity: 0 
    },
  },

  // 5. Animación de deslizamiento lateral con efecto zoom
  "@keyframes slideZoom": {
    "0%": { 
      transform: "translateX(0) scale(1)",
      opacity: 1 
    },
    "25%": { 
      transform: "translateX(10px) scale(1.05)",
      opacity: 0.9 
    },
    "50%": { 
      transform: "translateX(25px) scale(1.1)",
      opacity: 0.7 
    },
    "75%": { 
      transform: "translateX(45px) scale(0.9)",
      opacity: 0.4 
    },
    "100%": { 
      transform: "translateX(70px) scale(0.5)",
      opacity: 0 
    },
  },

  // 6. Animación de ondas que se expanden
  "@keyframes rippleExpand": {
    "0%": { 
      transform: "scale(1)",
      opacity: 1,
      borderRadius: "8px"
    },
    "25%": { 
      transform: "scale(1.1)",
      opacity: 0.8,
      borderRadius: "12px"
    },
    "50%": { 
      transform: "scale(1.3)",
      opacity: 0.5,
      borderRadius: "20px"
    },
    "75%": { 
      transform: "scale(1.6)",
      opacity: 0.2,
      borderRadius: "35px"
    },
    "100%": { 
      transform: "scale(2)",
      opacity: 0,
      borderRadius: "50px"
    },
  },

  // 7. Animación de teletransporte
  "@keyframes teleport": {
    "0%": { 
      transform: "scale(1) rotateY(0deg)",
      opacity: 1 
    },
    "25%": { 
      transform: "scale(0.8) rotateY(90deg)",
      opacity: 0.7 
    },
    "50%": { 
      transform: "scale(0.5) rotateY(180deg)",
      opacity: 0.3 
    },
    "75%": { 
      transform: "scale(0.2) rotateY(270deg)",
      opacity: 0.1 
    },
    "100%": { 
      transform: "scale(0) rotateY(360deg)",
      opacity: 0 
    },
  },

  // 8. Animación de mensaje siendo enviado con trail
  "@keyframes messageTrail": {
    "0%": { 
      transform: "translateX(0)",
      opacity: 1,
      boxShadow: "0 0 0 rgba(6, 182, 212, 0.5)"
    },
    "20%": { 
      transform: "translateX(15px)",
      opacity: 0.9,
      boxShadow: "0 0 10px rgba(6, 182, 212, 0.4)"
    },
    "40%": { 
      transform: "translateX(35px)",
      opacity: 0.7,
      boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)"
    },
    "60%": { 
      transform: "translateX(60px)",
      opacity: 0.5,
      boxShadow: "0 0 30px rgba(6, 182, 212, 0.2)"
    },
    "80%": { 
      transform: "translateX(90px)",
      opacity: 0.3,
      boxShadow: "0 0 40px rgba(6, 182, 212, 0.1)"
    },
    "100%": { 
      transform: "translateX(120px)",
      opacity: 0,
      boxShadow: "0 0 50px rgba(6, 182, 212, 0)"
    },
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
