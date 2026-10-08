
export default function ThermostatSection() {

  return (
    <div className="p-4">
      <h2 className="h4 mb-3 fw-bold text-center mt-5">MascioThermalControl</h2>

      <p className="text-center mt-5">XX</p>

      <div className="btn-group d-flex gap-4 mt-5 " role="group" aria-label="Thermal controls">
        <button type="button" className="btn btn-primary">+</button>
        <button type="button" className="btn btn-danger ">Reset</button>
        <button type="button" className="btn btn-primary">-</button>
      </div>
    </div>
  )
}
