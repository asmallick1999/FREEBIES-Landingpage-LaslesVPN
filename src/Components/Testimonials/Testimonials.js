import React from 'react'
import profileImage from "../../Assets/Ellipse 175.png"
import profileImage1 from "../../Assets/Ellipse 175 (1).png"
import profileImage2 from "../../Assets/Ellipse 175 (2).png"



export default function Testimonials() {
  return (
    <div className='Testimonials'>
      <div className="testimonialsTop">
        <h2>Trusted by Thousands of<br/>Happy Customer</h2>
        <p>These are the stories of our customers who have joined us with great<br/>pleasure when using this crazy feature.</p>
      </div>
      <div className="testimonialBottom">
        <div className="testimonialProfileMain">
          <div className="testimonialProfile">
            <div className="profileTop">
              <div className="profileTopLeft">


                <img src={profileImage} alt="" />
                <div className="profileDetails">
                  <h3>Viezh Robert</h3>
                  <p>Warsaw, Poland</p>
                </div>
              </div>

              <p>4.5⭐</p>
            </div>
            <div className="testiomonialMessage">
              <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
            </div>
          </div>

          <div className="testimonialProfile">
            <div className="profileTop">
              <div className="profileTopLeft">


                <img src={profileImage1} alt="" />
                <div className="profileDetails">
                  <h3>Yessica Christy</h3>
                  <p>Shanxi, China</p>
                </div>
              </div>

              <p>4.5⭐</p>
            </div>
            <div className="testiomonialMessage">
              <p>“I like it because I like to travel far and still can connect with high speed.”.</p>
            </div>
          </div>

          <div className="testimonialProfile">
            <div className="profileTop">
              <div className="profileTopLeft">


                <img src={profileImage2} alt="" />
                <div className="profileDetails">
                  <h3>Kim Young Jou</h3>
                  <p>Seoul, South Korea</p>
                </div>
              </div>

              <p>4.5⭐</p>
            </div>
            <div className="testiomonialMessage">
              <p>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
