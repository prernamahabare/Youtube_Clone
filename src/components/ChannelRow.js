import React from 'react'
import { Avatar } from '@mui/material'
import '../CSS/ChannelRow.css'
import Verify from '@mui/icons-material/CheckCircleOutlineOutlined';
import VideoRows from "./VideoRows"


function ChannelRow({ image, channel, verified, subs, noOfVideos, description }) {
    return (<>
        <div className='channelRow'>
            <Avatar className='channelRow_logo' src={image} alt={channel}></Avatar>
            <div className="channelRow_text">
                <h4>{channel} {verified && <Verify />}</h4>
                <p>{subs} Subscribers .{noOfVideos} Videos</p>
                <p>{description}</p>
            </div>
        </div>
            <hr />
        <VideoRows image="https://png.pngtree.com/thumb_back/fh260/background/20210831/pngtree-chrysanthemum-flowers-background-image_772013.jpg" title="prerna Sunil Mahabare" views="20.4M" subs="654 M" description="Prerna's new video is up guys!! Do check it out! support the channel guys Prerna's new video is up guys!! Do check it out! support the channel guysPrerna's new video is up guys!! Do check it out! support the channel guysPrerna's new video is up guys!! Do check it out! support the channel guysPrerna's new video is up guys!! Do check it out! support the channel guys  "
         channel="CodeWithprerna" timestamp="3 days ago" />

        <VideoRows image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS99yDVDhdj2mlbnhCCc-GExM2Pw40C0Tq-Pw&usqp=CAU" title="prerna" views="20.4M" subs="654 M" description="Prerna's new video is up guys!! Do check it out! support the channel guys" channel="CodeWithprerna" timestamp="3 days ago" />

        <VideoRows image="https://png.pngtree.com/thumb_back/fh260/background/20210831/pngtree-chrysanthemum-flowers-background-image_772013.jpg" title="prerna" views="20.4M" subs="654 M" description="Prerna's new video is up guys!! Do check it out! support the channel guys" channel="CodeWithprerna" timestamp="3 days ago" />

        
    </>
    )
}

export default ChannelRow