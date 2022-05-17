import React from 'react'
import './SidebarOptions.css'

function SidebarOption({title, Icon}) {
  return (
    <div className="sidebarOption">
        <p>{title}</p>
    </div>
  )
}

export default SidebarOption