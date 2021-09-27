import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Sidebar extends Component {
    render() {
        return (
         
            <div>
               <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="#" className="brand-link">
    <img src="dist/img/icoz-logo.png" alt="Icogz Logo" className="brand-image"  />
    <span className="brand-text font-weight-light"></span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
   
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group mg-t-10" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li className="nav-item">
                      <Link to="/" className="nav-link">
                        <i className="nav-icon fas fa-rupee-sign" />
                        <p>Promotion & Plans</p>
                      </Link>
        </li>
        <li className="nav-item">
                      <Link to="/AccountandUser" className="nav-link">
                        <i className="nav-icon fas fa-user" />
                        <p>Account & User</p>
                      </Link>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-table" />
            <p>
            Content
              
            </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-star" />
            <p>
            Rating & Reviews
              
            </p>
          </a>
        </li>
        
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

            </div>
          
        )
    }
}

