import Navbar from '../../Components/Navbar/Navbar'
import './About.css'
import ImgBg from '../../assets/aidi.png'
import Footer from '../../Components/Footer/Footer'
import ImgOne from '../../assets/card/two.jpg'
import ImgTwo from '../../assets/card/three.jpg'
import { teamMembersFamily, teamMembersFriends } from '../../data/teamMembers'


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
              <div className="imgCard one">
                <img src={ImgBg} />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="title">
             From the Mangement <span></span>
            </div>
            <div className="cardInfo two">
              <div className='imgCard'>
                <img src={ImgTwo} />
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita doloribus, ratione, ex blanditiis eaque nostrum quasi architecto dolores excepturi at nam necessitatibus qui, consectetur quibusdam veritatis quaerat. Modi illum dolores sit impedit! Inventore, explicabo dolorem tenetur sed voluptatibus quos molestiae amet vero perferendis nemo quasi atque alias placeat tempora minima eligendi earum excepturi maxime quod deserunt nisi laborum. Quaerat, vel veritatis? Dicta voluptatum rem officia voluptatibus? Hic necessitatibus cumque deleniti.
              </p>
            </div>
          </div>
        </div>

        <div className="sidePadding team">
          <div className="top">
            Our Team Members
          </div>

          <div className="teamCard">
            <div className="infoTeam">
              <h2>People</h2>
              <p>The great minds <br /> behind our works</p>
            </div>

            <div className="content">
              <h3 className='associates'>Familiy</h3>
              <div className='teamMembers'>
                {
                  teamMembersFamily.map((item, idx) => (
                    <div key={idx} className="teamCard">
                      <img src={item?.img} alt={item?.name} />
                      <div className="info">
                        <div className="name">{item?.name}</div>
                        <div className="role">{item?.role}</div>
                      </div>
                    </div>
                  ))
                }
              </div>

              <h3 className='associates'>Friends</h3>
              <div className='teamMembers'>
                {
                  teamMembersFriends.map((item, idx) => (
                    <div key={idx} className="teamCard">
                      <img src={item?.img} alt={item?.name} />
                      <div className="info">
                        <div className="name">{item?.name}</div>
                        <div className="role">{item?.role}</div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>

          </div>

        </div>
    
        <Footer />
    </div>
  )
}

export default About