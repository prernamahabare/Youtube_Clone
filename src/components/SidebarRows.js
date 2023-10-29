import React from 'react'
import '../CSS/SidebarRows.css'

function SidebarRows({ selected,Icon, title }) {
    return (
        <div className={`sidebarRows ${selected && 'selected'}`}>
           <Icon className='sidebarRows_icons'></Icon> 
            <h2 className='sidebarRows_title'>{title}</h2>
        </div>
    )
}

export default SidebarRows