"use client"

import { useState, useMemo, useEffect } from "react"
import Header from "../components/Header"
import FilterSidebar from "../components/FilterSideBar"
import CardList from "../components/CardList"
import { Menu } from "lucide-react"

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

  const filteredProducts = useMemo(() => {

    return selectedCategory === "ALL" ? products : products.filter((product) => product.categoria === selectedCategory)
  }, [products, selectedCategory])

  return (
    <div className="min-h-screen bg-gray-900 network-bg">
      {/* Header fijo en la parte superior */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900">
        <Header />
        <p className="text-xl text-center font-bold text-cyan-400 tracking-wide py-2 border-t border-gray-700 px-3 md:px-0">
          Descubre servicios de Inteligencia Artificial para tus necesidades.
        </p>
      </div>
      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Fijo pero debajo del header */}
      <div
        className={`
            fixed mt-4 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          `}
      >
        <FilterSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>

      {/* Main content - Con margen izquierdo en desktop */}
      <div className="lg:ml-64 mt-30">
        {/* Mobile menu button */}
        <div className="lg:hidden p-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 pb-0">
          <CardList
            products={filteredProducts}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>

    </div>
  )
}

export default HomePage