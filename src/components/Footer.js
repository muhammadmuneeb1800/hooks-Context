import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="page-footer bg-primary mt-5 text-white pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <form className="form-inline">
                <input
                  className="form-control form-control-sm mr-3 w-75"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
                <i className="fas fa-search" aria-hidden="true"></i>
              </form>
            </div>
            <div className="col-md-6 mb-4">
              <form className="input-group">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Your email"
                  aria-label="Your email"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <Link to="/auth/register" className="btn btn-danger rounded-0 btn-outline-white">
                    Register
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">© 2020 Copyright</div>
      </footer>
    </>
  );
}
