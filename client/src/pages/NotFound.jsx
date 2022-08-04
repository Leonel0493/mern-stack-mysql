import React from "react";

function NotFound() {
  return (
    <>
      <div className="container">
        <div className="row content">
          <div className="col-lg-12"></div>
          <div className="col-lg-12">
            <h1>
              404<span className="small">Page not found</span>
            </h1>
            <h2>Oops, the page you're looking for does not exist.</h2>
          </div>
        </div>
      </div>
      <div class="bg-img"></div>
    </>
  );
}

export default NotFound;
