import React, { Component } from 'react'
import { Row, Menu } from 'antd'
import "antd/dist/antd.css"
import { Link } from "react-router-dom"
import { withRouter } from "react-router";
import '../global.css'
import './Header.css'
import logo from '../assets/logo.png'

const SubMenu = Menu.SubMenu;

class Header extends Component {
  render () {
    const path = this.props.location.pathname
    const transparent = path === '/'
    let activeLink = path.split('/')[1]

    return (
        <Row className="header" type="flex" align="middle" justify="center" style={{
          position: transparent ? 'absolute' : 'static',
          backgroundColor: transparent ? 'rgba(24, 40, 72, 0.2)' : '#182848'
        }}>
          <Row className="content" type="flex" align="middle">
            <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
            <Menu className="nav" theme="dark" mode="horizontal" selectedKeys={[activeLink]}>
              <SubMenu className={activeLink === 'products' ? 'submenu-active' : ''} key="products" title={<Link to="/products">Products</Link>}>
                <Menu.Item>Credit Blacklist</Menu.Item>
                <Menu.Item>Coinsta</Menu.Item>
                <Menu.Item>CreditMe</Menu.Item>
              </SubMenu>
              <Menu.Item key="pricing"><Link to="/pricing">Pricing</Link></Menu.Item>
              <Menu.Item key="company"><Link to="/company">Company</Link></Menu.Item>
            </Menu>
          </Row>
        </Row>
    );
  }
}

export default withRouter(Header);
