import { HashRouter as Router, Routes, Route } from "react-router-dom"


import { aiProductsData } from "./data/aiProducts"
import HomePage from "./features/ia-mkt/pages/HomePage"
import AIDetail from "./features/ia-mkt/pages/AiDetailPage"
import Layout from "./Layaout"
import { AnimationsGlobalStyles } from "./utils/animations"
function App() {
  return (

    <div className="min-h-screen bg-gray-900 overflow-hidden">
      <AnimationsGlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage products={aiProductsData} />} />
            <Route path="/product/:id" element={<AIDetail products={aiProductsData} />} />
          </Route>
        </Routes>
      </Router>
    </div>

  )
}

export default App
