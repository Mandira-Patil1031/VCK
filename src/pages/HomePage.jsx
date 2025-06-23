import { Link } from "react-router-dom";
import Header from "../components/Header/Header";

const HomePage = () => {
 return(
      <div>
        <Header/>
        <div>
                    <img src="\images\title" height="300px" width="1300px"/>
                    <Link to="/Addmision" className="button">Apply Now!</Link>
                    <h1>Welcome to Vivekanad College!</h1>
                    <p>**Vivekanand College** is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential. </p>
                    <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>

                    <h2>Why Choose Vivekanand College?</h2><hr />
                    <ul>
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
                   <h3>Ready to start your journey with us?</h3>
                    <Link to="/courses"className='button'>Explore Courses</Link>
                   
                         
          

                </div>
                
                    
      </div>
 )  

}
export default HomePage;