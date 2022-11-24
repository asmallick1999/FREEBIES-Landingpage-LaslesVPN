import React from 'react'
import TickLogo from '../../Assets/Group 1120.svg'
import free from '../../Assets/Free.svg'


export default function ChoosePlan() {
    return (
        <div className='choosePlan'>
            <div className="choosePlanTop">
                <h2>Choose Your Plan</h2>
                <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
            </div>

            <div className='choosePlanBottomMain'>
                <div className="choosePlanBottom">
                    <div className="choosePlanBottom1">
                        <img src={free} alt="" className='img' />
                        <h4>Free</h4>
                        <ul>
                            <li><img src={TickLogo} alt="" />  Unlimited Bandwitch</li>
                            <li><img src={TickLogo} alt="" />  Encrypted Connection</li>
                            <li><img src={TickLogo} alt="" />  No Traffic Logs</li>
                            <li><img src={TickLogo} alt="" />  Works on All Devices</li>
                        </ul>
                    </div>
                    <div className="choosePlanBottom2">
                        <h3>Free</h3>
                        <button>Select</button>
                    </div>

                </div>

                <div className="choosePlanBottom">
                    <div className="choosePlanBottom1">
                        <img src={free} alt="" className='img' />
                        <h4>Standard Plan</h4>
                        <ul>
                            <li><img src={TickLogo} alt="" />  Unlimited Bandwitch</li>
                            <li><img src={TickLogo} alt="" />  Encrypted Connection</li>
                            <li><img src={TickLogo} alt="" />  Yes Traffic Logs</li>
                            <li><img src={TickLogo} alt="" />  Works on All Devices</li>
                            <li><img src={TickLogo} alt="" />  Connect Anyware</li>
                        </ul>
                    </div>
                    <div className="choosePlanBottom2">
                        <h3>$9 / mo</h3>
                        <button>Select</button>
                    </div>

                </div>

                <div className="choosePlanBottom">
                    <div className="choosePlanBottom1">
                        <img src={free} alt="" className='img'/>
                        <h4>Premium Plan</h4>
                        <ul>
                            <li><img src={TickLogo} alt="" />  Unlimited Bandwitch</li>
                            <li><img src={TickLogo} alt="" />  Encrypted Connection</li>
                            <li><img src={TickLogo} alt="" />  Yes Traffic Logs</li>
                            <li><img src={TickLogo} alt="" />  Works on All Devices</li>
                            <li><img src={TickLogo} alt="" />  Connect Anyware</li>
                            <li><img src={TickLogo} alt="" />  Get New Features</li>
                            
                        </ul>
                    </div>
                    <div className="choosePlanBottom2">
                        <h3>$12 / mo</h3>
                        <button className='btn3'>Select</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
