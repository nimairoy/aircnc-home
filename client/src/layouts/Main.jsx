import { Outlet } from "react-router-dom"
import Navbar from "../components/Shared/Navbar/Navbar"
import Home from "../pages/Home/Home"

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="pt-28 pb-20">
        <Outlet></Outlet>
      </div>

    </>
  )
}

export default Main
