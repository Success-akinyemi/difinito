import './Navbar.css'
import LogoImg from '../../assets/Asset 2@3x.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


function Navbar({enableScrollEffect}) {
    const [ open, setOpen ] = useState(false)
    const [isScroll, setIsScroll] = useState(false)

        useEffect(() => {
            if(enableScrollEffect){
                window.onscroll = () => {
                    setIsScroll(window.pageYOffset === 0 ? false : true)
                }
            }
        }, [])

        const toggle = () => {
            setOpen((prev) => !prev)
        }

  return (
        <div className={`sidePadding navbar ${isScroll ? 'scroll' : 'none'} ${!enableScrollEffect ? 'show' : ''}`} >
            <div className="left">
                <Link to='/'>
                    <img src={LogoImg} alt='Difinito logo' />
                </Link>
            </div>

            <div onClick={toggle} className="menuIconCard">
                {
                    open === false ? (
                        <IoMenu className='menuIcon' />
                    ) : (
                        <IoClose className='menuIcon' />
                    )
                }
                
            </div>

            <div className="right">
                <div className={`menu ${open ? 'show' : ''}`}>
                    {
                        /**
                         <div onClick={toggle} className="closeIconCard">
                             <IoClose className='closeIcon' />
                         </div>
                         * 
                         */
                    }
                    <Link className={`link ${isScroll ? 'dark' : 'white'}`} to='/' >Home</Link>
                    <Link className={`link ${isScroll ? 'dark' : 'white'}`} to='/about' >About</Link>
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