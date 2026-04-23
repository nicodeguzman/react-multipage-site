import React from "react";

const Navbar = () => {
  return (
    <nav className = "navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Newbuilding&Innovation</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="index.html">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="press.html">About Us</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact</a>
            </li>
        </ul>
      </div>
    </nav>
  );
}

const Sidebar = () => {
  return (
    <div className="d-none d-md-block col-md-3">
    <div className="border border-primary py-5 px-10">
    <img src="https://images.pexels.com/photos/2852124/pexels-photo-2852124.jpeg" alt="NB" height="300" width="250"></img>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="border-top p-4">
      Template Demo ©2019
    </div>
  )
}

const Template = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-md-9">
            {props.children}
          </div>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Template;

