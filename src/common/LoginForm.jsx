import { useForm } from "react-hook-form";
import InputVM from "./components/InputVM";
import ButtonVm from "./components/ButtonVm";


const LoginFormModal = ({ isOpen, onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Datos de login:", data);
    // Aquí puedes hacer la petición de login
    onClose(); // Cierra el modal después del envío
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
     
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md mx-auto relative animate-fade-in gap-3 flex flex-col justify-center">
         <img
              src="/VM_logo1.png"
              alt="VM Logo"
              className="h-12 w-auto"
            />
        <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">Inicio de Sesión</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col gap-4">
          <InputVM
            label="Correo electrónico"
            name="email"
            register={register}
            validation={{ required: "El correo es obligatorio" }}
            error={errors.email}
            color="primary"
            fullWidth
          />
          <InputVM
            label="Contraseña"
            name="password"
            type="password"
            register={register}
            validation={{ required: "La contraseña es obligatoria" }}
            error={errors.password}
            color="primary"
            fullWidth
          />

          <div className="flex gap-3 mt-6">
            <ButtonVm variant="secondary" onClick={onClose} fullWidth>
              Cancelar
            </ButtonVm>
            <ButtonVm variant="primary" type="submit" fullWidth >
              Ingresar
            </ButtonVm>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginFormModal;