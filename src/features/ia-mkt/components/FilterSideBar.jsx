import React from "react"
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Box,
  Divider,
  useMediaQuery,
  Toolbar
} from "@mui/material"
import { X, Filter } from "lucide-react"
import { useTheme } from "@mui/material/styles"

const drawerWidth = 260

const FilterSidebar = ({
  categories = [],
  selectedCategory,
  onCategoryChange,
  onClose,
  variant = "permanent",
  container
}) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"))
  const drawerVariant = isDesktop ? "permanent" : "temporary"
  const isOpen = isDesktop || variant === "temporary"

  return (
    <Drawer
      variant={drawerVariant}
      open={isOpen}
      onClose={onClose}
      anchor="left"
      container={container}
      disablePortal={true} // <-- clave para que no se renderice en el body
      sx={{
        width: 260,
        
        "& .MuiDrawer-paper": {
          width: 260,
          bgcolor: "#1f2937",
          color: "#fff",
          top:82,
          borderRight: "1px solid #374151",
          boxSizing: "border-box",
          position: "fixed",
          maxHeight:{sm:'100%',lg:'88.5%' }
          
        }
      }}
    >
     
      
      {/* Header */}
      <Box
        sx={{
          px: 2,
          py: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #374151"
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Filter size={20} />
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            FILTERS
          </Typography>
        </Box>
        {drawerVariant === "temporary" && (
          <IconButton onClick={onClose} sx={{ color: "#9ca3af" }}>
            <X size={20} />
          </IconButton>
        )}
      </Box>

      <Divider sx={{ borderColor: "#374151" }} />

      {/* Sección de Modalidad */}
      <Box sx={{ px: 2, py: 1 }}>
        <Typography 
          variant="overline" 
          sx={{ 
            color: "#9ca3af", 
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: 1
          }}
        >
          MODALITY
        </Typography>
      </Box>

      {/* Lista de categorías */}
      <List sx={{ px: 1, overflowY: "auto", flex: 1 }}>
        {categories.map((category, index) => {
          const isSelected = selectedCategory === category.key

          return (
            <ListItem
              key={category.key}
              disablePadding
              sx={{ mb: 0.5 }}
            >
              <ListItemButton
                onClick={() => {
                  onCategoryChange(category.key)
                  if (drawerVariant === "temporary") onClose?.()
                }}
                sx={{
                  bgcolor: isSelected ? "#06b6d4" : "transparent",
                  color: isSelected ? "#fff" : "#d1d5db",
                  borderRadius: 2,
                  px: 2,
                  py: 1,
                  mx: 1,
                  "&:hover": {
                    bgcolor: isSelected ? "#0891b2" : "#374151"
                  }
                }}
              >
                <ListItemText
                  primary={
                    <Typography sx={{ fontWeight: 500, fontSize: "0.875rem" }}>
                      {category.label}
                    </Typography>
                  }
                />
                <Box
                  sx={{
                    bgcolor: isSelected ? "#0e7490" : "#4b5563",
                    color: "#fff",
                    fontSize: "0.75rem",
                    px: 1.2,
                    py: 0.3,
                    borderRadius: 2,
                    minWidth: 32,
                    textAlign: "center",
                    fontWeight: 500
                  }}
                >
                  {category.count}
                </Box>
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>

      {/* Footer opcional */}
      <Divider sx={{ borderColor: "#374151" }} />
      <Box sx={{ p: 2 }}>
        <Typography variant="caption" sx={{ color: "#6b7280" }}>
          {categories.length} categories available
        </Typography>
      </Box>
    </Drawer>
  )
}

export default FilterSidebar