import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Spacing from '../components/Spacing'
import globalStyles from '../global.module.css'
import styles from './Products.module.css'
import banner from '../assets/products_banner.png'
import graph from '../assets/data_collaboration_graph.png'
import b1 from '../assets/1.png'
import b2 from '../assets/2.png'
import b3 from '../assets/3.png'
import b4 from '../assets/4.png'
import b5 from '../assets/5.png'
import b6 from '../assets/6.png'
import useCasesBg from '../assets/use_cases_bg.png'
import dataCoverage1 from '../assets/data_coverage_1.png'
import dataCoverage2 from '../assets/data_coverage_2.png'
import dataCoverage3 from '../assets/data_coverage_3.png'
import dataCoverage4 from '../assets/data_coverage_4.png'
import dataCoverage5 from '../assets/data_coverage_5.png'
import advantageBg1 from '../assets/advantage_bg_1.png'
import advantageBg2 from '../assets/advantage_bg_2.png'
import advantageBg3 from '../assets/advantage_bg_3.png'

const Step = (props) => (
    <Row type="flex" align="middle">
      <Col span={1}>
        <img src={props.icon} alt="" style={{ width: '27px', height: '27px' }} />
      </Col>
      <Col className={styles.stepDesc} span={23}>{props.desc}</Col>
    </Row>
)

const UseCases = () => (
    <Row className={[globalStyles.section, styles.useCases].join(' ')} type="flex" justify="center"
         style={{ backgroundImage: `url(${useCasesBg})` }}>
      <div className={globalStyles.content}>
        <div className={globalStyles.sectionTitle}>Use Cases</div>
        <div className={globalStyles.shadow} style={{ backgroundColor: 'white' }}>
          <Row>
            <Col className={styles.useCaseTile} span={12}>
              <div className={styles.useCaseTitle}>Pre-loan Investigation</div>
              <p className={styles.useCaseDesc}>Fraud detection can effectively reduce the personal credit risk, provide
                a clearer understanding of individuals, and help financial institutions to make further decisions.</p>
            </Col>
            <Col className={styles.useCaseTile} span={12}>
              <div className={styles.useCaseTitle}>Financial Risk Management</div>
              <p className={styles.useCaseDesc}>Based on different types of fraud detection, the potential risks wirh
                individual accounts are identified, leading to different decisions.</p>
            </Col>
          </Row>
        </div>
      </div>
    </Row>
)

const DataCoverageItem = (props) => (
    <Row type="flex" justify="center">
      <Col>
        <div style={{ textAlign: 'center' }}><img src={props.icon} alt={props.title}
                                                  style={{ width: '36px', height: '39px' }} /></div>
        <Spacing height="20px" />
        <div style={{ textAlign: 'center', fontSize: '12px' }}>{props.title}</div>
      </Col>
    </Row>
)

const DataCoverage = () => (
    <Row className={globalStyles.section} type="flex" justify="center">
      <div className={globalStyles.content}>
        <div className={globalStyles.sectionTitle}>Data Coverage</div>
        <Spacing height="30px" />
        <Row type="flex" justify="space-around">
          <Col span={4}><DataCoverageItem icon={dataCoverage1} title="Credit overdue records" /></Col>
          <Col span={4}><DataCoverageItem icon={dataCoverage2} title="Fake addresses" /></Col>
          <Col span={4}><DataCoverageItem icon={dataCoverage3} title="False contracts" /></Col>
          <Col span={4}><DataCoverageItem icon={dataCoverage4} title="Falsified documentations" /></Col>
          <Col span={4}><DataCoverageItem icon={dataCoverage5} title="Illicit activities" /></Col>
        </Row>
      </div>
    </Row>
)

