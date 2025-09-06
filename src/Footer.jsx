function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <h5 className="fw-bold">🎉 Special Event</h5>
        <p className="mb-2">Join us for an unforgettable celebration</p>

        {/* Links */}
        <div className="mb-3">
          <a href="#hero" className="text-white mx-2 text-decoration-none">Home</a>
          <a href="#eventCarousel" className="text-white mx-2 text-decoration-none">Highlights</a>
          <a href="#rsvp" className="text-white mx-2 text-decoration-none">RSVP</a>
        </div>

        {/* Copyright */}
        <p className="small mb-0">
          © {new Date().getFullYear()} Special Event. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
