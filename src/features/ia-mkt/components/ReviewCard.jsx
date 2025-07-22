import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Star } from "lucide-react";

const ReviewCard = ({ institucion, usuario, comentario, valoracion }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: "transparent",
        color: theme.palette.primary.main,
        borderRadius: 3,
        p: 3,
        boxShadow: 3,
        width: 320,
        mx: 1,
        border: `1px solid ${theme.palette.divider}`,
        height: 175,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="subtitle1" fontWeight="bold">
          {usuario}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {institucion}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              color={
                i < valoracion
                  ? theme.palette.warning.main
                  : theme.palette.grey[400]
              }
              fill={i < valoracion ? theme.palette.warning.main : "none"}
            />
          ))}
        </Box>
      </Box>
      <Typography variant="body2">{comentario}</Typography>
    </Box>
  );
};

export default ReviewCard;
