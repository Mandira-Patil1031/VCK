import './Header.css'
import {Link} from 'react-router-dom'

const Header = () =>{
 return(
      <div>
            <header>
                <div>
                    <Link to="/home">Vivekanad College</Link>
                </div>
               


            
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/addmision" className="button">Apply Now!</Link>
                    
                </nav>


            </header>
      </div>
 )  

}
export default Header;