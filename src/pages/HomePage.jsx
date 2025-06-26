import { Link } from "react-router-dom";
import Header from "../components/Header/Header";

const HomePage = () => {
 return(
      <div>
          <p className="header1">
                    <a href="./home">Vivekanand College</a>
               <Header/>
         
        </p>
        <div className="page-containeer">
          
                    <div id="main">
                        <img src="\images\title" width="1000" height="200"/>
                         
                     <h1>Welcome to Vivekanad College!</h1>
                     Your journey to excellence starts here.<br/>
                     <button><a href="./addmission">Apply now!</a></button>

                    
                     </div>



                    <p>**Vivekanand College** is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential. </p>
                    <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>

                    <h2>Why Choose Vivekanand College?</h2><hr />
                    <ul className="styled-list">
                        <li> **Legacy of Excellence:** Decades of commitment to quality education   </li>
                        <li> **Experienced Faculty:** Learn from renowned experts and passionate educators  </li>
                        <li> **Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.   </li>
                        <li> **Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>
                        <li> **Strong Placements:** Excellent career opportunities with leading companies.</li>
                        <br></br>
                        </ul>

                        <h2>Campus Life & Facilities</h2>
                        <img src="\images\vck1" width="300" height="200"/>
                        <img src="\images\vck" height="200"/>
                        <p>Explore our Vibrant Campus and state-of-the art facilities designed to enhance your learning experience and personal </p>
                    
                    <footer style={{textAlign:"center"}}>Ready to explore our courses?</footer>  

                    <Link to="/courses"className='button'>Explore Courses</Link>                 
                       
          

                </div>
                
                    
      </div>
      
 )  

}
export default HomePage;