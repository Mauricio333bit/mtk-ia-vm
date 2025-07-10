import React from 'react';
import { Grid, TextField, FormControl, InputLabel } from '@mui/material';
import { Controller } from 'react-hook-form';
import SelectVM from './SelectVm';


const countries = [
  { name: 'Argentina', code: '+54' },
  { name: 'Uruguay', code: '+598' },
  { name: 'México', code: '+52' },
  { name: 'Anquilla', code: '+1264' },
];

const groupedCountries = [
  {
    label: 'América Latina',
    items: countries.map(country => ({
      label: country.name,
      value: country.code,
    })),
  },
];

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
    '& .MuiOutlinedInput-input': {
      color: mainColor,
    },
  };
};

const PhoneInputVM = ({ control, name = 'telefono', color = 'primary', error }) => {
  return (
  
     

      
        <Controller
          name={`${name}_number`}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Teléfono"
              fullWidth
              error={!!error}
              helperText={error?.message}
              sx={getColorStyles(color)}
            />
          )}
        />
    
  );
};

export default PhoneInputVM;