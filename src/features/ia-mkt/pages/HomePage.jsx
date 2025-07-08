"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import FilterSidebar from "../components/FilterSideBar"
import CardList from "../components/CardList"

const HomePage = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState("ALL")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
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

    return selectedCategory === "ALL" ? products : products.filter((product) => product.categoria === selectedCategory)
  }, [products, selectedCategory])

 return (
    <div className="min-h-screen bg-gray-900 network-bg flex" ref={containerRef}>
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
  )
}

export default HomePage