import './Services.css'
import WorldImg from '../../assets/world.png'
import { FaArrowRight } from "react-icons/fa6";
import WavihandImg from '../../assets/card/waving-hand.png'

function Services() {
  return (
    <div className='sidePadding services'>
        <img src={WorldImg} alt="world background" />
        <div className="bg"></div>
        <div className="content">
            <div className="left">
                <div className="title">
                    What we do <span></span>
                </div>
                <h1>
                    The Perfect Services <br /> We're Offerring
                </h1>
                <p>Quality: We deliver high-quality services that leave our clients feeling fulfilled.</p>
                <p>Customer-centricity: Our customers are at the core of everything we do. We prioritize their needs and satisfaction.</p>
                <div className="btn">
                    <div className="btnCard">
                        More Service <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="up">
                    <div className="card">
                        <div className="cardInner">
                            <div className="front">
                                <h2>Web Development</h2>
                                <p>Our experienced developers specialize in crafting custom websites that align with your specific requirements. Whether you need an e-commerce platform or an informative website, we can bring your vision to life with precision and creativity.</p>
                                <button>
                                    <div className="btn">
                                        Learn More
                                    </div>
                                </button>
                            </div>
                            <div className="back">
                                <img src={WavihandImg} alt='hand' />
                                <h1>Web <span>Development</span></h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat magni illum?</p>
                                <div className='row'>
                                    <div className='col'>
                                        <h2>2k</h2>
                                        <p>Projects</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <button>Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardInner">
                            <div className="front">
                                <h2>UI/UX Design</h2>
                                <p>Our talented designers are experts in creating visually appealing user interfaces and seamless user experiences. We focus on intuitive designs that enhance user engagement and retention, ensuring a positive interaction with your  digital products</p>
                                <button>
                                    <div className="btn">
                                        Learn More
                                    </div>
                                </button>
                            </div>
                            <div className="back">
                                <img src={WavihandImg} alt='hand' />
                                <h1>Web <span>Development</span></h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat magni illum?</p>
                                <div className='row'>
                                    <div className='col'>
                                        <h2>2k</h2>
                                        <p>Projects</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <button>Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="down">
                    <div className="card">
                        <div className="cardInner">
                            <div className="front">
                                <h2>App Developmentt</h2>
                                <p>Our team creates high-quality mobile apps and other platform applications. We meticulously design, code, and test each app to ensure a seamless user experience. Once tested, we launch the apps on various app stores for easy download.</p>
                                <button>
                                    <div className="btn">
                                        Learn More
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardInner">
                            <div className="front">
                                <h2>Motion Graphics</h2>
                                <p>At Difinito, we seamlessly blend our exceptional graphic design and animation skills to bring static elements to life through captivating motion graphics. Our motion graphics serve as a powerful tool to convey information, tell compelling stories, and engage and captivate your audience. Let us help you elevate your brand's visual storytelling with our dynamic and innovative motion graphics solutions.</p>
                                <button>
                                    <div className="btn">
                                        Learn More
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services