import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div>
    <div>
      
      <font size = "4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            
          <li className="nav-item">
              <Link to='/' className="nav-link" >Home</Link>
            </li>
            
            <li className="nav-item">
              <Link to='/global' className="nav-link" >Global</Link>
            </li>
            
            <li className="nav-item">
              <Link to='/indonesia' className="nav-link">Indonesia</Link>
            </li>
            <li className="nav-item">
              <Link to='/provinsi' className="nav-link">Provinsi di Indonesia</Link>
            </li>
            
          </ul>
        </div>
      </nav>
      </font>
      
    <font size="5">
      <marquee bgcolor="salmon" direction="center" >
        <font color="white">COVID-19 TRACKER</font>
      </marquee>
    </font>
    <font size="5">
      <marquee bgcolor="black" direction="right" >
        <font color="white">Stay Safe and Keep Health</font>
      </marquee>
    </font>
    
    </div>
    </div>
  );
}

export default navbar;