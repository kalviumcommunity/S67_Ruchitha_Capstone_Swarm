import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import LandingHeader from "./components/LandingHeader"
import LandingFooter from "./components/LandingFooter"

function App() {

  return (
    <>
      <LandingHeader />

      <main className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </main>

      <footer>
        <LandingFooter />
      </footer>
    </>
  )
}

export default App
