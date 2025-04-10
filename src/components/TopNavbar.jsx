import React from "react";
export default class TopNavbar extends React.Component {
  constructor() {
    
  }
  render(prop) {
    return (
      <>
        <nav className="navbar navbar-expand-lg" style={prop.myStyle}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/home">
              Navbar w/ text
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
              <span className="navbar-text">
                Navbar text with an inline element
              </span>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
