import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd'
import Spacing from '../components/Spacing'
import '../global.css'
import './Home.css'
import banner1 from '../assets/home_banner_1.png'
import visionBg1 from '../assets/vision_bg_1.png'
import visionBg2 from '../assets/vision_bg_2.png'
import visionBg3 from '../assets/vision_bg_3.png'
import visionBg4 from '../assets/vision_bg_4.png'
import visionLogo1 from '../assets/vision_logo_1.png'
import visionLogo2 from '../assets/vision_logo_2.png'
import visionLogo3 from '../assets/vision_logo_3.png'
import visionLogo4 from '../assets/vision_logo_4.png'
import productsIntroBg from '../assets/products_intro_bg.png'
import productsBg from '../assets/products_bg.png'
import productsBg1 from '../assets/products_bg_1.png'
import productsBg2 from '../assets/products_bg_2.png'
import productsBg3 from '../assets/products_bg_3.png'
import productIcon1 from '../assets/product_icon_1.png'
import productIcon2 from '../assets/product_icon_2.png'
import productIcon3 from '../assets/product_icon_3.png'
import techIcon1 from '../assets/tech_icon_1.png'
import techIcon2 from '../assets/tech_icon_2.png'
import techIcon3 from '../assets/tech_icon_3.png'
import techIcon4 from '../assets/tech_icon_4.png'
import techIcon5 from '../assets/tech_icon_5.png'
import techIcon6 from '../assets/tech_icon_6.png'
import techIcon7 from '../assets/tech_icon_7.png'
import techIcon8 from '../assets/tech_icon_8.png'
import techIcon9 from '../assets/tech_icon_9.png'
import partnersBg from '../assets/partners_bg.png'
import partner1 from '../assets/partner_1.png'
import partner2 from '../assets/partner_2.png'
import partner3 from '../assets/partner_3.png'
import partner4 from '../assets/partner_4.png'
import partner5 from '../assets/partner_5.png'

const VisionTile = (props) => {
  const { title, logo, background } = props;

  return (
      <Row className="vision-tile backgroundImage" type="flex" align="middle"
           style={{ backgroundImage: `url(${background})` }}>
        <Col span={16}>
          <div className="vision-title">{title}</div>
        </Col>
        <Col span={8}>
          <img src={logo} alt={title} style={{ width: '100px', height: '100px' }} />
        </Col>
      </Row>
  );
};

const Vision = () => (
    <Row className="section" type="flex" justify="center">
      <div className="content">
        <div className="section-title">Our Vision</div>
        <div style={{ fontSize: '26px' }}>Defi aims to define state-of-art inclusive finance with:</div>
        <Spacing />
        <Row>
          <Col span={12}>
            <VisionTile title="Access to credit" logo={visionLogo1} background={visionBg1} />
          </Col>
          <Col span={12}>
            <VisionTile title="Data portability" logo={visionLogo2} background={visionBg2} />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <VisionTile title="Identity proofing" logo={visionLogo3} background={visionBg3} />
          </Col>
          <Col span={12}>
            <VisionTile title="Privacy-preserving computation" logo={visionLogo4} background={visionBg4} />
          </Col>
        </Row>
      </div>
    </Row>
)

const ProductsIntro = () => (
    <Row className="section" type="flex" justify="center">
      <div className="content">
        <div className="section-title">Our Products</div>
        <div className="backgroundImage"
             style={{ backgroundImage: `url(${productsIntroBg})`, backgroundRepeat: 'no-repeat' }}>
          <Row>
            <Col className="products-intro-tile" span={12}>
              <div className="products-intro-title">Enterprise Data Collection</div>
              <p className="products-intro-desc">Financial institutions can contribute data and models to better
                identify,
                evaluate and control risk. As a result, more individuals will have access to better financial
                services.</p>
            </Col>
            <Col className="products-intro-tile" span={12}>
              <div className="products-intro-title">Personal Data Wallet</div>
              <p className="products-intro-desc">Defi makes sure your data is protected and owned by you. With
                appropriate
                management and authorization, your data could help you get better services and even token rewards.</p>
            </Col>
          </Row>
        </div>
      </div>
    </Row>
)

const Products = () => (
    <Row className="section products" type="flex" justify="center" style={{ backgroundImage: `url(${productsBg})` }}>
      <div className="content">
        <Col span={8} className="products-tile" style={{ backgroundImage: `url(${productsBg1})` }}>
          <Row className="products-tile-content" type="flex" align="bottom">
            <Col>
              <div><img src={productIcon1} alt="" style={{ width: '34px', height: '34px', marginBottom: '8px' }} />
              </div>
              <div>
                Credit Fraud Detection Solution
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={8} className="products-tile" style={{ backgroundImage: `url(${productsBg2})` }}>
          <Row className="products-tile-content" type="flex" align="bottom">
            <Col>
              <div><img src={productIcon2} alt="" style={{ width: '34px', height: '34px', marginBottom: '8px' }} />
              </div>
              <div>
                Coinsta <br />
                News. Personal Data.
                Cryptocurrencies. <br />
                Manage all your digital
                assets in one app.
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={8} className="products-tile" style={{ backgroundImage: `url(${productsBg3})` }}>
          <Row className="products-tile-content" type="flex" align="bottom">
            <Col>
              <div><img src={productIcon3} alt="" style={{ width: '34px', height: '34px', marginBottom: '8px' }} />
              </div>
              <div>
                CreditMe <br />
                One stop shop to get the
                loan best suited for you
                with your own data
              </div>
            </Col>
          </Row>
        </Col>
      </div>
    </Row>
)

const TechnologyTile = (props) => (
    <Row className="technology-tile" type="flex" justify="center">
      <Col>
        <div><img src={props.icon} alt={props.title} style={{ width: '80px', height: '80px' }} /></div>
        <Spacing height="15px" />
        <div>{props.title}</div>
      </Col>
    </Row>
)

const Technologies = () => (
    <Row className="section" type="flex" justify="center">
      <div className="content">
        <div className="section-title">Core Technologies</div>
        <div style={{ textAlign: 'center' }}>By using technologies including blockchain, secure multi-party computation
          and machine learning, Defi can standardize, encapsulate and encrypt data to enable multi-party data
          collaboration.
        </div>
        <Spacing height="50px" />
        <Row>
          <Col span={8}><TechnologyTile title="Distributed Ledger" icon={techIcon1} /></Col>
          <Col span={8}><TechnologyTile title="Smart Contract" icon={techIcon2} /></Col>
          <Col span={8}><TechnologyTile title="Trusted Execution Environment" icon={techIcon3} /></Col>
          <Col span={8}><TechnologyTile title="Data Encryption & Obfuscation" icon={techIcon4} /></Col>
          <Col span={8}><TechnologyTile title="Zero-knowledge Proof" icon={techIcon5} /></Col>
          <Col span={8}><TechnologyTile title="Data Indexing & Search" icon={techIcon6} /></Col>
          <Col span={8}><TechnologyTile title="Asymmetric  Cryptography" icon={techIcon7} /></Col>
          <Col span={8}><TechnologyTile title="Differential Privacy" icon={techIcon8} /></Col>
          <Col span={8}><TechnologyTile title="Federated Computation" icon={techIcon9} /></Col>
        </Row>
      </div>
    </Row>
)

const Partners = () => (
    <Row className="section partners" type="flex" justify="center" gutter={8}
         style={{ backgroundImage: `url(${partnersBg})` }}>
      <div className="content">
        <div className="section-title">Strategic Partners & Investors</div>
        <Row type="flex" gutter={40}>
          <Col span={4.5}><img src={partner1} alt="" style={{ width: '159px', height: '75px' }} /></Col>
          <Col span={4.5}><img src={partner2} alt="" style={{ width: '159px', height: '75px' }} /></Col>
          <Col span={4.5}><img src={partner3} alt="" style={{ width: '159px', height: '75px' }} /></Col>
          <Col span={4.5}><img src={partner4} alt="" style={{ width: '159px', height: '75px' }} /></Col>
          <Col span={4.5}><img src={partner5} alt="" style={{ width: '159px', height: '75px' }} /></Col>
        </Row>
      </div>
    </Row>
)

class Home extends Component {
  render () {
    return (
        <div>
          <div className="home-banner" style={{ backgroundImage: `url(${banner1})` }} />
          <Row className="introduction" type="flex" align="middle" justify="center">
            <div className="content" style={{ padding: '20px', textAlign: 'center' }}>Defi Data Collaboration Protocol
              provides access to
              high quality, secure and sharable data. The system allows easy processing, sharing and distribution of
              data, while keeping the privacy of both enterprises and individuals intact.
            </div>
          </Row>
          <Vision />
          <Divider style={{ margin: 0 }} />
          <ProductsIntro />
          <Products />
          <Technologies />
          <Partners />
        </div>
    );
  }
}

export default Home
