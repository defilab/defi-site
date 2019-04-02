import React, { Component } from 'react'
import { Row, Col, Menu, Card, Divider } from 'antd'
import { Route, Redirect } from "react-router-dom"
import { withRouter } from "react-router";
import { Link } from "react-router-dom"
import globalStyles from '../global.module.css'
import styles from './Company.module.css'
import './override.css'
import coinDesk from '../assets/coindesk.png'
import businessWeek from '../assets/business_week.png'
import cbnWeekly from '../assets/cbn_weekly.png'
import cnbc from '../assets/cnbc.png'
import aboutBanner from '../assets/about_us_banner.png'
import teamBanner from '../assets/team_banner.png'
import mediaBanner from '../assets/media_banner.png'
import joinBanner from '../assets/join_banner.png'

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
  <div style={{ fontWeight: 'light', textAlign: 'justify' }}>
    <p style={{ lineHeight: '30px' }}>Defi provides solutions for both enterprises and individuals. Enterprises can
      participate in data collaboration without exposing their original data to realize greater value. Individuals can
      minimize data risks and enhance data protection, while generating value from it. Defi has raised investments
        from acclaimed investment institutions including Ceyuan Ventures, Cherubic Ventures, DHVC & Ledger Capital.</p>
  </div>
)

const TeamTile = (props) => (
  <Card className={globalStyles.shadow} bordered={false}
    style={{ color: '#182848', marginBottom: '12px', position: 'relative', overflow: 'hidden' }}>
    <div style={{
      fontFamily: 'Arial',
      position: 'absolute',
      fontSize: '120px',
      fontWeight: '500',
      color: '#EEF2F8',
      bottom: '-56px',
      right: '-12px',
      userSelect: 'none'
    }}>{props.item.position}</div>
    <div style={{ position: 'relative' }}>
      <div style={{
        fontSize: '20px',
        fontWeight: '500',
        marginLeft: '10px'
      }}>{props.item.position} - {props.item.name}</div>
      <div style={{ lineHeight: '24px', textAlign: 'justify' }}>
        <ul style={{ listStyle: 'none', paddingLeft: '10px', marginTop: '10px' }}>
          {props.item.desc.map((desc, i) => (
            <li className={styles.memberDesc} style={{ marginTop: '10px' }} key={i}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  </Card>
)

const teamMembers = [
  {
    name: 'Kate Shen',
    position: 'CEO',
    desc: [
      'Managed software development as program manager at Microsoft and Hulu, led design and development of Hulu’s second generation search engine (~10 million monthly users).',
      'Built Xiaomi’s presence in early international markets, and served as country manager Singapore and Malaysia. Track record in building global market presence and community-based consumer marketing for tech products.',
      'B.S. in Computer Science, Carnegie Mellon University.'
    ]
  },
  {
    name: 'Yupeng Liao',
    position: 'Engineering',
    desc: [
      'Principal architect at Hulu, full stack engineer, 10 years of experience in software development and architecture design. Track record to build scalable and secure architecture that supports billion level daily transactions. ',
      'Early designer of Hulu’s Digital Rights Management (DRM) technology on Android, with industry-proven encryption design and deployment.',
      'B.S. in the Electronic Engineering, Tsinghua University.'
    ]
  },
  {
    name: 'Pillie Wang',
    position: 'Product',
    desc: [
      'Former product lead of Lefinance and Blockchain Lab, with extensive experiences in fund products, fixed income products and crowdfunding business.',
      'Former product lead of Venture Capital Circle, in charge of product development and business growth, developed intelligent search engine, recommendation system and transaction system for primary market. ',
      'Former product lead of P2peye, built the first P2P ETF product in China with more than one billion CNY of transactions each year.',
      'Bachelor in Journalism, Renmin University. '
    ]
  },
  {
    name: 'Vincent Lv',
    position: 'Operation',
    desc: [
      'Former Director of monetization at China’s #1 mobile fitness app. Built up the ecommerce business and realized exponential revenue growth to $8 million in year one and $32 million in year two.',
      'Former User Operations Manager at Xiaomi and former management consultant at Accenture.',
      'Bachelor in Finance, Renmin University. '
    ]
  },
  {
    name: 'Summer Zhang',
    position: 'Partnership',
    desc: [
      'Former Strategy Investment Manager at 9fbank, China’s leading fintech company with a full spectrum services including consumer lending, credit cards. Specialized in blockchain investment and business expansion in Southeast Asia.',
      'Former Corporate Risk Advisory Consultant at Deloitte.',
      'Master in Accounting, The University of Texas at Dallas; Bachelor in Public Finance & Accounting, Shanghai Finance & Economics University.'
    ]
  },
  {
    name: 'Lynne Zhang',
    position: 'Marketing',
    desc: [
      'New media operations manager and marketing manager of CBNweekly, having many mainstream financial media resources.',
      'Bitcoin\'s early investor. Built a blockchain goddess global community, and jointly launched nearly 100 media, project, and exchange platforms to launch airdrop activities, brought about 300,000 new registered users.',
      'One of the founding team members of the world\'s first blockchain app store— BYBstore, led the BD and marketing department, with 300+ blockchain media, project parties, and community resources. planned several currency theme activities，and influenced nearly one million digi tal currency investors.'
    ]
  },
  {
    name: 'Jason Lu',
    position: 'Advisor',
    desc: [
      'Former VP/CRO of Ant Financial, world’s largest fintech company with 450 million users and operator of Alipay (world\'s largest mobile and online payments platform) as well as Yu’e Bao (world\'s largest money-market fund). In charge of fraud risk, trust and safety, cybersecurity, big data & analytics, biometrics AI and CS divisions globally.',
      'Former Sr. Director of Paypal. Served as risk technology and data science executive with 20+ years of experience in PayPal, Reuters, 1st Financial Bank and UBS. ',
      'Extensive expertise in the development of complex real time financial systems and products. '
    ]
  },
  {
    name: 'Bin Zhang',
    position: 'Advisor',
    desc: [
      'Ex-CEO of China Cheng Xin Credit, one of the largest credit scoring and credit rating companies in China.',
      'Founder & ex-CEO of UMF, a top fintech company and one of the largest third-party payment companies in China; Under Mr. Zhang’s leadership, UMF joined Hyperledger as one of the earliest Chinese member. '
    ]
  },
]

const Team = () => (
  <Row type="flex" gutter={12}>
    <Col span={24}>
      {teamMembers.map((m, i) => (
        <TeamTile item={m} key={i} />
      ))}
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
    <div style={{ lineHeight: '30px' }}>{props.desc}</div>
    <div style={{ fontSize: '20px', margin: '24px 0 15px' }}>Job Requirements</div>
    <div style={{ ineHeight: '30px' }}>{props.requirements}</div>
  </div>
)

const Join = () => (
  <div>
    <JoinItem title="Business Development Associate" desc={
      <div>
        1. Help focus Defi’s business strategy in specific areas of interest <br />
        2. Take an opportunity from inception to completion, owning the process from sourcing to diligence to
          execution <br />
        3. Engage with the broader organization (product, engineering, marketing, etc.) to further qualify
          opportunities and refine our areas of strategic interest </div>
    } requirements={
      <div>
        1. 5+ years experience in VC, banking, consulting, or finance at a tech startup <br />
        2. Understanding of the Fintech and / or Blockchain landscape <br />
        3. Strong verbal and written communication skills <br />
        4. Serious attention to detail and a commitment to excellence <br />
        5. Proactive, energetic and collaborate </div>
    } />
    <Divider />
    <JoinItem title="Senior Software Engineer" desc={
      <div>
        1. Build enterprise, distributed payment applications that execute settlement within seconds to enable the
          Internet of Value <br />
        2. Prototype new solutions for complex software problems and implement them for production consumer finance
          companies deployments <br />
        3. Be a technical subject matter expert and share your expertise with a growing team of engineers <br />
        4. Work with teams across the organization, including product, legal, and business development to think beyond
          the technical implications of your design decisions </div>
    } requirements={
      <div>
        1. A deep understanding of Java and its ecosystem <br />
        2. Experience building scalable and performant enterprise software <br />
        3. Eagerness to work openly and collaboratively with a diverse team <br />
        4. A positive attitude and a passion for sharing knowledge - the go-to person on the team for small and large
          questions <br />
        5. Ability to encourage engineering best practices in a team and the larger department <br />
        6. Bachelor’s in Computer Science or similar + 5 years of hands on Software Development experience, or
          Master’s in Computer Science or similar + 2 years of hands on Software Development experience </div>
    } />
    <Divider />
    <JoinItem title="Sales Director" desc={
      <div>
        1. Have strong working knowledge of the Defi products and services and be able to present the value of said
          solutions to the appropriate audiences <br />
        2. Responsible for attaining assigned booking targets in the form of sales quota <br />
        3. Generate leads and drive sales bookings for Defi products and services <br />
        4. Formulate the strategies, tactics and account plans, under the direction of management, necessary to
          develop the leads and relationships within assigned territory/accounts <br />
        5. Travel to client sites, present sales materials and conduct product demonstrations to potential
          clients <br />
        6. Manage the effective and rapid movement of leads through sales process, including qualification of
        prospects; assessment of potential client needs; presentment of Defi solutions; and expeditious closing of
          business <br />
        7. Responsible for the daily maintenance of prompt and accurate sales pipeline forecasting </div>
    } requirements={
      <div>
        1. Bachelor’s degree preferred <br />
        2. Minimum of 5 years experience in the financial services industry <br />
        3. Must have a proven track record of successful sales <br />
        4. Working knowledge of regulations surrounding the financial services industry <br />
        5. Positive attitude and unsurpassed client relationship management skills <br />
        6. Demonstrated ability to handle multiple projects simultaneously and in a timely manner <br />
        7. Results-oriented </div>
    } />
  </div>
)

const Banner = (props) => (
  <Row type="flex" justify="center" align="middle"
    style={{ height: '260px', backgroundImage: `url(${props.image})` }}>
    <div style={{ color: 'white', fontSize: '40px', fontWeight: '500' }}>{props.title}</div>
  </Row>
)

class Company extends Component {
  render() {
    return (
      <div>
        <Route path="/company/about" render={() => <Banner title="About Us" image={aboutBanner} />} />
        <Route path="/company/team" render={() => <Banner title="Team" image={teamBanner} />} />
        <Route path="/company/media" render={() => <Banner title="Media" image={mediaBanner} />} />
        <Route path="/company/join" render={() => <Banner title="Join Us" image={joinBanner} />} />
        <Row type="flex" justify="center" style={{ paddingTop: '50px', paddingBottom: '80px' }}>
          <Row className={globalStyles.content}>
            <Col span={4}>
              <SideMenu />
            </Col>
            <Col span={20}>
              <div style={{ paddingLeft: '20px' }}>
                <Route exact path="/company" render={() => (
                  <Redirect to="/company/about" />
                )} />
                <Route path="/company/about" component={About} />
                <Route path="/company/team" component={Team} />
                <Route path="/company/media" component={Media} />
                <Route path="/company/join" component={Join} />
              </div>
            </Col>
          </Row>
        </Row>
      </div>
    );
  }
}

export default Company;
