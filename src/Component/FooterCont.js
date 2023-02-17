import React from 'react'
import Logo from "../Assets/logo-bookmark.svg";
import Facebook from '../Assets/icon-facebook.svg'
import Twitter from '../Assets/icon-twitter.svg'

const FooterCont = () => {
  return (
    <div className='container-fluid footerr p-5 text-center'>
        <footer className='d-flex foott justify-content-md-around align-items-md-center flex-column flex-md-row gap-5'>
            <div className="footerLogoImg">
                <img src={Logo} className="footerLogo" />
            </div>
            <ul className='m-0 d-flex flex-column flex-md-row gap-4'>
                <li className='fs-4'><a href="#">FEATURES</a> </li>
                <li className='fs-4'><a href="#">PRICING</a> </li>
                <li className='fs-4'><a href="#">CONTACT</a> </li>
            </ul>
            <div className="iconCont d-md-flex">
                <img src={Facebook} className="mx-4 footerIcons" />
                <img src={Twitter} className="mx-4 footerIcons" />
            </div>
        </footer>
    </div>
  )
}

export default FooterCont