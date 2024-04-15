import './Footer.css'
import LogoImg from '../../assets/Asset 2@3x.png'
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

function Footer() {
  return (
    <div className='sidePadding footer'>
        <div className="top">
            <div className='one'>
                <img src={LogoImg} alt='difinito logo' />

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro fugiat, voluptatibus cupiditate fuga rerum est ab modi? Dolore, ut iste.
                </p>

                <div className="menus">
                    <div className="icon">
                        <RiTwitterXLine  />
                    </div>
                    <div className="icon">
                        <FaFacebookF  />
                    </div>
                    <div className="icon">
                        <FaInstagram  />
                    </div>
                    <div className="icon">
                        <FaYoutube  />
                    </div>
                </div>
            </div>

            <div className='two'>
                <h2>Quick Links</h2>

                <div className="menu">
                    <Link className={`link`} to='' >Home</Link>
                    <Link className={`link`} to='' >About</Link>
                    <Link className={`link`} to='' >Team</Link>
                    <Link className={`link`} to='' >Services</Link>
                    <Link className={`link`} to='' >Projects</Link>
                    <Link className={`link`} to='' >Pricing</Link>
                    <Link className={`link`} to='' >News</Link>
                    <Link className={`link`} to='' >Contact Us</Link>
                </div>
            </div>

            <div className='three'>
                <h2>Contact Us</h2>


                <div className="menu">
                    <div className="info"><FaPhone className='icon' /> 090 000 000 00</div>
                    <div className="info"><MdOutlineMail className='icon' /> user@gmail.com</div>
                    <div className="info"><MdLocationOn className='icon' /> 91 Road AAA Abuja</div>
                </div>
            </div>

        </div>

        <div className="footNote">
            <p>Powered by Difinito</p>
        </div>
    </div>
  )
}

export default Footer