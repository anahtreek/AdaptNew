import React, {Component} from 'react';
const {Link} = require('react-router');
var logoSize = {
 width : '40%'
}
class MenuExampleContentProp extends Component {

    render() {
        return (
          <div>
          <nav className="navbar navbar-default navbar-static-top" id = 'headerSpacing'>
            <div className="container-fluid">
              <div className="navbar-header" >
              <p className="navbar-text navbar-right" id = 'mobileView'>Welcome <a href="#" className="navbar-link">Mark Otto</a></p>

                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a href="#" className="navbar-left"><img className="logo" src="./img/logo.png"/></a>
            </div>
              <div className="nav navbar-nav" >
                  <h2><p className="navbar-text" id='textStyle'>ADAPT</p></h2>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1" >
                <ul className="nav navbar-nav navbar-right">
                <li><p className="navbar-text " id='desktopView' id="spacing">Welcome<b>Mark Otto</b></p></li>
                  <li><a href="#" >Profile</a></li>
                    <li><a href="#" id="spacingCorner">Logout</a></li>
                </ul>
              </div>

            </div>
          </nav>
            <nav className="navbar navbar-default" id="footer">
              <p id="footerTextAllignment">All Rights Reserved. &copy; Wipro Limited</p>
            </nav>
          </div>
        )
    }
}

module.exports = MenuExampleContentProp;
