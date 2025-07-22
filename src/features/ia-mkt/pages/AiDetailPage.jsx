"use client"
import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft, Brain, Activity, Zap, Shield, BookmarkCheck, Eye, BadgeInfo, X } from "lucide-react"
import NeuNet from "../../../common/components/NeuralNetwork"
import FeatureBadge from "../components/FeatureBadge"
import { featuresConfig } from "../../../data/featuresConfig"

import ButtonVm from "../../../common/components/ButtonVm"
import { Box, Chip, IconButton, Modal, Stack } from "@mui/material"
import ImageGallery from "../components/ImageGallery"
import ContactForm from "../../../common/ContactForm"
import UseModeSection from "../components/UseModeSection"
import ReviewsSection from "../components/ReviewSection"
import { useEffect, useState } from "react"
import { alpha, useTheme } from "@mui/material/styles"

const AIDetailPage = ({ products }) => {
  const theme = useTheme()
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])
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
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (

    <Box sx={{ mt: { xs: 14, md: 10, backgroundColor: alpha(theme.palette.background.default, 0.01) }, p: 2, height: "100%" }}>

      <div className="relative  pt-1 px-6 ">
        {/* Background elements */}
        <div className="absolute inset-0 network-bg opacity-50" />
        <div className="absolute top-44 right-10 w-96 h-96 opacity-40 ">
          <div className="w-full h-full rounded-full border-2 border-cyan-100 animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-cyan-100 animate-ping" />
        </div>
        <NeuNet />


      </div>
      <div id="section-detalles" className=" mx-auto p-6 relative  ">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-start border-pink-50 border-2">
          {/* Left side - Content */}
          <div className=" my-1 space-y-2  flex flex-col justify-between  w-full border-pink-50 border-2">
            <div className="flex flex-col md:flex-row gap-2 items-center">
              <h1 id="product-ia-name" className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">{product.nombre}</h1>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
                <Brain className="w-6 h-6 text-primary" />
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
              {/* <ButtonVm sx={{ width: "100%" }} variant="primary" startIcon={<BookmarkCheck />} animateIcon={true} animationType="bounce">Adquirir servicio</ButtonVm> */}


              <ButtonVm onClick={handleOpen} sx={{ width: "100%" }} variant="secondary" startIcon={<BadgeInfo />} animateIcon={true} animationType="wobble" disabled={product.habilitado == "0"} >Contratar Servicio</ButtonVm>

            </Box>


          </div>

          {/* Right side - Medical imagery */}
          <div className=" container overflow-hidden my-1 border-pink-50 border-2 ">
            {product.patologias?
            <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
              Patologias detectadas
            </h2>:""}
            {product.patologias? product.patologias.length > 0 && (
              <Stack direction="row" spacing={1}  my={2} color={theme.palette.primary.main}>
                {product.patologias.map((patologia, index) => (
                  <Chip
                    key={index}
                    label={patologia}
                    variant="outlined"
                    sx={{
                      fontSize: "1rem",       
                      height: 40,             
                      mx: 1,                  
                      borderRadius: "8px"    
                    }}
                  />
                ))}
              </Stack>
            ):""}
            <ImageGallery images={product.imagen} />

            {/* Floating AI indicator */}

            <Box sx={{ position: "absolute", top: -4, right: -4, backgroundColor: theme.palette.primary.main, px: 6, py: 2, borderRadius: 3 }}>
              <span className="font-medium">{product.categoria}</span>
            </Box>

          </div>
        </div>
      </div>
      <UseModeSection
        titulo="Modo de uso del servicio"
        descripcion={product.modoUso.descripcion}
        videoUrl={product.modoUso.videoTutorial} // Este link deberia llevar a un video donde se muestre el modo de uso de la herramienta en film
      />


      {/* <ReviewsSection reviews={sampleReviews} handleOpen={handleOpen} /> */}

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxHeight: "90%",
            maxWidth: "800px",
            bgcolor: "#1f2937",
            borderRadius: 2,
            boxShadow: 24,
            p: 0,
            overflow: "hidden",
          }}
        >

          <IconButton onClick={handleClose} sx={{ color: "#fff" }}>
            <X />
          </IconButton>


          {/* Iframe del formulario externo */}
          <iframe
            src="https://share.hsforms.com/1gqWQp1wRQimX7oV3VWWuugnoqvq"
            width="100%"
            height="600px"
            style={{ border: "none" }}
            title="Formulario de contacto externo"
          />
        </Box>
      </Modal>

      {/* <ContactForm></ContactForm> */}
    </Box>


  )
}

export default AIDetailPage