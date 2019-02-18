import React, { Component } from 'react';
import { Row, Col } from 'antd';
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import Spacing from '../components/Spacing'
import '../global.css';
import './Footer.css';
import logo from '../assets/logo.png';
import facebookIcon from '../assets/facebook_1.png'
import facebookIconFocused from '../assets/facebook_2.png'
import twitterIcon from '../assets/twitter_1.png'
import twitterIconFocused from '../assets/twitter_2.png'
import telegramIcon from '../assets/telegram_1.png'
import telegramIconFocused from '../assets/telegram_2.png'
import mediumIcon from '../assets/medium_1.png'
import mediumIconFocused from '../assets/medium_2.png'

const SocialIcon = (props) => (
    <img src={props.inactive} onMouseOver={e => e.currentTarget.src = props.active}
         onMouseOut={e => e.currentTarget.src = props.inactive} alt="" style={{ width: '40px', height: '40px' }} />
)

class Header extends Component {
  render () {
    return (
        <div className="footer">
          <Row type="flex" justify="center">
            <div className="content">
              <img className="logo" src={logo} alt="logo" />
              <Spacing height="50px" />
              <Row>
                <Col span={6}>
                  <div><Link className="link" to="/">Home</Link></div>
                  <div><Link className="link" to="/company/about">About</Link></div>
                </Col>
                <Col span={6}>
                  <div><Link className="link" to="/products">Products</Link></div>
                  <div><Link className="link" to="/pricing">Pricing</Link></div>
                </Col>
                <Col span={12}>
                  <div style={{ marginTop: "10px" }}>Email:</div>
                  <div className="email">contact@defilab.com</div>
                  <div className="social-links">
                    <a className="social-link" href="https://www.facebook.com/Definetwork/">
                      <SocialIcon active={facebookIconFocused} inactive={facebookIcon} />
                    </a>
                    <a className="social-link" href="https://twitter.com/DefiLab">
                      <SocialIcon active={twitterIconFocused} inactive={twitterIcon} />
                    </a>
                    <a className="social-link" href="/">
                      <SocialIcon active={telegramIconFocused} inactive={telegramIcon} />
                    </a>
                    <a href="https://medium.com/@DefiLab">
                      <SocialIcon active={mediumIconFocused} inactive={mediumIcon} />
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', height: '1px', margin: '30px 0 0 0' }} />
          <div style={{ textAlign: 'center', lineHeight: '50px' }}>Copyright © 2019 The Defi Team</div>
        </div>
    );
  }
}

export default Header;
