import './Stats.css'
import ImgBg from '../../assets/statsbg.jpg'
import CountUp from 'react-countup';

function Stats() {
  return (
    <div className='sidePadding stats'>
        <img src={ImgBg} alt="stat background" />
        <div className="bg"></div>
        <div className=" content">
           <div>
            <h2><CountUp end={300} duration={4} />+</h2>
            <p>Happy client</p>
           </div>
           <div>
            <h2><CountUp end={5000} />+</h2>
            <p>Completed projects</p>
           </div>
           <div>
            <h2><CountUp end={1000} duration={4} />+</h2>
            <p>Well skilled employees</p>
           </div>
        </div>
    </div>
  )
}

export default Stats