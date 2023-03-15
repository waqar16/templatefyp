import React from 'react'
import logo from '../images/logo/logo-color.png';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light " >
  <div className="container-fluid container  ">
    <img className='navbar-brand' src={logo} height={90} width={90} alt="logo" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse float-right" id="navbarNavDropdown">
      <ul className="navbar-nav nav-alignment">
        <li className="nav-item mx-3">
          <a className="nav-link active nav-item-link" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link active nav-item-link" href="#blog">Blogs</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link active nav-item-link" href="/">Highlights</a>
        </li>
        <li className="nav-item dropdown  mx-3">
          <a className="nav-link dropdown-toggle active nav-item-link" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </a>
          <ul className="dropdown-menu custom-dropdown">
            <li><a className="dropdown-item" href="/">Web Development</a></li>
            <li><a className="dropdown-item" href="/">Graphic Designing</a></li>
            <li><a className="dropdown-item" href="/">Programming</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown  mx-3">
          <a className="nav-link dropdown-toggle active nav-item-link" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            My Work
          </a>
          <ul className="dropdown-menu custom-dropdown">
            <li><a className="dropdown-item" href="/">Web Development</a></li>
            <li><a className="dropdown-item" href="/">Graphic Designing</a></li>
            <li><a className="dropdown-item" href="/">Programming</a></li>
          </ul>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link active nav-item-link" href="/">Education</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link active nav-item-link" href="/">About</a>
        </li>

        <button type="button" className="btn custom-btn-about mx-custom" >Support</button>


      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
