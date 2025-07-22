import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Chip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Heart, Eye } from "lucide-react";
import ButtonVm from "../../../common/components/ButtonVm";

const AICard = ({ product }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        maxHeight: "460px",
        bgcolor: theme.palette.background.default,
        borderRadius: 2,
        border: `2px solid transparent`,
        "&:hover": {
          borderColor: theme.palette.primary.main,
        },
      }}
      elevation={3}
    >
      <Box
        sx={{
          position: "relative",
          height: 192,
          bgcolor: theme.palette.background.default,
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={`${import.meta.env.VITE_BASE_URL}/img/${product.imagen[0]}`}
          alt={product.nombre}
          sx={{ height: "100%", width: "100%", objectFit: "cover" }}
        />

        <IconButton
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            
            bgcolor: "rgba(0,0,0,0.4)",
            "&:hover": {
              bgcolor: theme.palette.primary.main,
            },
            color: theme.palette.common.white,
          }}
        >
          <Heart />
        </IconButton>

        <Chip
          label={product.categoria}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            bgcolor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            fontWeight: "bold",
            fontSize: 12,
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            color: theme.palette.text.primary,
            fontWeight: "bold",
            mb: 1,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.nombre}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            mb: 3,
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.descripcion}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <ButtonVm
            sx={{ width: "100%" }}
            variant="secondary"
            startIcon={<Eye />}
            animateIcon={true}
            animationType="wobble"
            onClick={handleViewDetails}
          >
            Ver detalles
          </ButtonVm>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AICard;
