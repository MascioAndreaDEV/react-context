export default function Sidebar() {
  {console.log()}
  return (
    <aside className="p-3 border-bottom border-2 border-primary bg-light" style={{ width: '180px' }}>
      <h4 className="fs-6 fw-semibold m-0">App Sidebar</h4>
    <div>
    <p className="my-5">temperatura attuale: <span className="fw-semibold">{temperature} C°</span></p>
    </div>
    </aside>
  )
}
