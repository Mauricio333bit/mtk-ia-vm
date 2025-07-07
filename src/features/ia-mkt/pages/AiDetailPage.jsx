"use client"
import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft, Brain, Activity, Zap, Shield } from "lucide-react"
import Header from "../components/Header"
import NeuNet from "../components/NeuralNetwork"
import FeatureBadge from "../components/FeatureBadge" // Importa el componente
import { featuresConfig } from "../../../data/featuresConfig" // Importa el catálogo

const AIDetailPage = ({ products }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  // Asegura parseo correcto del ID
  const productId = parseInt(id, 10)
  const product = products.find((p) => p.id === productId)

  // Calcula productFeatures usando el índice
  const productFeatures = product?.features?.map(index => featuresConfig[index]).filter(Boolean) || []

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-900">
      <Header />

      <div className="relative overflow-hidden px-6">
        {/* Background elements */}
        <div className="absolute inset-0 network-bg opacity-50" />
        <div className="absolute top-20 right-10 w-96 h-96 opacity-40">
          <div className="w-full h-full rounded-full border-2 border-cyan-100 animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-cyan-100 animate-ping" />
        </div>
        <NeuNet/>
        
        <div className="relative z-10 container mx-auto py-6">
          <div className="grid lg:grid-cols-2 gap-12 items-between">
            {/* Left side - Content */}
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-2 items-center">
                <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">{product.nombre}</h1>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
                  <Brain className="w-6 h-6 text-cyan-400" />
                  CARACTERÍSTICAS
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">{product.descripcion}</p>
              </div>

              {/* Features del producto */}
              {productFeatures.length > 0 && (
                <div className="mb-4">
                 
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {productFeatures.map((feature, index) => (
                      <FeatureBadge key={index} feature={feature} />
                    ))}
                  </div>
                </div>
              )}

              <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Adquirir servicio
              </button>
            </div>

            {/* Right side - Medical imagery */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Main brain scan */}
                <div className="col-span-2 bg-gray-800/50 border border-cyan-400/30 rounded-lg p-4 aspect-video flex items-center justify-center">
                  <img
                    src={`/img/${product.imagen[0]}`}
                    alt="Medical scan"
                    className="w-full h-full object-cover rounded opacity-80"
                  />
                </div>

                {/* Smaller medical images */}
                {product.imagen[1] && (
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 aspect-square flex items-center justify-center">
                    <img
                      src={`/img/${product.imagen[1]}`}
                      alt="CT scan"
                      className="w-full h-full object-cover rounded opacity-70"
                    />
                  </div>
                )}
                {product.imagen[2] && (
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 aspect-square flex items-center justify-center">
                    <img
                      src={`/img/${product.imagen[2]}`}
                      alt="X-ray"
                      className="w-full h-full object-cover rounded opacity-70"
                    />
                  </div>
                )}
              </div>

              {/* Floating AI indicator */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg">
                <span className="font-medium">{product.categoria}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIDetailPage