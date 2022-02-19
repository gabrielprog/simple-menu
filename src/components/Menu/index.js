import React, {useState} from 'react';
import { 
    BiMenu, 
    BiSearch,
    BiCategory,
    BiUser,
    BiMessageSquare,
    BiPieChartAlt2,
    BiFolder,
    BiCartAlt,
    BiHeart,
    BiCog,
    BiExit
} from 'react-icons/bi'

import Logo from '../../assets/image/logo.svg'
import Avatar from '../../assets/image/avatar.svg'

import './styles.css';

function Menu() {
    
    const [size, setSize] = useState(20)

    return (
        <div className="menu">

            <div className="menu__top">

                <img src={Logo} alt="Logo" />

                <BiMenu size={size}/>

            </div>

            <div className="menu__middle">

                <div className="search">

                    <BiSearch size={size}/>
                    <input type="text" placeholder="Search..."/>

                </div>

                <nav>

                    <div className="option">
                        <ul>
                            <BiCategory size={size} />
                            <li>Dashboard</li>
                        </ul>
                    </div>

                    <div className="option">
                        <ul>
                            <BiUser size={size} />
                            <li>User</li>
                        </ul>
                    </div>

                    <div className="option">
                        <ul>
                            <BiMessageSquare size={size} />
                            <li>Messages</li>
                        </ul>
                    </div>

                    <div className="option">
                        <ul>
                            <BiPieChartAlt2 size={size} />
                            <li>Analytics</li>
                        </ul>
                    </div>
                    
                    <div className="option">
                        <ul>
                            <BiFolder size={size} />
                            <li>File Manager</li>
                        </ul>
                    </div>
                    
                    <div className="option">
                        <ul>
                            <BiCartAlt size={size} />
                            <li>Order</li>
                        </ul>
                    </div>
                    
                    <div className="option">
                        <ul>
                            <BiHeart size={size} />
                            <li>Saved</li>
                            
                        </ul>
                    </div>
                    
                    <div className="option">
                        <ul>
                            <BiCog size={size} />
                            <li>Setting</li>
                        </ul>
                    </div>
                </nav>

            </div>
            
            <div className="menu__bottom">
                <div className="avatar__information">
                    <img src={Avatar} alt="Avatar" />

                    <div className="avatar__content">
                        <p>Gabriel Santos</p>
                        <p>Fullstack Developer</p></div>
                    </div>

                <BiExit size={size} />

            </div>
        </div>
    );
}

export default Menu;