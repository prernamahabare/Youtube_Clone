import React from 'react'
import '../CSS/VideoRows.css'


function VideoRows({views, timestamp,title, channel, subs, description, image}) {
  return (
    <div className='videoRows'>
        <img src={image} alt="" />
        <div className="videoRows_text">
            <h3>{title}</h3>
            <p className='videoRows_headline'>{channel} .<span className='videoRows_sub'><span className='videoRows_subNos'>{subs} </span>Subscribers</span> .{views} Views.{timestamp} </p>
            <p className='videoRows_description'>{description}</p>
        </div>
    </div>
  )
}

export default VideoRows