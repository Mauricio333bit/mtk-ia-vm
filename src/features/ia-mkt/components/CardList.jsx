import { useState, useMemo } from "react"
import AICard from "./AiCard"
import { Box, Grid, Pagination } from "@mui/material"
import PaginationBar from "./PaginationBar"

const CardList = ({ products, currentPage, setCurrentPage }) => {

  const itemsPerPage = 9

  // Calcular productos paginados
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return products.slice(startIndex, endIndex)
  }, [products, currentPage])

  // Funciones de navegación
  const goToPage = (page) => {
    setCurrentPage(page)
    // Scroll hacia arriba cuando cambias de página
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Si no hay productos
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">No se encontraron productos.</p>
      </div>
    )
  }

  return (

    <Box component="section" sx={{ display: "flex", pb: 16,px:2, mt:10, }}>
      <Grid container spacing={3}>
        {paginatedData.map((product) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={product.id}>
            <AICard key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
      <PaginationBar
        totalItems={products.length}
        currentPage={currentPage}
        itemsPerPage={9}
        onPageChange={goToPage}
      />
    </Box>

  )
}

export default CardList