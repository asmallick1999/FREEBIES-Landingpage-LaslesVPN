import React from 'react'
import hugeGlobal from '../../Assets/Huge Global.svg'

import NetflixLogo from "../../Assets/Mask Group.svg";
import RedditLogo from "../../Assets/Mask Group1.svg";
import AmazonLogo from "../../Assets/Mask Group2.svg";
import DiscordLogo from "../../Assets/Mask Group3.svg";
import SpotifyLogo from "../../Assets/Mask Group4.svg";

export default function GlobalNetwork() {
    return (<>
        <div className='globalNetwork'>
            <div className="globalNetworkTop">
                <h2>Huge Global Network<br/>of Fast VPN</h2>
                <p>See LaslesVPN everywhere to make it easier for you when you move<br/>locations.</p>
            </div>
            <div className='globalNetworkImg'>
                <img src={hugeGlobal} alt="" />
            </div>


        </div>
        <div className="globalNetworkBottom">
            <img src={NetflixLogo} alt="" />
            <img src={RedditLogo} alt="" />
            <img src={AmazonLogo} alt="" />
            <img src={DiscordLogo} alt="" />
            <img src={SpotifyLogo} alt="" />
        </div>
    </>
    )
}
