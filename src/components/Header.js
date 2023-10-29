import React, { useState } from 'react'
import '../CSS/Header.css'
import logo from '../assests/Logo.svg'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import NotificationsActiveSharpIcon from '@mui/icons-material/NotificationsActiveSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom'

function Header() {
  const [searchItem, setsearchItem] = useState('')

  return (
    <>
      <div className='header'>
        <div className="header_left">
          <MenuSharpIcon />
          <Link to="/">
            <img src={logo} alt="logo" className='header_logo' />
          </Link>
        </div>
        <div className="header_center">
          <input type="text" onChange={(e) => { setsearchItem(e.target.value) }} value={searchItem} placeholder='Search' />
          <Link to={`search/${searchItem}`}>
            <SearchSharpIcon className='header_searchicon' />
          </Link>
        </div>
        <div className="header_right">
          <VideoCallSharpIcon className='header_icons'/>
          <AppsSharpIcon className='header_icons'/>
          <NotificationsActiveSharpIcon className='header_icons' />
          <AccountCircleOutlinedIcon />
        </div>
      </div>
    </>
  )
}

export default Header