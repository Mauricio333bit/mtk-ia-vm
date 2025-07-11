// components/PaginationBar.jsx
import React from "react"
import { Box, Typography, Pagination, PaginationItem } from "@mui/material"
import { ChevronLeft, ChevronRight } from "lucide-react"

const PaginationBar = ({
  totalItems,
  currentPage,
  itemsPerPage = 9,
  onPageChange
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  if (totalPages <= 1) return null

  return (
   <Box
  sx={{
    position: "fixed",
    bottom: 0,
    left: { xs: 0, lg: "260px" }, // compensar el sidebar en desktop
    width: { xs: "100%", lg: "calc(100% - 260px)" }, // respeta márgenes laterales
    display: "flex",
    justifyContent: "center",
    bgcolor: "#0f172a",
    py: 1,
    px: 2,
    zIndex: 50
  }}
>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 2,
          bgcolor: "#0f172a",
          px: 2,
          py: 1,
          width: "100%",
          maxWidth: "720px"
        }}
      >
        {/* Paginación MUI */}
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(e, page) => onPageChange(page)}
          variant="outlined"
          shape="rounded"
          siblingCount={2}
          renderItem={(item) => (
            <PaginationItem
              components={{ previous: ChevronLeft, next: ChevronRight }}
              {...item}
              sx={{
                bgcolor: item.selected ? "#06b6d4" : "#374151",
                color: item.selected ? "#fff" : "#d1d5db",
                fontWeight: "bold",
                "&:hover": {
                  bgcolor: "#4b5563"
                }
              }}
            />
          )}
        />

        
      </Box>
    </Box>
  )
}

export default PaginationBar
