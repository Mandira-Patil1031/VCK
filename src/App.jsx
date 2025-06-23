import './styles/Pages.css';
import { Route, BrowserRouter as Router,Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ContactPage from './pages/ContactPage';
import AddmisionPage from './pages/AddmisionPage';
import CoursesPage from './pages/CoursesPage';

const App = () =>{
 return(
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/courses" element={<CoursesPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/addmision" element={<AddmisionPage/>}/>
            <Route path="/Home" element={<HomePage/>}/>

          </Routes>
        </Router>

      </div>
 )  

}
export default App;