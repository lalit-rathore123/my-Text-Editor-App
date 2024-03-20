import React from 'react'

const Navbar =(props)=>{
    return(
        <>
            <nav className={`navbar  navbar-expand-lg  ${props.mode} bg-${props.mode} `}>
  <div className="container-fluid" >
    <a className="navbar-brand fw-bold" href="/" style={{color :props.mode==='dark'?'white':'black'}}> {props.name}</a>

    <button className="navbar-toggler" style={{backgroundColor :props.mode==='dark'?'white':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={{backgroundColor :props.mode==='dark'?'white':'white'}}></span>
    </button> 

    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{color :props.mode==='dark'?'white':'black'}}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" >
          <a className="nav-link active" aria-current="page" href="/"style={{color :props.mode==='dark'?'white':'black'}} >Home</a>
        </li>
        
      </ul>
     

      <div className={`form-check form-switch text-${props.mode==="light" ?'dark' :'white'} `}>
  <input className="form-check-input " type="checkbox"  onClick={props.Emode} role="switch" id="switch"/>
  <label className="form-check-label " htmlFor="switch" >Dark Mode</label>
</div>


    </div>
  </div>
</nav>

 
        </>
    )
}

export default Navbar