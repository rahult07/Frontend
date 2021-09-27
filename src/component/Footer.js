import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
               <footer className="main-footer">
                  <div className="col-lg-6 col-12 copyright">© 2018 Icogz. All rights reserved.</div> 
  <div className="col-lg-6 col-12 copyright-r">
  Crafted with <i class="fas fa-heart text-danger f-heart"></i> by <img src="dist/img/icoz-logo-small.png" alt="Icogz Logo" height="20" className="f-logo"/>
  </div>
</footer>

            </div>
        )
    }
}

