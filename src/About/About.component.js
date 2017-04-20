import React, { Component } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle.component'
import AboutBlock from '../AboutBlock/AboutBlock.component'
import './About.style.css'

export class About extends Component {
  render() {
    let texts = getTexts();
    return (
      <div className="About section">
        <SectionTitle text="Sobre min" />
        <div className="AboutBlockContainer">
          <AboutBlock image="//img1.wsimg.com/isteam/stock/9a135b4ceb211165d47760ef4296b807fa3e73b57ebdebe5210cc4372c067a28/:/rs=w:223,h:223,cg:true,m/cr=w:223,h:223" title="Desenvolvimento WEB" text={texts[0]} />
          <AboutBlock image="//img1.wsimg.com/isteam/stock/9a135b4ceb211165d47760ef4296b807fa3e73b57ebdebe5210cc4372c067a28/:/rs=w:223,h:223,cg:true,m/cr=w:223,h:223" title="Desenvolvimento Mobile" text={texts[1]} />
          <AboutBlock image="//img1.wsimg.com/isteam/stock/9a135b4ceb211165d47760ef4296b807fa3e73b57ebdebe5210cc4372c067a28/:/rs=w:223,h:223,cg:true,m/cr=w:223,h:223" title="IoT" text={texts[2]} />
        </div>
      </div>
    )
  }
}

function getTexts(){
  return [
    <p>
      <div>Javascript { '{ NodeJS, React, Angular }' }</div>
      <div>e PHP  { '{ Laravel }' }</div>
    </p>,
    <p>
      <div>REACT NATIVE { '{iOS, Android}' }</div>
      <div>SWIFT {'{ iOS }'}</div>
    </p>,
    <p>
      <div>Raspbarry PY</div>
      <div>Arduino</div>
      <div>PIC, 8051, MSP</div>
    </p>
    ]
}

export default About;


