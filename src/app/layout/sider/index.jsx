

import './style.scss';


const Sider = ({siderActive,setSiderActive}) => {
  return (
    <div className={`sider-container ${siderActive?"sider-active":"sider-not-active"}`} onClick={()=>setSiderActive(false)}>
     <div className="sider" onClick={(e)=>e.stopPropagation()}>
        
     </div>
    </div>
  )
}

export default Sider