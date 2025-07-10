"use client"
import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft, Brain, Activity, Zap, Shield, BookmarkCheck, Eye, BadgeInfo } from "lucide-react"
import NeuNet from "../../../common/components/NeuralNetwork"
import FeatureBadge from "../components/FeatureBadge"
import { featuresConfig } from "../../../data/featuresConfig"

import ButtonVm from "../../../common/components/ButtonVm"
import { Box } from "@mui/material"
import ImageGallery from "../components/ImageGallery"
import ContactForm from "../../../common/ContactForm"
import UseModeSection from "../components/UseModeSection"
import ReviewsSection from "../components/ReviewSection"

const AIDetailPage = ({ products }) => {
  const { id } = useParams()
  const navigate = useNavigate()

  // Asegura parseo correcto del ID
  const productId = parseInt(id, 10)
  const product = products.find((p) => p.id === productId)
  const sampleReviews = [
    {
      institucion: "Hospital Central",
      usuario: "María López",
      comentario: "Excelente atención y rapidez en los resultados.",
      valoracion: 5,
    },
    {
      institucion: "Clínica del Sur",
      usuario: "Juan Pérez",
      comentario: "Muy buen servicio, aunque podría mejorar la comunicación.",
      valoracion: 4,
    },
    {
      institucion: "Sanatorio Norte",
      usuario: "Ana Torres",
      comentario: "Todo muy profesional. Muy conforme.",
      valoracion: 5,
    },
    {
      institucion: "Hospital Municipal",
      usuario: "Carlos Gómez",
      comentario: "Tuve algunos retrasos pero el personal fue amable.",
      valoracion: 3,
    },
    {
      institucion: "Centro Médico Vida",
      usuario: "Lucía Martínez",
      comentario: "La app es muy intuitiva y útil.",
      valoracion: 5,
    },
    {
      institucion: "Instituto de Diagnóstico",
      usuario: "Ricardo Núñez",
      comentario: "Podrían notificar más rápido los resultados.",
      valoracion: 3,
    },
    {
      institucion: "Clínica San Juan",
      usuario: "Paula Ríos",
      comentario: "Excelente, muy recomendable.",
      valoracion: 5,
    },
    {
      institucion: "Hospital Universitario",
      usuario: "Federico A.",
      comentario: "Buena experiencia en general.",
      valoracion: 4,
    },
    {
      institucion: "Centro de Salud 12",
      usuario: "Valentina F.",
      comentario: "Fácil de usar, volvería a elegirlos.",
      valoracion: 5,
    },
  ];
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
    <div className="bg-gray-900 mt-20">
      <div className="relative overflow-hidden pt-1 px-6">
        {/* Background elements */}
        <div className="absolute inset-0 network-bg opacity-50" />
        <div className="absolute top-20 right-10 w-96 h-96 opacity-40">
          <div className="w-full h-full rounded-full border-2 border-cyan-100 animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-cyan-100 animate-ping" />
        </div>
        <NeuNet />

        <div className="relative z-10 container  mx-auto py-6 ">
          <div className="grid lg:grid-cols-2 gap-12 items-between">
            {/* Left side - Content */}
            <div className="space-y-8 h-full flex flex-col justify-between">
              <div className="flex flex-col md:flex-row gap-2 items-center">
                <h1 id="product-ia-name" className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">{product.nombre}</h1>
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
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <ButtonVm sx={{ width: "100%" }} variant="primary" startIcon={<BookmarkCheck />} animateIcon={true} animationType="bounce">Adquirir servicio</ButtonVm>
                <a href="#contact-form" style={{ textDecoration: 'none' }}>

                  <ButtonVm sx={{ width: "100%" }} variant="secondary" startIcon={<BadgeInfo />} animateIcon={true} animationType="wobble">Solicita mas informacion</ButtonVm>
                </a>
              </Box>


            </div>

            {/* Right side - Medical imagery */}
            <div className="relative">

              <ImageGallery images={product.imagen} />

              {/* Floating AI indicator */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg">
                <span className="font-medium">{product.categoria}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UseModeSection
        titulo="Modo de uso del servicio"
        descripcion={product.modoUso.descripcion}
        videoUrl={product.modoUso.videoTutorial} // Reemplaza con el URL real
      />


      <ReviewsSection reviews={sampleReviews} />


      
      <ContactForm></ContactForm>
      
    </div>
  )
}

export default AIDetailPage