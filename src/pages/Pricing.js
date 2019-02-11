import React, { Component } from 'react'
import { Row, Col, Button } from 'antd';
import globalStyles from '../global.module.css'
import styles from './Pricing.module.css'
import Spacing from '../components/Spacing'
import prepaidCash from '../assets/prepaid_cash.png'
import customizedPlan from '../assets/customized_plan.png'

class Pricing extends Component {
  render () {
    return (
        <Row className={globalStyles.section} style={{ textAlign: 'center' }} type="flex" justify="center">
          <div className={globalStyles.content}>
            <div className={styles.title}>Easy access to data, multiple plans
              to choose from
            </div>
            <Spacing height="20px" />
            <span className={styles.subtitle}>
              Also take DFT token for payment
            </span>
            <Spacing height="20px" />
            <Row type="flex" justify="center">
              <Col span={9} style={{ textAlign: 'center', color: 'white' }}>
                <div className={[styles.plan, globalStyles.backgroundImage].join(' ')}
                     style={{ backgroundImage: `url(${prepaidCash})`, padding: '46px 70px' }}>
                  <div style={{ fontSize: '30px' }}>Prepaid cash</div>
                  <div className={styles.line} />
                  <div style={{ fontSize: '16px' }}>Pay as you query</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Minimum deposit: 100 PHP</div>
                  <Spacing height="104px" />
                  <div>
                    <span style={{ color: '#405275', fontSize: '70px', lineHeight: '30px' }}>8 </span>
                    <span style={{ color: '#405275', fontSize: '30px' }}>PHP</span>
                  </div>
                  <div style={{ color: '#405275' }}>each query</div>
                  <Spacing height="40px" />
                  <Button className={styles.button1} type="primary" htmlType="button">Buy Now</Button>
                </div>
              </Col>
              <Col span={9} style={{ textAlign: 'center', color: 'white' }}>
                <div className={[styles.plan, globalStyles.backgroundImage].join(' ')}
                     style={{ backgroundImage: `url(${customizedPlan})`, padding: '46px 70px' }}>
                  <div style={{ fontSize: '30px' }}>Customized plan</div>
                  <div className={styles.line} />
                  <div style={{ fontSize: '16px' }}>Suitable for partners with
                    large query volumn or willing to
                    participate in data exchange
                  </div>
                  <Spacing height="80px" />
                  <div style={{ color: '#405275', fontSize: '16px' }}>
                    <div>• Volume discount •</div>
                    <Spacing height="8px" />
                    <div>• Free change •</div>
                  </div>
                  <Spacing height="54px" />
                  <Button className={styles.button2} type="primary" htmlType="button">Contact Us</Button>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
    )
  }
}

export default Pricing
