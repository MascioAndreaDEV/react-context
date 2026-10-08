export default function ThermostatSection() {



  return (
    <div className="p-4">
      <h2 className="h4 mb-3 fw-bold text-center mt-5">MascioThermalControl</h2>

      <p className="text-center mt-5 fw-bolder">{temperature} C°</p>

      <div className="btn-group d-flex gap-4 mt-5 " role="group" aria-label="Thermal controls">
        <button onClick={handleWarmer} type="button" className="btn btn-primary">+</button>
        <button onClick={handleReset} type="button" className="btn btn-danger ">Reset</button>
        <button onClick={handleColder} type="button" className="btn btn-primary">-</button>
      </div>
    </div>
  )
}
