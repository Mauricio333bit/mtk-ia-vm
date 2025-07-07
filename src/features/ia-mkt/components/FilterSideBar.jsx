"use client"
import { X } from "lucide-react"

const FilterSidebar = ({ categories, selectedCategory, onCategoryChange, onClose }) => {
  return (
    <div className="bg-gray-800 border-r border-gray-700 flex flex-col">
      {/* Header del sidebar */}
      <div className="flex-shrink-0 p-6 border-b border-gray-700">
        <div className="flex items-center justify-between lg:justify-start">
          <h3 className="text-white font-semibold w-full text-center">MODALITY</h3>
          <button 
            onClick={onClose} 
            className="p-2 text-gray-400 hover:text-white transition-colors lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Lista de categorías - scrolleable */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => {
                onCategoryChange(category.key)
                onClose?.()
              }}
              className={`
                w-full text-left px-4 py-3 rounded-lg transition-all duration-200
                ${
                  selectedCategory === category.key
                    ? "bg-cyan-600 text-white shadow-lg"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }
              `}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{category.label}</span>
                <span
                  className={`
                    text-sm px-2 py-1 rounded-full
                    ${selectedCategory === category.key ? "bg-cyan-700 text-cyan-100" : "bg-gray-600 text-gray-300"}
                  `}
                >
                  {category.count}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FilterSidebar