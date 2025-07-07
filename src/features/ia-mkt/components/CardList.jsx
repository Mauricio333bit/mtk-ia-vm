import { useState, useMemo } from "react"
import AICard from "./AiCard"
import { ChevronLeft, ChevronRight } from "lucide-react"

const CardList = ({ products,currentPage,setCurrentPage }) => {
 
  const itemsPerPage = 9

  // Calcular productos paginados
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return products.slice(startIndex, endIndex)
  }, [products, currentPage])

  // Calcular total de páginas
  const totalPages = Math.ceil(products.length / itemsPerPage)

  // Funciones de navegación
  const goToPage = (page) => {
    setCurrentPage(page)
    // Scroll hacia arriba cuando cambias de página
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1)
    }
  }

  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1)
    }
  }

  // Generar números de página visibles
  const getVisiblePages = () => {
    const delta = 2 // Páginas a mostrar a cada lado de la actual
    const range = []
    const rangeWithDots = []

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...')
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages)
    } else {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots.filter((page, index, arr) => arr.indexOf(page) === index)
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
    <div className="space-y-8 static pb-4 px-1 flex justify-center">
      {/* Grid de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
        {paginatedData.map((product) => (
          <AICard key={product.id} product={product} />
        ))}
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="flex flex-col items-center space-y-2 fixed bottom-0 z-50 bg-gray-900   px-2 py-2 object-center w-9/12 rounded-lg mx-auto">
          {/* Controles de paginación */}
          <div className="flex items-center space-x-2">
            {/* Botón anterior */}
            <button
              onClick={goToPrevious}
              disabled={currentPage === 1}
              className={`
                p-2 rounded-lg transition-colors
                ${currentPage === 1 
                  ? 'bg-gray-800 text-gray-600 cursor-not-allowed' 
                  : 'bg-gray-700 text-white hover:bg-gray-600'
                }
              `}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Números de página */}
            <div className="flex items-center space-x-1">
              {getVisiblePages().map((page, index) => (
                <button
                  key={index}
                  onClick={() => typeof page === 'number' && goToPage(page)}
                  disabled={page === '...'}
                  className={`
                    px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${page === currentPage
                      ? 'bg-cyan-600 text-white'
                      : page === '...'
                      ? 'text-gray-500 cursor-default'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                    }
                  `}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Botón siguiente */}
            <button
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className={`
                p-2 rounded-lg transition-colors
                ${currentPage === totalPages 
                  ? 'bg-gray-800 text-gray-600 cursor-not-allowed' 
                  : 'bg-gray-700 text-white hover:bg-gray-600'
                }
              `}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        {/* Info de página actual */}
          <div className="text-sm text-gray-400">
            Mostrando {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, products.length)} de {products.length} productos
          </div>
        </div>
      )}
    </div>
  )
}

export default CardList