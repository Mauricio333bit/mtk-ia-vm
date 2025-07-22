import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";

const AppButton = ({
  children = "Button",
  onClick,
  color = "primary", // puede ser 'primary' o 'secondary'
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
  const theme = useTheme(); // 🔥 Acceso al tema actual

  // Colores basados en el tema actual
  const themedColors = {
    primaryBg: theme.palette.primary.main,
    primaryHoverBg: theme.palette.mode === 'dark' ? '#06b6d4' : '#06b6d4',
    secondaryBorder: theme.palette.secondary.main,
    secondaryBg: theme.palette.background.default,
  };

  const styleVariants = {
    primary: {
      background: `linear-gradient(to right, ${themedColors.primaryBg}, #06b6d4)`,
      fontWeight: "bold",
      py: 1.5,
      textTransform: "none",
      transition: "all 0.5s ease-in-out",
      "&:hover": {
        background: `linear-gradient(to right, #06b6d4, ${themedColors.primaryBg})`,
        transform: "scale(1.03)",
      },
    },
    secondary: {
      py: 1.5,
      border: 1,
      borderColor: themedColors.secondaryBorder,
      fontWeight: "bold",
      bgcolor: themedColors.secondaryBg,
      textTransform: "none",
      transition: "transform 0.5s",
      "&:hover": {
        borderColor: themedColors.secondaryBorder,
        transform: "scale(1.02)",
      },
    },
  };

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
    ...sx,
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
