import React from 'react'
import FeaturesIcon1 from '../../Assets/Illustration 2.svg'
import TickLogo from '../../Assets/Group 1120.svg'


export default function Features() {
  return (
    <div className='Features'>
        <div className="FeaturesLeft">
            <img src={FeaturesIcon1} alt="" />
        </div>
        <div className="FeaturesRight">
            <h2>We Provide Many<br/> Features You Can Use</h2>
            <p>You can explore the features that we provide with fun and<br/> have their own functions each feature.</p>
            <ul>
                <li><img src={TickLogo} alt="" />  Powerfull online protection.</li>
                <li><img src={TickLogo} alt="" />  Internet without borders.</li>
                <li><img src={TickLogo} alt="" />  Supercharged VPN</li>
                <li><img src={TickLogo} alt="" />  No specific time limits.</li>
            </ul>
        </div>
    </div>
  )
}
