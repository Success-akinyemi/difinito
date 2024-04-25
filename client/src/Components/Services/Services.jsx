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
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A similique voluptate, amet quia cumque ullam corrupti totam tenetur culpa, laudantium accusamus sunt obcaecati quibusdam, rem magnam tempora accusantium ipsa distinctio!</p>
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
                                <p>Web design and devlopment</p>
                                <button>hover me</button>
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
                                <h2>User Interface Design</h2>
                                <p>Web design and devlopment</p>
                                <button>hover me</button>
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
                                <h2>Web Development</h2>
                                <p>Web design and devlopment</p>
                                <button>hover me</button>
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
                                <h2>Digital Marketing</h2>
                                <p>Web design and devlopment</p>
                                <button>hover me</button>
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
            </div>
        </div>
    </div>
  )
}

export default Services