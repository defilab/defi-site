import React, { Component } from 'react'
import { Row, Col, Menu, Card, Divider } from 'antd'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { withRouter } from "react-router";
import { Link } from "react-router-dom"
import globalStyles from '../global.module.css'
import styles from './Company.module.css'
import './override.css'
import coinDesk from '../assets/coindesk.png'
import businessWeek from '../assets/business_week.png'
import cbnWeekly from '../assets/cbn_weekly.png'
import cnbc from '../assets/cnbc.png'

const SideMenu = withRouter((props) => (
    <Menu className={styles.menu} selectedKeys={[props.location.pathname.split('/').pop()]}>
      <Menu.Item className={styles.menuItem} key="about">
        <Link to="/company/about">About Us</Link>
      </Menu.Item>
      <Menu.Item className={styles.menuItem} key="team"><Link to="/company/team">Team</Link></Menu.Item>
      <Menu.Item className={styles.menuItem} key="media"><Link to="/company/media">Media</Link></Menu.Item>
      <Menu.Item className={styles.menuItem} key="join"><Link to="/company/join">Join Us</Link></Menu.Item>
    </Menu>
))

const About = () => (
    <div style={{ fontWeight: 'lighter' }}>
      <p style={{ lineHeight: '30px' }}>Founded in 2019, Defi Inc. is a leading financial technology company. We provide
        solutions for both enterprises
        and individuals. Enterprises can participate in data collaboration without exposing their original data to
        realize greater value. Individuals can minimize data risks and enhance data protection, while generating value
        from it.</p>
      <p style={{ lineHeight: '30px' }}>Defi Inc. has secured investments from acclaimed investment institutions
        including Ceyuan Ventures, Cherubic
        Ventures, Chaosheng Ventures, and Danhua Capital. Defi Inc. is invited to the HyperLedger and Linux Foundation,
        and has maintained close cooperation with mainstream media and well-known academic institutions.</p>
    </div>
)

const TeamTile = (props) => (
    <Card className={globalStyles.shadow} bordered={false} style={{ color: '#182848', marginBottom: '10px' }}>
      <div style={{ fontSize: '20px' }}>{props.title}</div>
      <div style={{ lineHeight: '24px', fontWeight: 'lighter' }}>{props.children}</div>
    </Card>
)

const Team = () => (
    <Row type="flex" gutter={12}>
      <Col span={12}>
        <TeamTile title="CEO - Kate Shen">Managed software development as program manager at
          Microsoft and Hulu, led design and development of Hulu’s second generation search engine (~10 million monthly
          sers).Built Xiaomi’s presence in early international markets,and served as country manager Singapore and
          Malaysia. Track record in building global market presence and community-based consumer marketing for tech
          products.B.S. in Computer Science, Carnegie Mellon University."</TeamTile>
        <TeamTile title="Partnership - Summer Zhang">Former Strategy Investment Manager at 9fbank, China’s leading
          fintech company with a full spectrum services including consumer lending, credit cards and credit cards.
          Specialize in blockchain investment and business expansion in Southeast Asia.
          Former Corporate Risk Advisory Consultant at Deloitte.
          Master in Accounting, The University of Texas at Dallas; Bachelor in Public Finance & Accounting, Shanghai
          Finance & Economics University.</TeamTile>
        <TeamTile title="Tech - Yupeng Liao">
          Principal architect at Hulu, full stack engineer, 10 years of experience in software development and
          architecture design. Track record to build scalable and secure architecture that supports billion level daily
          transactions.
          Early designer of Hulu’s Digital Rights Management (DRM) technology on Android, with industry-proven
          encryption design and deployment.
          B.S. in the Electronic Engineering, Tsinghua University.
        </TeamTile>
        <TeamTile title="Advisor - Bin Zhang">
          Ex-CEO of China Cheng Xin International Credit Rating Co. Ltd, one of the largest credit scoring and credit
          rating companies in China.
          Founder & ex-CEO of UMF, a top fintech company and one of the largest third-party payment companies in China;
          Under Mr. Zhang’s leadership, UMF joined Hyperledger as one of the earliest Chinese member.
          Board Member of Bai Hang Zheng Xin (China Credit Alliance), a government-led initiative for credit data
          sharing.
        </TeamTile>
      </Col>
      <Col span={12}>
        <TeamTile title="Operation - Vincent Lu">
          Former Director of monetization at China’s #1 mobile fitness app. Built up the ecommerce business and realized
          exponential revenue growth to $8 million in year one and $32 million in year two.
          Former User Operations Manager at Xiaomi and former management consultant at Accenture.
          Bachelor in Finance, Renmin University.
        </TeamTile>
        <TeamTile title="Product - Pillie Wang">
          Former product lead of Lefinance and Blockchain Lab, with extensive experience in fund products, fixed income
          products, crowdfunding business；
          Former product lead of Venture Capital Circle, in charge of product development and business growth, developed
          primary market smart engine and transaction system;
          Former product lead of P2peye, built the first P2P ETF product in China with more than one billion CNY of
          trasactions each year;
          Bachelor in Journalism, Renmin University.
        </TeamTile>
        <TeamTile title="Marketing - Lynne Zhang">
          New media operations manager and marketing manager of CBNweekly , having many mainstream financial media
          resources;
          Bitcoin's early investor, joined the blockchain industry in 2018. built a blockchain goddess global community,
          and jointly launched nearly 100 media, project, and exchange platforms to launch airdrop activities, brought
          about 300,000 new registered users.
          One of the founding team members of the world's first blockchain APP store— BYBstore , led the BD and
          marketing department, with 300+ blockchain media, project parties, and community resources. planned several
          currency theme activities，and influenced nearly one million digital currency investors.
        </TeamTile>
        <TeamTile title="Adviser - Jason Lu">
          Former VP/CRO of Ant Financial, world’s largest fintech company with 450 million users and operator of Alipay
          (world's largest mobile and online payments platform) as well as Yu’e Bao (world's largest money-market fund).
          In charge of fraud risk, trust and safety, cybersecurity, big data & analytics, biometrics AI and CS divisions
          globally.
          Former Sr. Director of Paypal. Served as risk technology and data science executive with 20+ years of
          experience in PayPal, Reuters, 1st Financial Bank and UBS.
          Extensive expertise in the development of complex real time financial systems and products.
        </TeamTile>
      </Col>
    </Row>
)

