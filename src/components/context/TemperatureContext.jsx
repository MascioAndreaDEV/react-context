import { createContext, useState, useContext } from "react";

// 1. DEFINIZIONE CONTEXT : ABBIAMO CREATO UN OGGETTO FRUIBILE GLOBALMENTE IN REACT

const TemperatureContext = createContext();


// 2. Definizione PROVIDER

 export const TemperatureProvider = ({ children }) => {

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
    
        const isMax = temperature >= 37;
        const isMin = temperature <= 22;
        const statusMessage = temperature > 30 ? 
        'caldo' : temperature < 24 ? 'fresco' : 'ideale';

        //Definiamo l'oggetto che sarà fruibile ai componenti figli

        const value = {
          temperature,
          handleWarmer,
          handleColder,
          handleReset,
          isMax,
          isMin,
          statusMessage

        }

        //Passiamo questo valore al componente children

        return (
            <TemperatureContext.Provider value={value}>
                {children}
            </TemperatureContext.Provider>
        )   
}

// 3. Definizione CONSUMER: Usiamo la funzione useContext per consumare il dato

export const useTemperature = () => {
    return useContext(TemperatureContext);
} 

export default TemperatureContext;
