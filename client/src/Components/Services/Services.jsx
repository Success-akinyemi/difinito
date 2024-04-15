import './Services.css'
import WorldImg from '../../assets/world.png'
import { FaArrowRight } from "react-icons/fa6";

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
                        <h1>Website Development</h1>
                    </div>
                    <div className="card">
                        <h1>User Interface Design</h1>
                    </div>
                </div>
                <div className="down">
                    <div className="card">
                        <h1>User Experience</h1>
                    </div>
                    <div className="card">
                        <h1>Digital Marketing</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services