import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='layout'>
        <div className="nav-bar">nav</div>
        <div className="content">{children}</div>
        <div className="footer">footer</div>
    </div>
  )
}

export default Layout