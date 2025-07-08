import React from "react"
import { useNavigate } from "react-router-dom"
import { Box, Card, CardMedia, CardContent, Typography, Button, Chip, IconButton } from "@mui/material"
import { Heart, Eye, BookmarkCheck } from "lucide-react"
import ButtonVm from "../../../common/components/ButtonVm"

const AICard = ({ product }) => {
  const navigate = useNavigate()

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`)
  }

  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        maxHeight: "460px",
        bgcolor: "#1f2937",
        borderRadius: 2,
        border: "1px solid #374151",
        "&:hover": {
          borderColor: "#06b6d4"
        }
      }}
      elevation={3}
    >
      <Box sx={{ position: "relative", height: 192, bgcolor: "#374151", overflow: "hidden" }}>
        <CardMedia
          component="img"
          image={`/img/${product.imagen[0]}`}
          alt={product.nombre}
          sx={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
        <IconButton
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            bgcolor: "rgba(16, 29, 31, 0.7)", // bg-cyan-900 bg-opacity-50
            "&:hover": {
              bgcolor: "rgba(6, 182, 212, 0.5)"
            },
            color: "white"
          }}
          aria-label="favorite"
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
            bgcolor: "#06b6d4", // cyan-600
            color: "white",
            fontWeight: "bold",
            fontSize: 12,
            px: 1.5,
            py: 0.5,
            borderRadius: 1
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            color: "white",
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
            color: "#d1d5db", // gray-300
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
           <ButtonVm sx={{ width: "100%" }} variant="secondary" startIcon={<Eye />} animateIcon={true} animationType="wobble" onClick={handleViewDetails}>Ver detalles</ButtonVm>
          <ButtonVm sx={{ width: "100%" }} variant="primary" startIcon={<BookmarkCheck/>} animateIcon={true} animationType="bounce">Adquirir servicio</ButtonVm>
        </Box>
      </CardContent>
    </Card>
  )
}

export default AICard
