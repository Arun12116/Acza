import React from 'react'
import "./Footer.css"
import { FiInstagram,FiFacebook,FiLinkedin,FiYoutube } from 'react-icons/fi';
const Footer = () => {
    return (
        <>
            <div className="footer-wrapper">
                <div className="footer-body">
                    <div className="footer-upper">
                    </div>
                    <div>
                        <h1>BOOSTER-WEBSITE</h1>

                    </div>
                    <div className='pra'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ducimus itaque saepe quaerat distinctio doloribus voluptas nam. Inventore architecto suscipit fugiat! Cumque nemo sapiente omnis corporis harum consequatur unde ea?
                      eaque.</p>

                    </div>
                    <div className="icons">
                        <li><FiFacebook style={{backgroundColor:"blue",borderRadius:"5px",padding:"2px"}}/></li>
                        <li><FiInstagram style={{backgroundColor:"red",borderRadius:"5px",padding:"2px"}}/></li>
                        <li><FiLinkedin style={{backgroundColor:"blue",borderRadius:"5px",padding:"2px"}}/></li>
                        <li><FiYoutube style={{backgroundColor:"red", borderRadius:"5px",padding:"2px"}}/></li>

                    </div>

                </div>
                <div className="footer-last">
                    <div>
                        Copyright @2023 Booster-application
                    </div>
                    <div className='switch'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Footer