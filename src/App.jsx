import { useState } from "react"
import './App.css'
import Footer from './components/macroComponents/UI/Footer'
import Header from './components/macroComponents/UI/Header'
import MainContent from './components/macroComponents/UI/MainContent'
import Sidebar from './components/macroComponents/UI/Sidebar'
import TemperatureContext from "./components/context/TemperatureContext"
function App() {

  const [temperature, setTemperature] = useState(24)

  function handleWarmer() {
    setTemperature(gradi => gradi > 37 ? gradi : gradi + 1);
  }

  function handleColder() {
setTemperature(gradi => gradi > 22 ? gradi - 1 : gradi)
  }

  function handleReset() {
    setTemperature(24)
    }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <TemperatureContext value={
        {temperature,
          handleColder,
          handleWarmer,
          handleReset
        }
        }>
      <div className="flex-grow-1 d-flex gap-3">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
      </TemperatureContext>
    </div>
  )
}

export default App
