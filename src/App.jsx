import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import { aiProductsData } from "./data/aiProducts"
import HomePage from "./features/ia-mkt/pages/HomePage"
import AIDetail from "./features/ia-mkt/pages/AiDetailPage"
function App() {
  return (
   
      <div className="min-h-screen bg-gray-900 overflow-hidden">
        <Router>
        <Routes>
          <Route path="/" element={<HomePage products={aiProductsData} />} />
          <Route path="/product/:id" element={<AIDetail products={aiProductsData} />} />
        </Routes>
        </Router>
      </div>

  )
}

export default App
