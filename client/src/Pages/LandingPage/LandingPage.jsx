import CTA from '../../Components/CTA/CTA'
import CompaniesSlide from '../../Components/CompaniesSlide/CompaniesSlide'
import FAQ from '../../Components/FAQ/FAQ'
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero/Hero'
import Navbar from '../../Components/Navbar/Navbar'
import Propect from '../../Components/Propect/Propect'
import Services from '../../Components/Services/Services'
import Stats from '../../Components/Stats/Stats'
import './LandingPage.css'

function LandingPage() {
  return (
    <div className='landingPage' >
        <Navbar enableScrollEffect={true} />
        <Hero />
        <Propect />
        <CompaniesSlide />
        <Stats />
        <Services />
        <FAQ />
        <CTA />
        <Footer />
    </div>
  )
}

export default LandingPage