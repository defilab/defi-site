import React, { Component } from 'react'
import { Row, Col, Button, Modal } from 'antd';
import globalStyles from '../global.module.css'
import styles from './Pricing.module.css'
import Spacing from '../components/Spacing'
import tileBg1 from '../assets/pricing_tile_bg_1.png'
import tileBg2 from '../assets/pricing_tile_bg_2.png'
import stateContext from '../context/context'
class Pricing extends Component {
  state = {
    showContactInfo: false
  }

  static contextType = stateContext;

  render() {

    const numlist = {
      'Philippines': '7.86',
      'Indonesian': '3,469.75',
      'Vietnamese': '2,108.75'
    };
    const pricelist = {
      'Philippines': 'PHP',
      'Indonesian': 'VND',
      'Vietnamese': 'IDR'
    };
    const languageLabels = {
      'en-PH': 'Philippines',
      'id-ID': 'Indonesian',
      'vi-VN': 'Vietnamese'
    };
    const country = languageLabels[this.context.conutryCode]
    const num = numlist[country];
    const price = pricelist[country];

    return (
      <div>
        <Row className={globalStyles.section} style={{ textAlign: 'center' }} type="flex" justify="center">
          <div className={globalStyles.content}>
            <div className={styles.title}>Easy access, multiple plans
              </div>
            <Spacing height="10px" />
            <div className={styles.subtitle}>After trial, there are two ways of availing our products:</div>
            <Spacing height="20px" />
            <Row type="flex" justify="center" style={{ backgroundColor: '#' }}>
              <Col span={6} style={{ textAlign: 'center', color: 'white' }}>
                <div className={[styles.plan, globalStyles.backgroundImage, globalStyles.shadow].join(' ')}
                  style={{ backgroundImage: `url(${tileBg1})`, paddingTop: '22px' }}>
                  <div style={{ fontSize: '24px', fontWeight: '600' }}>Free Trial</div>
                  <div className={styles.line} />
                  <div style={{ fontSize: '14px', fontWeight: '500' }}>Use them in 10 days</div>
                  <Spacing height="60px" />
                  <div style={{ fontWeight: '500' }}>
                    <span style={{ color: '#4A70B7', fontSize: '14px' }}>Get </span>
                    <span style={{ color: '#4A70B7', fontSize: '21px' }}>5000 </span>
                    <span style={{ color: '#4A70B7', fontSize: '14px' }}>queries <br />once you sign up</span>
                  </div>
                  <Button className={styles.button2} type="primary" htmlType="button"
                    onClick={() => this.setState({ showContactInfo: true })}>Contact Us</Button>
                </div>
              </Col>
              <Col span={6} style={{ textAlign: 'center', color: 'white' }}>
                <div className={[styles.plan, globalStyles.backgroundImage, globalStyles.shadow].join(' ')}
                  style={{ backgroundImage: `url(${tileBg2})`, paddingTop: '22px' }}>
                  <div style={{ fontSize: '24px', fontWeight: '600' }}>Prepaid Cash</div>
                  <div className={styles.line} />
                  <div style={{ fontSize: '14px', fontWeight: '500' }}>Pay as you query</div>
                  <Spacing height="34px" />
                  <div style={{ fontSize: '12px', color: '#AAAAAA' }}>Minimum deposit: 10000 PHP</div>
                  <div style={{ color: '#405275' }}>
                    <div style={{ fontWeight: '500' }}>
                      <span style={{ fontSize: '26px', lineHeight: '70px' }}>{num} </span>
                      <span style={{ fontSize: '20px' }}>{price}</span>
                    </div>
                    <div style={{ fontSize: '14px' }}>each query</div>
                  </div>
                  <Button className={styles.button1} type="primary" htmlType="button"
                    onClick={() => this.setState({ showContactInfo: true })}>Buy Now</Button>
                </div>
              </Col>
              <Col span={6} style={{ textAlign: 'center', color: 'white' }}>
                <div className={[styles.plan, globalStyles.backgroundImage, globalStyles.shadow].join(' ')}
                  style={{ backgroundImage: `url(${tileBg2})`, paddingTop: '46px' }}>
                  <div style={{ fontSize: '24px', fontWeight: '500' }}>Customized Plan</div>
                  <Spacing height="60px" />
                  <div style={{ width: '100%', color: '#182848', fontSize: '14px', fontWeight: '500' }}>
                    <div>Suitable for partners with</div>
                    <div>large query volume or</div>
                    <div>willing to participate in</div>
                    <div>data exchange</div>
                  </div>
                  <Button className={styles.button1} type="primary" htmlType="button"
                    onClick={() => this.setState({ showContactInfo: true })}>Contact Us</Button>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
        <Modal visible={this.state.showContactInfo} footer={null} centered width="314px"
          onCancel={() => this.setState({ showContactInfo: false })}>
          <div style={{ color: '#182848', textAlign: 'center' }}>
            <div style={{ fontSize: '16px' }}>Our Email</div>
            <div style={{ fontSize: '22px', lineHeight: '60px' }}>contact@defilab.com</div>
            <Button type="primary" htmlType="button" className={styles.okButton}
              onClick={() => this.setState({ showContactInfo: false })}>Ok</Button>
          </div>
        </Modal>
      </div>
    )
  }
}

export default Pricing
