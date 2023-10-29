import React from 'react'
import { Avatar } from '@mui/material'
import '../CSS/VideoCard.css'

function VideoCard({
    image, title, views, channel, timestamp, channelImage
}) {
  return (
    <div className='videoCard'>
        <img src={image} alt="img" className='videoCard_Thumbnail' />
        <div className="videoCard_Info">
           <Avatar alt={channel}src={channelImage} className='videoCard_Avatar'></Avatar>
           <div className="videoCard_Text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>{views}.{timestamp}</p>
           </div>
        </div>
    
    </div>
  )
}

export default VideoCard