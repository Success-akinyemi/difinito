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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat sequi vero repudiandae vitae quos recusandae quam repellendus culpa ratione. Rerum velit amet dolorem.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat sequi vero repudiandae vitae quos recusandae quam repellendus culpa ratione. Rerum velit amet dolorem.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat sequi vero repudiandae vitae quos recusandae quam repellendus culpa ratione. Rerum velit amet dolorem.
            </div>
        </div>
    </div>
  )
}

export default Propect