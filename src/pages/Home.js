import React, { Component } from 'react'
import { Row, Col, Divider, Button } from 'antd'
import Spacing from '../components/Spacing'
import globalStyles from '../global.module.css'
import styles from './Home.module.css'
import homeBanner from '../assets/home_banner.jpg'
import visionBg1 from '../assets/vision_bg_1.png'
import visionBg2 from '../assets/vision_bg_2.png'
import visionBg3 from '../assets/vision_bg_3.png'
import visionBg4 from '../assets/vision_bg_4.png'
import visionLogo1 from '../assets/vision_logo_1.png'
import visionLogo2 from '../assets/vision_logo_2.png'
import visionLogo3 from '../assets/vision_logo_3.png'
import visionLogo4 from '../assets/vision_logo_4.png'
import solutionsBg from '../assets/solutions_bg.png'
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
import partner6 from '../assets/partner_6.png'
import partner7 from '../assets/partner_7.png'
import partner8 from '../assets/partner_8.png'
import partner9 from '../assets/partner_9.png'
import partner10 from '../assets/partner_10.png'
import partner11 from '../assets/partner_11.png'
import partner12 from '../assets/partner_12.png'
import partner13 from '../assets/partner_13.png'

const VisionTile = (props) => {
  const { title, logo, background } = props;

  return (
    <Row className={[styles.visionTile, globalStyles.backgroundImage].join(' ')}
         type="flex"
         align="middle"
         style={{ backgroundImage: `url(${background})` }}>
      <Col span={16}>
        <div className={styles.visionTitle}>{title}</div>
      </Col>
      <Col span={8}>
        <img src={logo} alt={title} style={{ width: '100px', height: '100px' }} />
      </Col>
    </Row>
  );
};

const Vision = () => (
  <Row className={globalStyles.section} type="flex" justify="center">
    <div className={globalStyles.content}>
      <div className={globalStyles.sectionTitle}>Our Vision</div>
      <div style={{ fontSize: '26px', padding: '0 8px' }}>Defi aims to define state-of-art inclusive finance with:
      </div>
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

class ProductTile extends Component {
  state = {
    active: false
  }

  render = () => (
    <div className={globalStyles.backgroundImage} style={{ backgroundImage: `url(${this.props.background})` }}>
      <Row className={styles.productTile}
           type="flex"
           align="bottom"
           onMouseEnter={() => this.setState({ active: true })}
           onMouseLeave={() => this.setState({ active: false })}>
        <Col>
          <div><img src={this.props.icon} alt="" style={{ width: '34px', height: '30px' }} /></div>
          <div style={{ fontSize: '22px' }}>{this.props.title}</div>
          <div style={{ height: '60px' }}>{this.props.desc}</div>
          {this.state.active ?
            <Button htmlType="submit" style={{ color: '#182848', marginTop: '20px' }}>Details</Button> : null}
        </Col>
      </Row>
    </div>
  )
}

const Solutions = () => (
  <Row className={[globalStyles.section, styles.solutions].join(' ')}
       type="flex"
       justify="center"
       style={{ backgroundImage: `url(${solutionsBg})` }}>
    <div className={globalStyles.content}>
      <div className={globalStyles.sectionTitle}>Our Solutions</div>
      <Row type="flex" gutter={10}>
        <Col className={styles.solutionTile} span={10}>
          <div className={styles.solutionHeader}>
            <div className={styles.solutionTitle}>
              Enterprise Data Collaboration
            </div>
            <div className={styles.solutionDesc}>
              Financial institutions can contribute data and models to better identify, evaluate and control risk. As
              a result, more individuals will have access to better financial services.
            </div>
          </div>
          <div className={styles.solutionBody}>
            <ProductTile background={productsBg1}
                         icon={productIcon1}
                         title="Credit Fraud Detection Solution"
                         desc={`Secure joint computation platform for lending companies to detect credit fraud.`} />
          </div>
        </Col>
        <Col className={styles.solutionTile} span={14}>
          <div className={styles.solutionHeader}>
            <div className={styles.solutionTitle}>
              Personal Data Wallet
            </div>
            <div className={styles.solutionDesc}>
              Defi makes sure your data is protected and owned by you. With appropriate management and authorization,
              your data could help you get better services and even token rewards.
            </div>
          </div>
          <div className={styles.solutionBody}>
            <Row tyle="flex" gutter={2}>
              <Col span={12}>
                <ProductTile background={productsBg2}
                             icon={productIcon2}
                             title="Coinsta"
                             desc="News. Personal Data. Cryptocurrencies. Manage all your digital assets in one app." />
              </Col>
              <Col span={12}>
                <ProductTile background={productsBg3}
                             icon={productIcon3}
                             title="CreditMe"
                             desc="One stop shop to get the loan best suited for you with your own data" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  </Row>
)

const TechnologyTile = (props) => (
  <Row className={styles.technologyTile} type="flex" justify="center">
    <Col>
      <div><img src={props.icon} alt={props.title} style={{ width: '80px', height: '80px' }} /></div>
      <Spacing height="15px" />
      <div>{props.title}</div>
    </Col>
  </Row>
)

const Technologies = () => (
  <Row className={globalStyles.section} type="flex" justify="center">
    <div className={globalStyles.content}>
      <div className={globalStyles.sectionTitle}>Core Technologies</div>
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

const Partner = ({ logo }) => (
  <Col span={3.5}>
    <img src={logo} alt="" style={{ width: '111px', height: '52px' }} />
  </Col>
);

const Partners = () => (
  <Row className={[globalStyles.section, styles.partners].join(' ')}
       type="flex"
       justify="center"
       style={{ backgroundImage: `url(${partnersBg})` }}>
    <div className={globalStyles.content}>
      <div className={globalStyles.sectionTitle}>Strategic Partners & Investors</div>
      <Row type="flex" justify="center" gutter={30}>
        <Partner logo={partner1} />
        <Partner logo={partner2} />
        <Partner logo={partner3} />
        <Partner logo={partner4} />
        <Partner logo={partner5} />
        <Partner logo={partner6} />
      </Row>
      <div style={{ height: '26px' }} />
      <Row type="flex" justify="center" gutter={30}>
        <Partner logo={partner7} />
        <Partner logo={partner8} />
        <Partner logo={partner9} />
        <Partner logo={partner10} />
        <Partner logo={partner11} />
        <Partner logo={partner12} />
        <Partner logo={partner13} />
      </Row>
    </div>
  </Row>
)

class Home extends Component {
  render () {
    return (
      <div>
        <Row className={styles.banner} type="flex" justify="center" style={{ backgroundImage: `url(${homeBanner})` }}>
          <div className={globalStyles.content} style={{ marginTop: '200px', color: 'white' }}>
            <div style={{ fontSize: '50px', fontWeight: '500' }}>Blockchain-based Credit Fraud Detection</div>
            <div style={{ fontSize: '20px', lineHeight: '30px' }}>Secure joint computation platform for lending
              companies for fraud
              detection. <br />
              Now available in the Philippines.
            </div>
          </div>
        </Row>
        <Row className={styles.introduction} type="flex" align="middle" justify="center">
          <div className={globalStyles.content} style={{ padding: '20px', textAlign: 'center' }}>
            Defi Data Collaboration Protocol provides access to
            high quality, secure and sharable data. The system allows easy processing, sharing and distribution of
            data, while keeping the privacy of both enterprises and individuals intact.
          </div>
        </Row>
        <Vision />
        <Divider style={{ margin: 0 }} />
        <Solutions />
        <Technologies />
        <Partners />
      </div>
    );
  }
}

export default Home
