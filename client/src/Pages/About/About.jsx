import Navbar from '../../Components/Navbar/Navbar'
import './About.css'
import ImgBg from '../../assets/statsbg.jpg'
import Footer from '../../Components/Footer/Footer'


function About() {
  return (
    <div className='about'>
        <Navbar enableScrollEffect={true} />
        <div className="aboutHero">
            <div className="overlay"></div>
            <img src={ImgBg} alt='background' />
            <div className="content">
                <h1>About Us</h1>
            </div>
        </div>

        <div className="sidePadding body">
          <div className="card">
            <div className="title">
              Who are we <span></span>
            </div>
            <div className="cardInfo">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero mollitia repellendus tenetur repudiandae, consectetur nam vitae voluptatem suscipit culpa, iusto odio. Provident est ab commodi, deleniti reiciendis dicta corrupti, incidunt pariatur atque tempora maxime adipisci, nobis enim dolores distinctio? Ex.
              </p>
              <img />
            </div>
          </div>

          <div className="card">
            <div className="title">
              Who are we <span></span>
            </div>
            <div className="cardInfo">
              <img />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita doloribus, ratione, ex blanditiis eaque nostrum quasi architecto dolores excepturi at nam necessitatibus qui, consectetur quibusdam veritatis quaerat. Modi illum dolores sit impedit! Inventore, explicabo dolorem tenetur sed voluptatibus quos molestiae amet vero perferendis nemo quasi atque alias placeat tempora minima eligendi earum excepturi maxime quod deserunt nisi laborum. Quaerat, vel veritatis? Dicta voluptatum rem officia voluptatibus? Hic necessitatibus cumque deleniti.
              </p>
            </div>
          </div>
        </div>

        <Footer />
    </div>
  )
}

export default About