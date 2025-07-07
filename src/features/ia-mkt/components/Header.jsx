"use client"
import { Brain, BrainCircuit } from "lucide-react"
import { useNavigate } from "react-router-dom"
const Header = () => {
  const navigate = useNavigate()

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-30">
      <div className="px-10 w-screen mx-auto py-4">
        <div className="flex items-center justify-between flex-col md:flex-row gap-2">
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <img 
              src="/VM_logo1.png"  
              alt="VM Logo"
              className="h-12 w-auto"
            />
          </div>

          <div className="text-right flex items-center gap-2">
            
            <BrainCircuit className="size-8 pt-1  text-cyan-400"/>
            <h2 className=" text-3xl font-bold text-cyan-400 tracking-wide">AI</h2> 
        
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
