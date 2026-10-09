import './App.css'
import Footer from './components/macroComponents/UI/Footer'
import Header from './components/macroComponents/UI/Header'
import MainContent from './components/macroComponents/UI/MainContent'
import Sidebar from './components/macroComponents/UI/Sidebar'
import { TemperatureProvider } from "./components/context/TemperatureContext"
function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <TemperatureProvider>   
        <div className="flex-grow-1 d-flex gap-3">
          <Sidebar />
          <MainContent />
        </div>
      <Footer />
      </TemperatureProvider>
    </div>
  )
}

export default App