const Advantages = () => (
    <Row className={[globalStyles.section, styles.advantages].join(' ')} type="flex" justify="center">
      <div className={globalStyles.content}>
        <div className={globalStyles.sectionTitle}>Our Advantages</div>
        <div style={{ textAlign: 'center' }}>Defi’s innovative technology guarantees the authenticity, security and
          privacy of data.
        </div>
        <Spacing height="30px" />
        <Row className={styles.advantageTile}
             style={{ height: '275px', backgroundImage: `url(${advantageBg1})`, backgroundSize: '100% 100%' }}>
          <div className={styles.advantageTitle}>Authenticity</div>
          <Spacing height="20px" />
          <Row type="flex">
            <Col span={11}>
              <div className={styles.advantageSubtitle}>Cross Validation</div>
              <div className={styles.advantageDesc}>Cross validation enables Defi to ensure accuracy and authenticity of
                data. By training the system to evaluate the structural data, it is able to achieve high performance
                levels of the eventual data.
              </div>
            </Col>
            <Col span={2} />
            <Col span={11}>
              <div className={styles.advantageSubtitle}>User Evaluation System</div>
              <div className={styles.advantageDesc}>Decentralized user evaluation system accesses each data provider and
                validates the data for accuracy and other criteria. This also simplifies decision making, along with
                reducing decision costs for other users.
              </div>
            </Col>
          </Row>
        </Row>
        <div>
          <Row>
            <Col className={styles.advantageTile} span={12} style={{
              height: '310px',
              backgroundImage: `url(${advantageBg2})`,
              backgroundSize: '100% 100%'
            }}>
              <div className={styles.advantageTitle}>Security</div>
              <Spacing height="20px" />
              <div className={styles.advantageSubtitle}>Muti-party Computation (MPC)</div>
              <div className={styles.advantageDesc}>MPC solves the problem of privacy protection in collaborative
                computing that involves multiple unrelated participants. MPC ensures independent inputs, and accurate
                and decentralized data. Raw data from individual participants are not revealed, as only the consolidated
                final data are unveiled.
              </div>
            </Col>
            <Col className={styles.advantageTile} span={12} style={{
              height: '310px',
              backgroundImage: `url(${advantageBg3})`,
              backgroundSize: '100% 100%'
            }}>
              <div className={styles.advantageTitle}>Privacy</div>
              <Spacing height="20px" />
              <div className={styles.advantageSubtitle}>Trusted Computing</div>
              <div className={styles.advantageDesc}>Trusted computing leads to higher personal security in multiple
                ways. It prevents programs from inappropriate reading from and writing to each other’s memory. It also
                mitigates threats from spyware, allows computers to securely store encryption keys, ad detects
                unauthorized changes to software.
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Row>
)

class Products extends Component {
  render () {
    return (
        <div>
          <Row className={styles.banner} type="flex" justify="center" style={{ backgroundImage: `url(${banner})` }}>
            <div className={globalStyles.content}>
              <div style={{ fontSize: '40px', marginTop: '35px' }}>Blockchain-based credit fraud detection</div>
              <div style={{ fontSize: '16px', marginTop: '5px', lineHeight: '22px' }}>
                Secure joint computation platform for lending companies to detect fraud <br />
                Now in the Philippines
              </div>
            </div>
          </Row>
          <Row className={[globalStyles.section, styles.intro].join(' ')} type="flex" justify="center">
            <div className={globalStyles.content}>
              <div className={globalStyles.sectionTitle}>Defi’s Credit Fraud Detection Platform</div>
              <div className={globalStyles.sectionSubtitle}>Defi Data Collaboration Protocol provides credit fraud
                detection service
                in phase one. <br />
                When a consumer lending company receives a loan application and is not sure about the applicant’s risk
                level, it could initiate a credit fraud detection request. The results from Defi’s Credit Fraud
                Detection system gives accurate information and aids in making business decisions.
              </div>
            </div>
          </Row>
          <Row className={globalStyles.section} type="flex" justify="center">
            <div className={globalStyles.content}>
              <div className={globalStyles.sectionTitle}>Business Process</div>
              <img src={graph} alt="" style={{ width: '1000px', height: '612px' }} />
              <Step icon={b1} desc={`When evaluating loan application risk, consumer lending company A initiates a credit fraud detection
                  request with the Defi platform`} />
              <Spacing height="18px" />
              <Step icon={b2}
                    desc={`Fraud List Providers (other lending companies) who have relevant data, receive the request`} />
              <Spacing height="18px" />
              <Step icon={b3} desc={`Fraud List Providers process and send the results to the Defi platform`} />
              <Spacing height="18px" />
              <Step icon={b4} desc={`Consumer lending company A receives the results`} />
              <Spacing height="18px" />
              <Step icon={b5} desc={`Consumer lending company A makes the payment on the Defi platform`} />
              <Spacing height="18px" />
              <Step icon={b6} desc={`Fraud List Providers receive the payment for data collaboration`} />
            </div>
          </Row>
          <UseCases />
          <DataCoverage />
          <Advantages />
        </div>
    )
  }
}

export default Products
