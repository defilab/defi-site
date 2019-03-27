import React, { Component } from 'react'
import { Row, Col, Menu, Dropdown } from 'antd'
import "antd/dist/antd.css"
import { Link } from "react-router-dom"
import { withRouter } from "react-router";
import '../global.css'
import './Header.css'
import logo from '../assets/logo.png'
import {setLocle} from '../util/locale'
import store from '../store/index.js'
const SubMenu = Menu.SubMenu;
class Header extends Component {
  render () {
    const path = this.props.location.pathname
    const transparent = path === '/'
    let activeLink = path.split('/')[1]
    const languageLabels = {
      'en-PH': 'Philippines',
      'id-ID': 'Indonesian',
      'vi-VN': 'Vietnamese'
    };
    const changeCountry = ({ key }) => {
      setLocle(key)
      store.dispatch({type: key})
      for(let  i in languageLabels){
        if(i===key){
          let obj = document.getElementById(key);
          obj.style.backgroundColor='#e6f7ff';
          obj.style.color='#1890ff';
        }
        else{
          let obj = document.getElementById(i)
          obj.style.color='rgba(0, 0, 0, 0.65)';
          obj.style.backgroundColor='#fff';
        }

      }
    };
    const menu = (
      <Menu onClick={changeCountry}  defaultSelectedKeys={'en-PH'}>
        <Menu.Item key="en-PH" id="en-PH" >Philippines</Menu.Item>
        <Menu.Item key="id-ID" id="id-ID">Indonesian</Menu.Item>
        <Menu.Item key="vi-VN" id="vi-VN">Vietnamese</Menu.Item>
      </Menu>
    );
    return (
        <Row className="header" type="flex" align="middle" justify="center" style={{
          position: transparent ? 'absolute' : 'static',
          backgroundColor: transparent ? 'rgba(24, 40, 72, 0.2)' : '#182848'
        }}>
          <Row className="content" type="flex" align="middle">
            <Col span={14}>
              <Row type="flex" align="middle">
                <div><Link to="/"><img className="logo" src={logo} alt="logo" /></Link></div>
                <div>
                  <Menu className="nav" theme="dark" mode="horizontal" selectedKeys={[activeLink]}>
                    <SubMenu className={activeLink === 'products' ? 'submenu-active' : ''} key="products"
                             title="Products">
                      <Menu.Item><Link to="/products">Credit Fraud Detection</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="pricing"><Link to="/pricing">Pricing</Link></Menu.Item>
                    <Menu.Item key="company"><Link to="/company">About</Link></Menu.Item>
                  </Menu>
                </div>
              </Row>
            </Col>
            <Col span={10}>
              <Row type="flex" justify="end">
                <a className="header-link" href="/white-paper.pdf">White Paper</a>
                <div style={{ width: '30px' }} />
                <a className="header-link" href="https://portal.test.defilab.com">

                <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                Language 
                </a>
                </Dropdown>
                </a>
                <div style={{ width: '30px' }} />
                <a className="header-link" href="https://portal.test.defilab.com">Sign In</a>

              </Row>
            </Col>
          </Row>
        </Row>
    );
  }
}
export default withRouter(Header);
