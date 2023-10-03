import React, {useState} from "react";
import { HashLink } from "react-router-hash-link";
import {CgMenuRound} from 'react-icons/cg';
import {FiX} from 'react-icons/fi';

const Navbar = () => {
    const [open, setOpen] = useState()
    const handleClick  = () =>{
        setOpen(!open);
    }
    const closeMenu = () => {
        setOpen(false);
    }
    return(
        <div>
            <div className='navbar'>
                <HashLink smooth to="/#home" className="nav-logo">
                    <h1 className="biisii">Oluwa<span>LoniBisii</span></h1>
                </HashLink>

                <div onClick={handleClick} className="nav-icon">
                    {open ? <FiX /> : <CgMenuRound />}
                </div>

                <ul className={open ? 'nav-links active' : 'nav-links'}>
                    <li className="nav-item">
                        <HashLink smooth to="/#home-header" className="nav-link" onClick={closeMenu}>
                            Home
                        </HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink smooth to="/#about-header" className="nav-link" onClick={closeMenu}> 
                           About
                        </HashLink>
                        
                    </li>
                    <li className="nav-item">
                        <HashLink smooth to="/#skills-header" className="nav-link" onClick={closeMenu}>
                            Skills
                        </HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink smooth to="/#project-header" className="nav-link" onClick={closeMenu}>
                            Portofolio
                        </HashLink>
                    </li>
                    <HashLink smooth to="/#contact-header"><button className='btn'>Contact</button>
                    </HashLink>
                </ul>
            </div>
        </div>
        
    )
}

export default Navbar;