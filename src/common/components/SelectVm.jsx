import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
} from '@mui/material';
import { Controller } from 'react-hook-form';

const getColorStyles = (color) => {
  const colorMap = {
    primary: '#06b6d4',
    secondary: '#9c27b0',
    success: '#2e7d32',
    error: '#d32f2f',
    warning: '#ed6c02',
    info: '#0288d1',
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
    '& .MuiSelect-icon': {
      color: mainColor,
    },
    '& .MuiOutlinedInput-input': {
      color: mainColor,
    },
  };
};

const SelectVM = ({
  name,
  control,
  label,
  options = [],
  defaultValue = '',
  error,
  color = 'primary',
  fullWidth = true,

  placeholder = 'Selecciona una opción',
  disabled = false,
  size = 'medium',
  validation = {},
  id,
}) => {
  // Generar ID único si no se proporciona
  const selectId = id || `${name}-grouped-select`;

  return (
    <FormControl 
      fullWidth={fullWidth} 
      error={!!error}
      sx={{
        
        ...getColorStyles(color),
      }}
      size={size}
      disabled={disabled}
    >

      <Controller
  name={name}
  control={control}
  defaultValue={defaultValue}
  rules={validation}
  render={({ field }) => (
    <Select
      {...field}
      native
      label={label}
      id={selectId}
      displayEmpty
      sx={{
        '& option[value=""]': {
          display: 'none', // Oculta el placeholder cuando el select está abierto
        },
      }}
    >
      <option value="" aria-label="None">
        {placeholder}
      </option>
      {options.map((group, groupIndex) => (
        <optgroup key={groupIndex} label={group.label}>
          {group.items.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </optgroup>
      ))}
    </Select>
  )}
/>
      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};

export default SelectVM;