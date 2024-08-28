
import React from 'react';
import './style.scss';
import logo from '../../../../public/images/logo.png';
import Image from 'next/image';
import { CgMenuRight } from "react-icons/cg";

const Header = ({siderActive, setSiderActive}) => {
  return (
    <div className='container-fluid'>
        <div className="row">
          <div className='nav'>
            <ul>
              <li>Gurugram</li>
            </ul>
          </div>
          <div className='logo center'>
            <a href=""><Image src={logo} alt="" /></a>
          </div>
          <div className='menu-bar right'><span class="menuleft" onClick={()=>setSiderActive(!siderActive)}><CgMenuRight /></span></div>
        </div>
    </div>
  )
}

export default Header