const Media = () => (
    <Row>
      <img src={businessWeek} alt="" style={{ height: '140px', marginRight: '8px' }} />
      <img src={cnbc} alt="" style={{ height: '140px', marginRight: '8px' }} />
      <img src={coinDesk} alt="" style={{ height: '140px', marginRight: '8px' }} />
      <img src={cbnWeekly} alt="" style={{ height: '140px', marginRight: '8px' }} />
    </Row>
)

const JoinItem = (props) => (
    <div>
      <div style={{ fontSize: '26px' }}>{props.title}</div>
      <div style={{ fontSize: '20px', margin: '20px 0 15px' }}>Job Description</div>
      <div style={{ fontWeight: 'lighter', lineHeight: '30px' }}>{props.desc}</div>
      <div style={{ fontSize: '20px', margin: '24px 0 15px' }}>Job Requirements</div>
      <div style={{ fontWeight: 'lighter', lineHeight: '30px' }}>{props.requirements}</div>
    </div>
)

const Join = () => (
    <div>
      <JoinItem title="Community Specialist" desc={
        <div>
          1. Create strategies for operation, build groups of core users, undertake brand promotion, and develop and
          maintain relationship with users; <br />
          2. Manage social media strategy and increase online traction by adding followers and promoting
          interactions; <br />
          3. Organize online and offline activities on a regular basis to engage users in all relevant channels; <br />
          4. Track and analyse key data metrics on a daily basis to improve engagement.
        </div>
      } requirements={
        <div>
          1. Undergraduate degree or above; <br />
          2. 1-3 years of work experience in community operation; experience in blockchain industry preferred; <br />
          3. Good data analysis skills and experience in performing PDCA cycle is preferred. <br />
        </div>
      } />
      <Divider />
      <JoinItem title="Product Operation Manager" desc={
        <div>
          1. Follow latest products and content trends, collect user feedback, and continuously optimize product
          functions; <br />
          2. Establish user groups and build strategies based on product functions, access the effectiveness of various
          activities and plan optimization; <br />
          3. Plan online engagement activities, and coordinate with marketing, design and R&D teams to execute
          plans. <br />
          4. Carry out daily data tracking and analysis to improve key metrics.
        </div>
      } requirements={
        <div>
          1. Undergraduate degree or above; <br />
          2. 1-3 years of work experience in product operation; experience in blockchain industry preferred; <br />
          3. Good data analysis skills and experience in performing PDCA cycle is preferred.
        </div>
      } />
      <Divider />
      <JoinItem title="Software Developer" desc={
        <div>
          1. Participate in the design, development and optimization of mobile internet products in finance
          industry; <br />
          2. Contribute in conceptualizing framework designs and deployment of technology; <br />
          3. Assist in producing relevant documents and ensure their regular updation to enhance the product
          quality; <br />
          4. Continuously optimize the related product quality, performance and user experience.
        </div>
      } requirements={
        <div>
          1. Undergraduate degree or above, with more than 3 years of experience in mobile app programming; <br />
          2. Experience with multiple programming languages and performance optimization for mobile apps; <br />
          3. Individuals with experience in blockchain industry preferred. <br />
        </div>
      } />
    </div>
)

class Company extends Component {
  navigate = (e) => {
    this.props.history.push(`/company/${e.key}`)
  }

  render () {
    return (
        <Router>
          <Row type="flex" justify="center" style={{ paddingTop: '50px', paddingBottom: '80px' }}>
            <Row className={globalStyles.content}>
              <Col span={4}>
                <SideMenu />
              </Col>
              <Col span={20}>
                <div style={{ paddingLeft: '20px' }}>
                  <Route exact path="/company/about" component={About} />
                  <Route exact path="/company/team" component={Team} />
                  <Route exact path="/company/media" component={Media} />
                  <Route exact path="/company/join" component={Join} />
                </div>
              </Col>
            </Row>
          </Row>
        </Router>
    );
  }
}

export default Company;
