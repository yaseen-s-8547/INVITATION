import React from "react";

export default function EventDetails() {
  return (
    <section id="details" className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold">🎊 Event Details 🎊</h2>
        <p className="text-muted fs-5">
          Here’s everything you need to know about the celebration.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body text-center">
              <h5 className="fw-bold">📅 Date</h5>
              <p className="mb-0 fs-5">11 September 2025</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body text-center">
              <h5 className="fw-bold">⏰ Time</h5>
              <p className="mb-0 fs-5">6:30 PM onwards</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body text-center">
              <h5 className="fw-bold">📍 Venue</h5>
              <p className="mb-0 fs-5">Grand Palace Hall, Kochi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Google Map Embed */}
      <div className="mt-5">
        <h5 className="text-center fw-bold mb-3">Find Us Here</h5>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.002138301843!2d76.2673!3d9.9312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d1b9bcb1d09%3A0x79f9e60b6c8f0f8b!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1630570812345!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Event Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
