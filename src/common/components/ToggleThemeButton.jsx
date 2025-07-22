// src/components/ToggleThemeButton.jsx
import React from 'react';
import Button from '@mui/material/Button';

import { useContext } from 'react';
import { ThemeContext } from '../../theme/ThemeContext';
import { LightbulbIcon, LightbulbOffIcon, Sun, SunMoonIcon } from 'lucide-react';


const ToggleThemeButton = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Button
      onClick={toggleTheme}
      startIcon={darkMode ?<Sun /> :<SunMoonIcon />  }
      variant="outlined"
      color="inherit"
      sx={{
        borderColor: darkMode ? '#6670B5' : '#202030',
        color: darkMode ? '#ffffff' : '#202030',
        fontWeight: 600,
        borderRadius: 2,
        textTransform: 'none',
        '&:hover': {
          bgcolor: darkMode ? '#2B2B43' : '#f0f0f0',
        },
      }}
    >
    
    </Button>
  );
};

export default ToggleThemeButton;