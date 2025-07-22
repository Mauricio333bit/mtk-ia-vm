import { useState, useMemo } from "react"
import AICard from "./AiCard"
import { Box, Grid, Pagination } from "@mui/material"
import PaginationBar from "./PaginationBar"
import { SearchX } from "lucide-react"

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
  if (products.length == 0 ) {
    return (
      <Box component="section" pt={{ xs: 8, md: 2, lg: 0 }} sx={{display: "flex", pb: 16,px:5, mt:10, justifyContent:"center", gap:2,flexDirection:"column",alignItems:"center", position:"relative",width:"100%", height:"100%", top:50  }}>
        <p className="text-gray-400 text-lg text-center">No se encontraron coincidencias. </p>
        <SearchX size={50} />
      </Box>
    )
  }

  return (

    <Box component="section" pt={{ xs: 13, md: 2, lg: 0 }} sx={{display: "flex", pb: 16,px:5, mt:10 }}>
      <Grid container spacing={6}>
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