import BookingManagmentPage from "./pages/BookingManagmentPage"
import Navbar from "./components/Navbar"
import { useState } from "react"

function App() {
  const [openedPage, setOpenedPage] = useState("BookingManagmentPage");

  return (
    <>
      <Navbar openedPage={openedPage} setOpenedPage={setOpenedPage} ></Navbar>
      <div className="absolute -z-50">
        <div className="absolute hidden lg:block top-[600px] left-[1000px] w-32 h-32 bg-orange-400 rounded-full blur-3xl opacity-80 animate-pulse animate-oscillate -z-50"></div>
        <div className="absolute top left-10 lg:left-24 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-80 animate-pulse animate-oscillate -z-50"></div>
        <div className="absolute top-[450px] left-32 sm:left-64 lg:-left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl opacity-80 animate-pulse animate-oscillate -z-50"></div>
        <div className="absolute hidden lg:block top-16 left-[1350px] bottom-0 w-32 h-32 bg-purple-400 rounded-full blur-3xl opacity-80 animate-pulse animate-oscillate -z-50"></div>
      </div>
      {(openedPage == "BookingManagmentPage") && (
        <BookingManagmentPage />
      )}
    </>
  )
}

export default App
