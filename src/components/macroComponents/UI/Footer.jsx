
export default function Footer({temperature}) {
  return (
    <footer className="py-3 bg-light text-center border-top text-muted">
      <span>Temperatura attuale C° <span className="fw-bold">{temperature}</span></span>
    </footer>
  )
}
