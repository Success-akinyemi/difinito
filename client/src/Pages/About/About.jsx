import Navbar from '../../Components/Navbar/Navbar'
import './About.css'
import ImgBg from '../../assets/statsbg.jpg'


function About() {
  return (
    <div className='about'>
        <Navbar enableScrollEffect={true} />
        <div className="aboutHero">
            <img src={ImgBg} alt='background' />
        </div>
    </div>
  )
}

export default About