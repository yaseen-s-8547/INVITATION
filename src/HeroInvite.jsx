function Heroinvite() {
  return (
    <section
      className="d-flex flex-column align-items-center justify-content-center text-white"
      style={{
        height: "100vh",
        backgroundImage: "url('https://w0.peakpx.com/wallpaper/346/894/HD-wallpaper-onam-festival-kerala-black-yellow-beautiful-india-malayalam-happy-cute-chingam-flower-wishes-white.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",   // 🔥 Parallax
        backgroundPosition: "center",
        textShadow: "1px 1px 4px rgba(0,0,0,0.7)" // makes text pop
      }}
    >
      {/* Invite Text */}
      <div className="text-center bg-dark bg-opacity-50 p-5 rounded mb-5">
        <h1 className="display-3 fw-bold">You’re Invited!</h1>
        <p className="lead">Join us for a special celebration 🎉</p>
        <button className="btn btn-primary btn-lg mt-3">RSVP Now</button>
      </div>

      {/* Event Details Row */}
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="bg-dark bg-opacity-50 p-4 rounded shadow">
              <h3 className="fw-bold">📅 Date</h3>
              <p>11th September 2025</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="bg-dark bg-opacity-50 p-4 rounded shadow">
              <h3 className="fw-bold">⏰ Time</h3>
              <p>6:00 PM onwards</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="bg-dark bg-opacity-50 p-4 rounded shadow">
              <h3 className="fw-bold">📍 Venue</h3>
              <p>City Convention Center</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Heroinvite
