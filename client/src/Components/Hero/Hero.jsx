import './Hero.css'
import Vid from '../../assets/heroVid.mp4'
import { FaPlay } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='sidePadding hero'>
        <video className='backVideo' autoPlay loop muted playsInline>
            <source src={Vid} type='video/mp4' />
        </video>

        <div className="content">
            <h5>Hello,</h5>

            <h1>We are <span className="bold">Creative Agency</span></h1>

            <p className='heroText'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem blanditiis, rem ab dolores nostrum nobis dolore eaque sed. Nulla aliquam quasi aut reiciendis in, iure nisi. Laborum nulla veritatis tempore odio distinctio blanditiis nostrum minima doloremque, earum, architecto sapiente corrupti?</p>

            <div className="actions">
                <div className="btn">
                    Get Started &gt;
                </div>
                <div className="play">
                    <div className="playCard">
                        <FaPlay />
                    </div>
                    play Video
                </div>
            </div>
        </div>

        <div className="foot">
            <div className="left">
                <Link className='link'>Products</Link>
                <Link className='link'>Contact US</Link>
            </div>

            <div className="right">
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
    </div>
  )
}

export default Hero