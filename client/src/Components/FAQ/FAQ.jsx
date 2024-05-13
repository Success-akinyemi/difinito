import { faq } from '../../data/faq'
import './FAQ.css'
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { useState } from 'react';
import TwoImg from '../../assets/one.jpg'
import OneImg from '../../assets/two.jpg'
//import SplashImg from '../../assets/splash.png'
import SplashImg from '../../assets/splash2.png'

function FAQ() {
    const [ clicked, setClicked ] = useState(false)
    const [ opt, setOpt ] = useState('interface')

    const toggle = idx => {
        if(clicked === idx){
            return setClicked(null)
        }

        setClicked(idx)
    }

  return (
    <div className='sidePadding faq'>
        <div className="up">
            <div className="left"></div>

            <div className="right">
                <div className="title">
                        Our Beneits <span></span>
                    </div>
                <h1>
                    Provide Awesome Service <br /> With Our Tools.
                </h1>

                <div className="optCard">
                    <div onClick={() => setOpt('interface')} className={`optBtn ${opt === 'interface' ? 'active' : ''}`}>Interface Design</div>
                    <div onClick={() => setOpt('website')} className={`optBtn ${opt === 'website' ? 'active' : ''}`}>Website Development</div>
                </div>

                {
                    opt === 'interface' ? (
                        <>
                            <p className="head">We combine strategy with marketing, design & technology to ensure customer prefer you</p>

                            <p className="body">
                            Discover the exceptional benefits of Difinito. Our unique tools and approach set us apart, allowing us to serve you better than ever before. By combining strategy with marketing, design, and technology, we ensure that your customers not only choose you but prefer you over the competition. At Difinito, our primary aim is your satisfaction and success. We put your brand in the spotlight, offering carefully crafted services that are delivered efficiently and effectively, without wasting your time. With Difinito, you can expect premium satisfaction and results that will leave you delighted that you chose us to serve you. Let us help you shine in the market and elevate your brand to new heights.
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="head">We combine strategy with research, design & technology to ensure enjoy your platform</p>

                            <p className="body">
                            Discover the exceptional benefits of Difinito. Our unique tools and approach set us apart, allowing us to serve you better than ever before. By combining strategy with marketing, design, and technology, we ensure that your customers not only choose you but prefer you over the competition. At Difinito, our primary aim is your satisfaction and success. We put your brand in the spotlight, offering carefully crafted services that are delivered efficiently and effectively, without wasting your time. With Difinito, you can expect premium satisfaction and results that will leave you delighted that you chose us to serve you. Let us help you shine in the market and elevate your brand to new heights.
                            </p>
                        </>
                    )
                }

            </div>

        </div>

        <div className="down">
            <div className="left">
                <div className="title">
                    Frequently asked questions <span></span>
                </div>
                <h1>
                    You Are Confused! Question <br /> and Answers.
                </h1>
                <div className='container'>
                    {
                        faq.map((item, idx) => (
                            <div className="card">
                                <div className="title" onClick={() => toggle(idx)} key={idx}>
                                    <span>
                                        {
                                            clicked === idx ? <FaMinus /> : <IoMdAdd />
                                        }
                                    </span>
                                    <h1>{item.qst}</h1>
                                </div>
                                {
                                    clicked === idx ? (
                                        <div className="dropDown">
                                            <p>{item.ans}</p>
                                        </div>

                                    ) : null
                                }
                            </div>
                        ))
                    }
                    <small>
                        <b>
                            *Feel free to ask more questions or seek further clarification on any topic related to digital marketing and services. I'm here to help!
                        </b>
                    </small>
                </div> 
            </div>

            <div className="right">
            </div>
        </div>
    </div>
  )
}

export default FAQ