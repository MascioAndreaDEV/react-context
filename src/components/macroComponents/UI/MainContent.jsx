import ThermostatSection from "../../sections/ThermostatSection";

export default function MainContent({temperature, handleWarmer, handleColder, handleReset}) {
 
  return (
    <main className="flex-grow-1">
      <ThermostatSection temperature={temperature}
         handleColder={handleColder}
          handleWarmer={handleWarmer}
           handleReset={handleReset} />
    </main>
  )
}
