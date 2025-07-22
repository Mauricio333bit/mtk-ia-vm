"use client"
import { useState, useMemo, useEffect, useRef } from "react"
import FilterSidebar from "../components/FilterSideBar"
import CardList from "../components/CardList"
import { Menu } from "lucide-react"
import { Box } from "@mui/material"
import { useOutletContext } from "react-router-dom"

const HomePage = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState("ALL")
 const { keyword } = useOutletContext()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const containerRef = useRef()

  // 🔁 Reset page y scroll cuando cambia categoría
  useEffect(() => {
    setCurrentPage(1)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [selectedCategory])

  // 🔁 Reset page cuando cambia la búsqueda
  useEffect(() => {
    setCurrentPage(1)
  }, [keyword])

  // 📦 Crear lista de categorías
  const categories = useMemo(() => {
    const cats = ["ALL", ...new Set(products.map(p => p.categoria))]
    return cats.map(cat => ({
      key: cat,
      label: cat,
      count:
        cat === "ALL"
          ? products.length
          : products.filter(p => p.categoria === cat).length,
    }))
  }, [products])

  // 🔍 Lógica de búsqueda y filtrado
const filteredProducts = useMemo(() => {
  const trimmedKeyword = keyword?.toLowerCase().trim()

  // Si hay búsqueda, ignorar categoría y buscar en nombre + descripción
  if (trimmedKeyword) {
    const words = trimmedKeyword.split(/\s+/)
    return products.filter(product => {
      const nombre = product.nombre.toLowerCase()
      const descripcion = product.descripcion.toLowerCase()
      return words.every(word =>
        nombre.includes(word) || descripcion.includes(word)
      )
    })
  }

  // Si no hay búsqueda, filtrar por categoría
  return selectedCategory === "ALL"
    ? products
    : products.filter(p => p.categoria === selectedCategory)
}, [products, selectedCategory, keyword])


  

  return (
    <section className="flex flex-col min-h-screen mt-3">
       {/* 🍔 Botón hamburguesa mobile */}
          {!isSidebarOpen && (
            <button
              className="lg:hidden  fixed top-33 right-8  z-50 text-white"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={32} />
            </button>
          )}
    <div className=" bg-gray-900 network-bg flex relative" ref={containerRef}>
      
      
      
      <FilterSidebar
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        container={containerRef.current}
     
      />

      <CardList
        products={filteredProducts}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    
    </div>
    </section>
    
  )
}

export default HomePage
