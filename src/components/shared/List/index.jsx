export default  function List(){
    return(
        <section className="py-5 bg-body-tertiary">
  <div className="container">
    <h3 className="text-center mb-4">Book List</h3>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div className="col" key={idx}>
          <div className="card shadow-sm h-100">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Book Cover</title>
              <rect width="100%" height="100%" fill="#6c757d"></rect>
              <text x="50%" y="50%" fill="#dee2e6" dy=".3em" textAnchor="middle">Book Image</text>
            </svg>

            <div className="card-body">
              <p className="card-text">This is a placeholder description for a featured book.</p>
              <div className="d-flex justify-content-between align-items-center">
                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                <small className="text-muted">$14.99</small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    )
}