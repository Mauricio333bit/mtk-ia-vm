import React from 'react';
import { TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const InputVM = ({ 
  label, 
  name, 
  register, 
  validation = {}, 
  error, 
  color = 'primary',
  type = 'text',
  placeholder,
  multiline = false,
  rows = 1,
  variant = 'outlined',
  fullWidth = true,
  margin = 'none',
  ...props 
}) => {
  
  // Estilos personalizados para colores
  const getColorStyles = (color) => {
    const colorMap = {
      primary: '#06b6d4',
      secondary: '#9c27b0', 
      success: '#2e7d32',
      error: '#d32f2f',
      warning: '#ed6c02',
      info: '#0288d1'
    };
    
    const mainColor = colorMap[color] || colorMap.primary;
    
    return {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: mainColor,
          borderWidth: '2px',
        },
        '&:hover fieldset': {
          borderColor: mainColor,
        },
        '&.Mui-focused fieldset': {
          borderColor: mainColor,
        },
      },
      '& .MuiInputLabel-root': {
        color: mainColor,
        fontWeight: 500,
      },
      '& .MuiInputLabel-root.Mui-focused': {
        color: mainColor,
      },
      '& .MuiOutlinedInput-input': {
        color: mainColor,
      },
    };
  };

  return (
    <TextField
      label={label}
      variant={variant}
      fullWidth={fullWidth}
      margin={margin}
      multiline={multiline}
      rows={multiline ? rows : undefined}
      type={type}
      placeholder={placeholder}
      error={!!error}
      helperText={error?.message}
      sx={getColorStyles(color)}
      {...register(name, validation)}
      {...props}
    />
  );
};
export default InputVM;