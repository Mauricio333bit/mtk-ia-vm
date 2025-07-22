"use client"
import { Box, Modal, Tooltip } from "@mui/material"
import { Brain, BrainCircuit, CircleUserRound, Search, Store } from "lucide-react"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import LoginFormModal from "../LoginForm"
import { alpha, useTheme } from "@mui/material/styles"
import ToggleThemeButton from "./ToggleThemeButton"
const Header = ({ onKeywordChange }) => {
  const navigate = useNavigate()
  const [showLoginModal, setShowLoginModal] = useState(false)
  const location = useLocation()
  const isDetailPage = location.pathname.startsWith("/product/")
  const openModalLogin = () => {
    setShowLoginModal(true)
  }
  const closeModalLogin = () => {
    setShowLoginModal(false)
  }
  const theme = useTheme()
  return (

    <Box sx={{ position: "fixed", top: 0, zIndex: 30, backgroundColor: theme.palette.background.default }}>

      <div className="px-10 w-screen mx-auto">
        <div className="flex items-center justify-between flex-col md:flex-row gap-2 md:h-18 h-auto pt-4 md:pt-2">
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <img
              src="/orquestador/VM_logo1.png"
              alt="VM Logo"
              className="h-12 w-auto"
            />
          </div>
          <Box sx={{ display:"flex", alignItems:"center",gap:2, color:theme.palette.text.secondary}}>

         
            {/* <Tooltip title="Login" arrow>
              <button className="hover:cursor-pointer" onClick={openModalLogin}>
                <CircleUserRound size={34} strokeWidth={1.5} />
              </button>
            </Tooltip> */}

            {/* <BrainCircuit className="size-8 pt-1 " /> */}
            <h2 className=" text-2xl font-bold tracking-wide">IA Marketplace</h2>
            {/* <Store className="size-8 pt-1 " /> */}
           {/* <ToggleThemeButton></ToggleThemeButton> */}
          </Box>
          {!isDetailPage && (
            <Box sx={{ py: 2, width: { sx: "100%" }, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <input
                type="search"
                placeholder="Busqueda rápida"
                className="border border-gray-600 bg-gray-800 text-white p-2 rounded w-11/12"
                onChange={onKeywordChange}
              />
              <Search className="md:hidden mx-3" />
            </Box>
          )}
        </div>
      </div>
      {/* <Modal open={showLoginModal} onClose={closeModalLogin}>
        <Box className="bg-gray-900 text-white rounded-lg p-6 w-[400px] mx-auto mt-40">
          <LoginFormModal isOpen={showLoginModal} onClose={closeModalLogin}/>
          <button onClick={closeModalLogin} className="mt-4 text-sm text-cyan-300 underline">Cerrar</button>
        </Box>
      </Modal> */}
    </Box>


  )
}

export default Header
