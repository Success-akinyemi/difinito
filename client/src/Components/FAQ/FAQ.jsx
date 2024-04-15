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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nulla dolores. Magnam, eaque adipisci assumenda voluptate itaque reiciendis fugiat animi inventore maxime consectetur amet esse?
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="head">We combine strategy with research, design & technology to ensure enjoy your platform</p>

                            <p className="body">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nemo ex debitis voluptates ipsam mollitia similique laudantium aliquid quo hic recusandae ratione unde, repudiandae vero adipisci magni voluptatum odio. Enim.
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
                </div> 
            </div>

            <div className="right">
            </div>
        </div>
    </div>
  )
}

export default FAQ