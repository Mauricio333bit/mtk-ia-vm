"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import FilterSidebar from "../components/FilterSideBar"
import CardList from "../components/CardList"

const HomePage = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState("ALL")
  const [keyword, setKeyWord] = useState()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
   const handleChangeSearch = (event) => {
    console.log(event.target.value);
    setKeyWord(event.target.value);
    console.log(keyword);
  };
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    setCurrentPage(1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [selectedCategory])
  const categories = useMemo(() => {
    const cats = ["ALL", ...new Set(products.map((product) => product.categoria))]
    return cats.map((cat) => ({
      key: cat,
      label: cat,
      count: cat === "ALL" ? products.length : products.filter((p) => p.categoria === cat).length,
    }))
  }, [products])
   const containerRef = useRef()
  const filteredProducts = useMemo(() => {
  const trimmedKeyword = keyword?.toLowerCase().trim()

  // Si hay keyword, filtramos entre todos los productos
  if (trimmedKeyword) {
    const words = trimmedKeyword.split(/\s+/) // separa por espacios

    return products.filter((product) => {
      const nombre = product.nombre.toLowerCase()
      const descripcion = product.descripcion.toLowerCase()

      // Cada palabra debe existir en nombre o descripcion
      return words.every((word) =>
        nombre.includes(word) || descripcion.includes(word)
      )
    })
  }

  // Si no hay keyword, filtrar por categoría
  return selectedCategory === "ALL"
    ? products
    : products.filter((product) => product.categoria === selectedCategory)
}, [products, selectedCategory, keyword])



 return (
    <div className="min-h-screen bg-gray-900 network-bg flex" ref={containerRef}>
      <FilterSidebar
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        container={containerRef.current}
        onKeywordChange={handleChangeSearch}
      />
      <CardList
        products={filteredProducts}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default HomePage