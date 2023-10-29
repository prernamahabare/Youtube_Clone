import React from 'react'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import "../CSS/SearchPage.css"
import ChannelRow from './ChannelRow'
function SearchPage() {
  return (
    <div className='searchPage'>
        <div className="searchPage_Fliter">
            <TuneOutlinedIcon/>
            <h2>Filter</h2>
        </div>
        <hr />
        <ChannelRow  image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png" channel="Prerna"
        verified subs="660k" noOfVideso={328}description="Prerna's new video is up guys!! Do check it out! support the channel guys"  ></ChannelRow>
    </div>
  )
}

export default SearchPage