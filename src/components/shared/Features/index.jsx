export default  function Features(){
    return(
        <section className="container my-5">
        <div className="row text-center">
          <div className="col-md-4">
            <i className="fa-solid fa-book fa-2xl mb-3" style={{ color: "#0d6efd" }}></i>
            <h5>Wide Selection</h5>
            <p>Choose from fiction, non-fiction, self-help, and more genres.</p>
          </div>
          <div className="col-md-4">
            <i className="fa-solid fa-truck fa-2xl mb-3" style={{ color: "#0d6efd" }}></i>
            <h5>Fast Delivery</h5>
            <p>We ship your favorite books right to your doorstep.</p>
          </div>
          <div className="col-md-4">
            <i className="fa-solid fa-star fa-2xl mb-3" style={{ color: "#0d6efd" }}></i>
            <h5>Top Rated</h5>
            <p>Books reviewed and loved by millions of readers.</p>
          </div>
        </div>
      </section>
    )
}