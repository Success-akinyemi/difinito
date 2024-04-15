import './Navbar.css'
import LogoImg from '../../assets/Asset 2@3x.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Navbar({enableScrollEffect}) {
    const [isScroll, setIsScroll] = useState(false)

        useEffect(() => {
            if(enableScrollEffect){
                window.onscroll = () => {
                    setIsScroll(window.pageYOffset === 0 ? false : true)
                }
            }
        }, [])

  return (
    <div className={`sidePadding navbar ${isScroll ? 'scroll' : 'none'} ${!enableScrollEffect ? 'show' : ''}`} >
        <div className="left">
            <Link to='/'>
                <img src={LogoImg} alt='Difinito logo' />
            </Link>
        </div>

        <div className="right">
            <div className="menu">
                <Link className={`link ${isScroll ? 'dark' : 'white'}`} to='' >Home</Link>
                <Link className={`link ${isScroll ? 'dark' : 'white'}`} to='' >About</Link>
                <Link className={`link ${isScroll ? 'dark' : 'white'}`} to='' >Team</Link>
                <Link className={`link ${isScroll ? 'dark' : 'white'}`} to='' >Services</Link>
                <Link className={`link ${isScroll ? 'dark' : 'white'}`} to='' >Projects</Link>
                <Link className={`link ${isScroll ? 'dark' : 'white'}`} to='' >Pricing</Link>
                <Link className={`link ${isScroll ? 'dark' : 'white'}`} to='' >News</Link>
                <Link className={`link ${isScroll ? 'dark' : 'white'}`} to='' >Contact Us</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar