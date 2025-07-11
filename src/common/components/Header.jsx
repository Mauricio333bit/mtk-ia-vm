"use client"
import { Box, Modal, Tooltip } from "@mui/material"
import { Brain, BrainCircuit, CircleUserRound } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginFormModal from "../LoginForm"
const Header = () => {
  const navigate = useNavigate()
  const [showLoginModal, setShowLoginModal] = useState(false)

  const openModalLogin = () => {
    setShowLoginModal(true)
  }
  const closeModalLogin = () => {
    setShowLoginModal(false)
  }

  return (
    <header className="bg-gray-900 border-b border-gray-800 fixed top-0 z-30">
      <div className="px-10 w-screen mx-auto py-4">
        <div className="flex items-center justify-between flex-col md:flex-row gap-2">
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <img
              src="/VM_logo1.png"
              alt="VM Logo"
              className="h-12 w-auto"
            />
          </div>

          <div className="text-right flex items-center gap-2 text-cyan-400">
            {/* <Tooltip title="Login" arrow>
              <button className="hover:cursor-pointer" onClick={openModalLogin}>
                <CircleUserRound size={34} strokeWidth={1.5} />
              </button>
            </Tooltip> */}

            <BrainCircuit className="size-8 pt-1  " />
            <h2 className=" text-3xl font-bold tracking-wide">AI</h2>

          </div>

        </div>
      </div>
      <Modal open={showLoginModal} onClose={closeModalLogin}>
        <Box className="bg-gray-900 text-white rounded-lg p-6 w-[400px] mx-auto mt-40">
          <LoginFormModal isOpen={showLoginModal} onClose={closeModalLogin}/>
          <button onClick={closeModalLogin} className="mt-4 text-sm text-cyan-300 underline">Cerrar</button>
        </Box>
      </Modal>
    </header>

  )
}

export default Header
