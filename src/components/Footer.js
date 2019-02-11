import React, { Component } from 'react';
import { Row, Col } from 'antd';
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import Spacing from '../components/Spacing'
import '../global.css';
import './Footer.css';
import logo from '../assets/logo.png';
import facebookIcon from '../assets/facebook_1.png'
import twitterIcon from '../assets/twitter_1.png'
import telegramIcon from '../assets/telegram_1.png'
import mediumIcon from '../assets/medium_1.png'

class Header extends Component {
  render () {
    return (
        <Row className="footer" type="flex" justify="center">
          <div className="content">
            <img src={logo} alt="logo" />
            <Spacing height="50px" />
            <Row>
              <Col span={6}>
                <div><Link className="link" to="/">Home</Link></div>
                <div><Link className="link" to="/company/about">About</Link></div>
                <div><Link className="link" to="/">Contact</Link></div>
                <div><Link className="link" to="/">Support</Link></div>
              </Col>
              <Col span={6}>
                <div><Link className="link" to="/products">Products</Link></div>
                <div><Link className="link" to="/">Developers</Link></div>
                <div><Link className="link" to="/pricing">Pricing</Link></div>
                <div><Link className="link" to="/">Solutions</Link></div>
              </Col>
              <Col span={12}>
                <div style={{ marginTop: "10px" }}>Email:</div>
                <div className="email">contact@defilab.com</div>
                <div className="social-links">
                  <a className="social-link" href="https://www.facebook.com/Definetwork/"><img src={facebookIcon}
                                                                                               alt="facebook" /></a>
                  <a className="social-link" href="https://twitter.com/DefiLab"><img src={twitterIcon} alt="twitter" /></a>
                  <a className="social-link" href="/"><img src={telegramIcon}
                                                           alt="telegram" /></a>
                  <a href="https://medium.com/@DefiLab"><img src={mediumIcon} alt="medium" /></a>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
    );
  }
}

export default Header;
