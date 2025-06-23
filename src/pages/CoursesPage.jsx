import Header from "../components/Header/Header";
import { Link } from "react-router-dom";


const CoursesPage = () =>{
    return(
        <div>
            <Header/>
            <h1>Our Academic Programs</h1>
             <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
            <h2>Discover Campus Life</h2>
            <video src="\videos\campus1" height="400"  width="600"controls />

            
            
            
            <h2>Undergraduate Programs (UG)</h2><hr />
            <ul>
                <li>**Bachelor of Science (B.Sc.)**</li>
                <li>Computer Science (3 years)</li>
                <li>Information Technology (3 years)</li>
                <li>Biotechnology (3 years)</li>
                <li>**Bachelor of Commerce (B.Com)**</li>
                <li>Accounting & Finance (3 years)</li>
                <li>Banking & Insurance (3 years)</li>
                <li>**Bachelor of Arts (B.A.)**</li>
                <li>English Literature (3 years)</li>
                <li>Psychology (3 years)</li>
            </ul>
                <h2>Postgraduate Programs (PG)</h2><hr />
            <ul>
                <li>**Master of Science (M.Sc.)**</li>
               <li>Computer Science (2 years)</li>
               <li> Information Technology (2 years)</li>
               <li>**Master of Commerce (M.Com)** (2 years)</li>
               <li>**Master of Arts (M.A.)** (2 years)</li>
            </ul>


        <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>
    
        <h3>Have questions about a specific courses</h3>

                 <Link to="/contact" className='button'>Inquire About Courses</Link>
                
          

        </div>
    )
}
export default CoursesPage;