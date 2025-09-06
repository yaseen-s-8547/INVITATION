function Slider() {
  return (
    <section className="bg-dark text-white py-5">
      <div className="container">
        <h2 className="text-center mb-4">Event Highlights</h2>

        <div id="eventCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner rounded shadow">

            <div className="carousel-item active">
              <img src="https://imgeng.jagran.com/images/2022/sep/onam1662610656316.jpg" className="d-block w-100" alt="Slide 1"style={{ height: "400px", objectFit: "cover" }} />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
                <h5>Welcome to the Celebration</h5>
                <p>Let’s make unforgettable memories together.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src="https://i.ytimg.com/vi/dvayuK7McUo/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gPSg7MA8=&rs=AOn4CLC_PkYWUFjbxAOwKdBlOxRMxklvKw" className="d-block w-100" alt="Slide 2"style={{ height: "400px", objectFit: "cover" }} />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
                <h5>Fun & Entertainment</h5>
                <p>Get ready for music, dance, and joy!</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src="https://i.ytimg.com/vi/cHcVWr1Irlk/oardefault.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLBTg56mPUdux9CSUolDQo5GUUxAqA" className="d-block w-100" alt="Slide 3"style={{ height: "400px", objectFit: "cover" }} />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
                <h5>Don’t Miss Out</h5>
                <p>Save the date and join the party!</p>
              </div>
            </div>

          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#eventCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#eventCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Slider
