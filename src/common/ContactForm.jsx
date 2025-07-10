import { useForm } from "react-hook-form"
import InputVM from "./components/InputVM"
import ButtonVm from "../../src/common/components/ButtonVm"
import { BookmarkCheck, Send } from "lucide-react"
import { Box } from "@mui/material"
import SelectVM from "./components/SelectVm"
import { positionOptions, consutlOptions } from "../data/contactFormData"
import NeuralNetwork from "./components/NeuralNetwork"

import withReactContent from 'sweetalert2-react-content'
import Swal from "sweetalert2"
export default function App() {
  const MySwal = withReactContent(Swal)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }, control
  } = useForm()


  const onSubmit = (data) => {
    MySwal.fire({

      background: '#0f172a',
      backdrop: 'rgba(0, 0, 0, 0.6)',
      didOpen: () => {
        MySwal.showLoading();
      },
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false
    });

    const telefonoCompleto = `${data.telefono_country || ""}${data.telefono_number || data.telefono || ""}`.replace(/\s+/g, '');

    const datosFinales = {
      ...data,
      telefono: telefonoCompleto,
    };
    delete datosFinales.telefono_country;
    delete datosFinales.telefono_number;

    console.log("Datos enviados:", datosFinales);

    // Simulación de envío (2 segundos)
    setTimeout(() => {
      MySwal.fire({
        title: '<p class="text-cyan-300 text-xl font-semibold">¡Gracias por tu interés!</p>',
        html: `
    <p class="text-gray-300 mb-4">La solicitud ha sido enviada correctamente. <br> Pronto nos pondremos en contacto contigo.</p>
    <button id="close-btn" class="mt-2 bg-cyan-500 hover:bg-cyan-400 text-white font-medium px-4 py-2 rounded-md transition">
      Cerrar
    </button>
  `,
        background: '#0f172a',
        backdrop: 'rgba(0, 0, 0, 0.6)',
        showConfirmButton: false,
        didOpen: () => {
          document.getElementById('close-btn').addEventListener('click', () => {
            Swal.close()
          })
        }
      });

    }, 2000);
  };






  return (
    <form id="contact-form" className="relative mx-auto border-none rounded-md p-2 flex flex-col justify-center text-center align-center px-8 mb-2 sm:w-11/12 md:w-8/12 gap-6 sm:h-full">
      <h3 className="text-2xl font-bold text-cyan-400 py-4">Solicitud de contacto</h3>
      <Box display={"flex"} flexDirection={{ sm: "column", md: "row" }} gap={2}>
        <InputVM
          label="Nombre"
          name="nombre"
          register={register}
          validation={{ required: 'El nombre es obligatorio' }}
          error={errors.nombre}
          color="primary" />
        <InputVM
          label="Apellido"
          name="apellido"
          register={register}

          error={errors.apellido}
          color="primary" />
        <InputVM
          label="Correo"
          name="correo"
          register={register}
          validation={{ required: 'El correo es obligatorio' }}
          error={errors.correo}
          color="primary" />
      </Box>
      <InputVM
        label="Nombre de la institucion"
        name="institucion"
        register={register}
        validation={{ required: 'Debes insertar el nombre de tu institucion' }}
        error={errors.institucion}
        color="primary" />
      <Box display={"flex"} flexDirection={{ sm: "column", md: "row" }} gap={2} alignItems={"center"}>


        <InputVM
          label="Pais de contacto"
          name="pais"
          register={register}

          error={errors.pais}
          color="primary" />
        <InputVM
          label="Telefono"
          name="telefono"
          register={register}

          error={errors.telefono}
          color="primary" />


      </Box>


      <SelectVM
        name="posicion"
        control={control}

        options={positionOptions}
        color="primary"
        error={errors.posicion}

        placeholder="Posicion/Cargo"


        id="select-posicion"
      />
      <SelectVM
        name="consulta"
        control={control}

        options={consutlOptions}
        color="primary"
        error={errors.positions}

        placeholder="Tipo de consulta"


        id="select-consult"
      />
      <NeuralNetwork top="14rem" left="44rem" />

      <ButtonVm onClick={handleSubmit(onSubmit)} sx={{ width: "50%", my: "1rem", mx: "auto" }} variant="primary" startIcon={<Send />} animateIcon={true} animationType="pulseOut">ENVIAR</ButtonVm>
    </form>
  )
}