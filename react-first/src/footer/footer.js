import React, { Component } from 'react';
import "./footer.css";

class Footer extends Component {
  render() {
    return (<div className="footerClass">
      <footer className="page-footer font-small blue">
        <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/education/bootstrap/"> gvr.com</a>
        </div>
      </footer>

    </div>);
  }
}

export default Footer;
