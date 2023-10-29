import React from 'react'
import '../CSS/Sidebar.css'
import SidebarRows from './SidebarRows'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import VideoLibrarySharpIcon from '@mui/icons-material/VideoLibrarySharp';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUpSharp';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRows Icon={HomeSharpIcon}title="Home" selected/>
        <SidebarRows Icon={WhatshotSharpIcon}title="Trending"/>
        <SidebarRows Icon={SubscriptionsSharpIcon}title="Subscription"/>
        <hr/>
        <SidebarRows Icon={VideoLibrarySharpIcon}title="Libary"/>
        <SidebarRows Icon={HistoryIcon}title="History"/>
        <SidebarRows Icon={OndemandVideoIcon}title="Your Videos"/>
        <SidebarRows Icon={WatchLaterIcon}title="Watch Later"/>
        <SidebarRows Icon={ThumbUpIcon}title="Like Videos"/>
        <SidebarRows Icon={ExpandMoreOutlinedIcon}title="Show More"/>


    </div>
  )
}

export default Sidebar