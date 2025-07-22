import { useState } from "react"
import { Outlet } from "react-router"
import Header from "./common/components/Header"

export default function Layout() {
  const [keyword, setKeyword] = useState("")

  const handleChangeSearch = e => {
    setKeyword(e.target.value)
  }

  return (
    <>
      <Header onKeywordChange={handleChangeSearch} />
      {/* Pasamos el estado keyword al Outlet para que lo reciban las páginas */}
      <Outlet context={{ keyword }} />
    </>
  )
}
