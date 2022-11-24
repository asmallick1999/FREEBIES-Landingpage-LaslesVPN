import React from 'react'
import Logo from "../../Assets/Logo.svg"
import facebook from '../../Assets/Facebook.svg'
import twitter from '../../Assets/Twitter.svg'
import instagram from '../../Assets/Instagram.svg'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footerLeft">
        <img src={Logo} alt="" />
        <p>LaslesVPN is a private virtual network that<br/>has unique features and has high security.</p>
        <div className="footerLogo">
          <img src={facebook} alt="logo" />
          <img src={twitter} alt="logo" />
          <img src={instagram} alt="logo" />
        </div>
        <p className='copyrightP'>©2020LaslesVPN</p>
      </div>

      <div className="footerRight">
        <div className="product">
          <h3>Product</h3>
          <p>Download</p>
          <p>Pricing</p>
          <p>Locations</p>
          <p>Server</p>
          <p>Countries</p>
          <p>Blog</p>

        </div>
        <div className="engage">
          <h3>Engage</h3>
          <p>LaslesVPN ?</p>
          <p>FAQ</p>
          <p>Tutorials</p>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
        <div className="earnMoney">
          <h3>Earn Money</h3>
          <p>Affiliate</p>
          <p>Become Partner</p>
        </div>
      </div>

      <div className="footerRight">

      </div>

    </div>
  )
}
