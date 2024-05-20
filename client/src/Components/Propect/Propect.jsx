import './Propect.css'
import { BiSolidTag } from "react-icons/bi";
import { FaChartLine } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";

function Propect() {
  return (
    <div className='sidePadding propect'>
        <div className="card">
            <div className="top">
                <div className="logo">
                    <BiSolidTag />
                </div>
                <h3>Vision</h3>
            </div>

            <div className="body">
            At Difinito, our vision is to bring about positive change in the digital world and make it easier for individuals and businesses to maintain a strong digital presence. We aim to achieve this by assisting our clients in standing out in the digital landscape and bringing their creative ideas to life. Join us as we shape the future of digital creativity and turn imagination into reality. Together, we will revolutionize the digital world.
            </div>
        </div>
        <div className="card">
            <div className="top">
                <div className="logo">
                    <FaChartLine />
                </div>
                <h3>Mission</h3>
            </div>

            <div className="body">
            The Difinito brand exists today to provide creative and innovative solutions to our clients in this digital world. Our goal is to help business owners and individuals enhance their digital presence, improve communication, and stand out in the market through the help of our unique, effective, and modern services. We strive to deliver high-quality and impactful solutions that meet the unique needs and goals of our clients.
            </div>
        </div>
        <div className="card">
            <div className="top">
                <div className="logo">
                    <FaChartPie />
                </div>
                <h3>Value</h3>
            </div>

            <div className="body">
                Reliability: Difinito is the reliable brand you never knew you needed. We are trustworthy and dependable, consistently delivering on our promises and exceeding your expectations. Our fast and efficient service ensures you can always count on us to deliver results. 
                Integrity: We uphold honesty and transparency in all our business practices. 
                Innovation: We are dedicated to pushing boundaries and driving forward progress.
            </div>
        </div>
    </div>
  )
}

export default Propect