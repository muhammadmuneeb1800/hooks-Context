import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Header() {
  // const { firstName } = useContext(CountContext);
  const { firstName, setFirstName, isAuthenticate, setIsAuthenticate } =
    useContext(AuthContext);
  const loginHandler = () => {
    setIsAuthenticate(true);
  };
  const logoutHandler = () => {
    setIsAuthenticate(false);
    setFirstName("");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary mb-5">
        <div className="container">
          <Link to="/" className="navbar-brand text-white fw-bold">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
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
            <ul className="navbar-nav ms-auto px-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/dashboard/users"
                  className="nav-link text-white px-3"
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link text-white px-3">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-white px-3">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link text-white px-3">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-white px-3">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/hook/usestate" className="nav-link text-white px-3">
                  UseState
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/hook/useeffect" className="nav-link text-white px-3">
                  useEffect
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/hook/usecontext"
                  className="nav-link text-white px-3"
                >
                  useContext
                </Link>
              </li>
            </ul>
            <form className="d-flex gap-2 align-items-center" role="search">
              {!isAuthenticate ? (
                <Link className="btn btn-success" onClick={loginHandler}>
                  Login
                </Link>
              ) : (
                <Link className="btn btn-danger" onClick={logoutHandler}>
                  LogOut
                </Link>
              )}
              {/* <Link
                className={`btn btn-${!isAuthenticate ? "success" : "danger"}`}
                onClick={() => setIsAuthenticate(!isAuthenticate)}
              >
                {!isAuthenticate ? "LogIn" : "LogOut"}
              </Link> */}
              <p className="text-white pt-3 fw-medium">{firstName}</p>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
