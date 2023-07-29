import React from 'react'

export const Navbar = () => {
  return (
    <>
    <nav
  className="navbar navbar-light navbar-expand-md navbar navbar-main navbar-expand-lg px-0 mx-4 border-radius-xl shadow-none"
  id="navbarBlur"
  navbar-scroll="true"
>
  <div className="container-fluid">
    <div className="container-fluid py-2 px-0">
      <h6 className="font-weight-bolder mb-0">Dashboard</h6>
    </div>
    <button
      data-bs-toggle="collapse"
      className="navbar-toggler"
      data-bs-target="#navbar"
    >
      <span className="visually-hidden">Toggle navigation</span>
      {/* <span className="navbar-toggler-icon" /> */}
    </button>
    <div
      className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4 w-100"
      id="navbar"
    >
      <div className="ms-md-auto pe-md-3 d-flex align-items-center">
        <div className="input-group">
          <span className="input-group-text text-body p-0 m-0">
            <a className="fas fa-search p-2" aria-hidden="true" />
            <input
              className="form-control-sm form-control mr-2"
              type="text"
              placeholder="Type here..."
              style={{ border: "none" }}
            />
          </span>
        </div>
      </div>
      <ul className="navbar-nav justify-content-end">
        <li className="nav-item d-flex align-items-center">
          <a
            className="nav-link text-body font-weight-bold px-0"
            href="javascript:;"
          >
            <i className="fa fa-user me-sm-1" />
            <span className="d-sm-inline d-none">Sign In</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>

)
}
