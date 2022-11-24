import React from 'react'
import "../Common_CSS/Style.css"
import HeaderMainImg1 from '../../Assets/Illustration 1.svg'
import ContactIcon from '../../Assets/Group 1216.svg'
import LocationIcon from '../../Assets/Group 1215.svg'
import ServerIcon from '../../Assets/Group 1217.svg'

export default function HeaderMain() {
    return (
        <div className='headerMain'>
            <div className="headerTop">
                <div className="headerLeft">
                    <h1>Want anything to be<br/>easy with <span>LaslesVPN.</span></h1>
                    <p>Provide a network for all your needs with ease and fun using <span>LaslesVPN</span><br/>discover interesting features from us.</p>
                    <button>Get Started</button>
                </div>
                <div className="headerRight">
                    <img src={HeaderMainImg1} alt="" />
                </div>
            </div>

            <div className="headerBottom">
                <div className="headerInfo">
                    <img src={ContactIcon} alt="" />
                    <div>
                        <h4>90+</h4>
                        <p>User</p>
                    </div>
                </div>
                <div className="headerInfo" id='headerInfo-middle'>
                    <img src={LocationIcon} alt="" />
                    <div>
                        <h4>30+</h4>
                        <p>Location</p>
                    </div>
                </div>
                <div className="headerInfo">
                    <img src={ServerIcon} alt="" />
                    <div>
                        <h4>50+</h4>
                        <p>Servers</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
