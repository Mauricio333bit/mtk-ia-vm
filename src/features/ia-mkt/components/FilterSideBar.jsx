import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Typography,
  Box,
  Divider,
  useMediaQuery
} from "@mui/material"
import { X, Filter, Search } from "lucide-react"
import { alpha, useTheme } from "@mui/material/styles"

const drawerWidth = 260

const FilterSidebar = ({
  categories = [],
  selectedCategory,
  onCategoryChange,
  onClose,
  
  container,

  open
}) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"))

  const drawerVariant = isDesktop ? "permanent" : "temporary"

  return (
    <Drawer
      variant={drawerVariant}
      open={isDesktop ? true : open}
      onClose={onClose}
      anchor="left"
      container={container}
      ModalProps={{
        keepMounted: true, // Mejora performance en móviles
      }}
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          borderRadius: {xs:0,sm:3},
          marginLeft:{xs:0,md:1},
          width: isDesktop ? drawerWidth : "100%",
          height: isDesktop ? "83%" : "100%",
          bgcolor: theme.palette.background.paper, // antes "#1f2937"
          color: theme.palette.text.primary,        // antes "#fff"
          top: isDesktop ? 90 : 0,

          boxSizing: "border-box",
          position: "fixed",
          transition: "transform 0.3s ease-in-out"
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
          justifyContent:"center",
          borderBottom: "1px solid #374151"
        }}
      >
        <Box sx={{ display: "flex", justifyContent:"space-between", gap: 1, }}>
          <Filter size={20} />
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            FILTROS
          </Typography>
        </Box>
        {!isDesktop && (
          <IconButton onClick={onClose} sx={{ color: "#9ca3af" }}>
            <X size={20} />
          </IconButton>
        )}
      </Box>

      <Divider sx={{ borderColor: "#374151" }} />

      {/* Categorías */}
      <Box sx={{ px: 2, py: 1 ,textAlign:"center" }}>
        <Typography
          variant="overline"
          sx={{
            color: theme.palette.text.secondary,
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >MODALIDADES
        </Typography>

      </Box>

      <List sx={{ px: 1, overflowY: "auto", flex: 1 }}>
        {categories.map((category) => {
          const isSelected = selectedCategory === category.key
          return (
            <ListItem key={category.key} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => {
                  onCategoryChange(category.key)
                  if (!isDesktop) onClose?.()
                }}
                sx={{
                  bgcolor: isSelected ? theme.palette.primary.main : "transparent",
                  color: isSelected ? theme.palette.primary.contrastText : theme.palette.text.secondary,
                  "&:hover": {
                    bgcolor: isSelected
                      ? theme.palette.primary.dark
                      : alpha(theme.palette.action.hover, 0.1),
                  },

                  borderRadius: 2,
                  px: 2,
                  py: 1,
                  mx: 1,

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
                    bgcolor: isSelected ? theme.palette.primary.light : "#4b5563",
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


    </Drawer>
  )
}

export default FilterSidebar
