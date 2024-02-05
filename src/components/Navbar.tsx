import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand my-2 mx-2 fs-5 fw-bold" href="/">
          <img src="shLogo.png" width="70" />
          <span
            className="mobileDisplayNone"
            style={{ fontFamily: "Monotype Corsiva" }}
          >
            &nbsp;&nbsp;&nbsp;Web & software development
          </span>
        </a>
        <button
          className="navbar-toggler buttonNav"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-6">
            <li className="nav-item ms-2 me-2">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item ms-2 me-2">
              <a className="nav-link" href="about">
                About
              </a>
            </li>

            <li className="nav-item ms-2 me-2">
              <a className="nav-link" href="projects">
                Projects
              </a>
            </li>

            {/* Project dropdown menu */}
            {/*<li className="nav-item dropdown ms-2 me-2">
              <a
                className="nav-link dropdown-toggle"
                href="Projects"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="Projects">
                    All
                  </a>
                </li>
              </ul>
            </li>
  */}

            <li className="nav-item ms-2 me-2">
              <a className="nav-link" href="services">
                Services
              </a>
            </li>

            <li className="nav-item ms-2 me-2">
              <a className="nav-link" href="Contact">
                Contact
              </a>
            </li>

            {/*
            <li className="nav-item ms-3 me-3">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
            */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <section className="pt-2 mb-1">
            <a
              className="btn"
              href="mailto:janee615@gmail.com?subject=Re:Jane Chan's Online Portfolio"
              role="button"
            >
              <FontAwesomeIcon icon={faEnvelope} className="fontIcon" />
            </a>

            <a
              className="btn"
              href="https://www.linkedin.com/in/jane-chan-685083141/"
              target="_blank"
              role="button"
            >
              <FontAwesomeIcon icon={faLinkedin} className="fontIcon" />
            </a>

            <a
              className="btn"
              href="https://github.com/sauhanchan/"
              target="_blank"
              role="button"
            >
              <FontAwesomeIcon icon={faGithubSquare} className="fontIcon" />
            </a>
          </section>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
