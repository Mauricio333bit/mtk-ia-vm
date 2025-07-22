import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { CircleArrowLeft, CircleArrowRight, CircleX } from "lucide-react";
import { Masonry } from "@mui/lab";

const ImageGallery = ({ images }) => {
  const [openModal, setOpenModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Función para abrir el modal al hacer clic en una imagen
  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setOpenModal(true);
  };

  // Funciones para navegar entre imágenes en el slider
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="m-1">
      <Masonry columns={{ xs: 1, sm: 2, md: 2 }} spacing={2}>
        {images.map((image, index) => (
          <Box
            key={index}
            onClick={() => handleImageClick(index)}
            sx={{m:1,
              cursor: 'pointer',
             
              overflow: 'hidden',
              "&:hover": {
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
              }
            }}
          >
            <img
              src={`/orquestador/img/${image}`}
              alt={`Imagen ${index + 1}`}
              loading="lazy"
              style={{
                 borderRadius: 10,
                width: '20rem',
                height: 'auto',
                maxHeight:"20rem",
                display: 'block',
                objectFit:"scale-down"
              }}
            />
          </Box>
        ))}
      </Masonry>

      {/* Modal para visualizar la imagen en modo slider */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"


      >
        <Box
          sx={{
            width: '100%',
            height: "100%",
            placeContent: "center",
            background: "rgba(0, 0, 0, 0.85)",
            padding: 2,
            borderRadius: 4,


            outline: "none",
          }}
        >
          {/* Botón para cerrar el modal */}
          <Button
            variant="contained"
            onClick={() => setOpenModal(false)}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 10,
            }}
          ><CircleX size={30} />

          </Button>

          {/* Contenido del slider */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "60vh",
              position: "relative",
              transition: "transform 0.3s ease-in-out", // Transición suave
            }}
          >
            {/* Flecha izquierda para cambiar a la imagen anterior */}
            <Button
              variant="contained"
              color="primary"
              onClick={handlePrevImage}
              sx={{
                position: "absolute",

                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                minWidth: "40px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                padding: 0,
                zIndex: 50,
              }}
            >
              <CircleArrowLeft size={30} />
            </Button>

            {/* Contenedor fijo para la imagen */}
            <Box
              sx={{
                width: "800px",
                height: "600px",
                border: "1px solid rgba(0, 0, 0, 0.85)",
                borderRadius: 8,
                overflow: "hidden",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={`/orquestador/img/${images[currentImageIndex]}`} // Ajusta la ruta según tu estructura
                alt={`Imagen ${currentImageIndex + 1}`}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  transition: "transform 0.3s ease-in-out", // Transición suave
                }}
              />
            </Box>

            {/* Flecha derecha para cambiar a la imagen siguiente */}
            <Button
              variant="contained"
              color="primary"
              onClick={handleNextImage}
              sx={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                minWidth: "40px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                padding: 0,
                zIndex: 50,
              }}
            >
              <CircleArrowRight size={30} />
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ImageGallery;