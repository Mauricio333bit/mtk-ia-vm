import { useNavigate } from "react-router-dom"
import { Heart, Eye } from "lucide-react"

const AICard = ({ product }) => {
  const navigate = useNavigate()

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`)
  }

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-cyan-600 flex flex-col h-full">
      {/* Imagen */}
      <div className="relative h-48 bg-gray-700 overflow-hidden">
        <img 
          src={`/img/${product.imagen[0]}`} 
          alt={product.nombre} 
          className="w-full h-full object-cover" 
        />
        {/* Botón Favorito */}
        <button className="absolute top-3 right-3 p-2 bg-cyan-900 bg-opacity-50 rounded-full hover:bg-opacity-70 transition-all">
          <Heart className="w-5 h-5 text-white hover:text-cyan-400" />
        </button>
        {/* Categoría */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-cyan-600 text-white text-xs font-semibold rounded-full">
          {product.categoria}
        </div>
      </div>

      {/* Contenido texto */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-white font-bold text-lg mb-3 line-clamp-2">{product.nombre}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{product.descripcion}</p>

        {/* Botones al final */}
        <div className="mt-auto flex flex-col gap-3">
          <button
            onClick={handleViewDetails}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Ver detalles
          </button>
          <button className="w-full bg-blue-600 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 group hover:scale-105 transition duration-700 ease-in-out">
            Adquirir servicio
          </button>
        </div>
      </div>
    </div>
  )
}

export default AICard