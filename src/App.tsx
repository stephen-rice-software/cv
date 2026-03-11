import { useState } from 'react';

import AboutMe from './AboutMe.tsx';
import WorkHist from './WorkHist.tsx';
import TechExp from './TechExp.tsx';
import Quals from './Quals.tsx';
import Awards from './Awards.tsx';
import Courses from './Courses.tsx';
import Pubs from './Pubs.tsx';
import Github from './Github.tsx';
import Contact from './Contact.tsx';
import Hobbies from './Hobbies.tsx';
//import HamburgerTest from './HamburgerTest.tsx';
import { useMediaQuery } from 'react-device-sizes';
import Menu from './Menu.tsx';


function App() {
  
  const[page, setPage]= useState("About Me");

  const isMobileDevice = useMediaQuery({ maxWidth: 800 });


  return (
    <>
    <div className="header">
      <div className="header-text">

        Stephen J. Rice, BSc (Hons), PhD.

      </div>

      <div className="header-text">

        Full-stack software developer

      </div>
      
      
      

    </div>
    
    <div className="all">
      
        <div className="sidebar">

          {

            isMobileDevice ? 

            <Menu setPage={setPage} page={page}/>
            :
            <ul className="sidebar-list">
                <li className={page === "About Me" ? "list-item-selected" : "list-item-not-selected"} onClick={()=>{setPage('About Me')}}>About Me</li>
                <li className={page === "Work History" ? "list-item-selected" : "list-item-not-selected"} onClick={()=>{setPage('Work History')}}>Work History</li>
                <li className={page === "Technical expertise" ? "list-item-selected" : "list-item-not-selected"} onClick={()=>{setPage('Technical expertise')}}>Technical expertise</li>
                <li className={page === "Formal Qualifications" ? "list-item-selected" : "list-item-not-selected"} onClick={()=>{setPage('Formal Qualifications')}}>Formal Qualifications</li>
                <li className={page === "Awards" ? "list-item-selected" : "list-item-not-selected"} onClick={()=>{setPage('Awards')}}>Awards</li>
                
                <li className={page === "Hobbies" ? "list-item-selected" : "list-item-not-selected"} onClick={()=>{setPage('Hobbies')}}>Hobbies</li>
                <li className={page === "Training Courses" ? "list-item-selected" : "list-item-not-selected"} onClick={()=>{setPage('Training Courses')}}>Training Courses</li>
                <li className={page === "Publications & Patents" ? "list-item-selected" : "list-item-not-selected"} onClick={()=>{setPage('Publications & Patents')}}>Publications & Patents</li>
                <li className={page === "Github" ? "list-item-selected" : "list-item-not-selected"} onClick={()=>{setPage('Github')}}>Github</li>
                <li className={page === "Contact" ? "list-item-selected" : "list-item-not-selected"} onClick={()=>{setPage('Contact')}}>Contact</li>

            </ul>

          }

          

        </div>
      
      <div className="main">
        
        {
          page === "About Me" ? <AboutMe/> 
          : page === "Work History" ? <WorkHist/>
          : page === "Formal Qualifications" ? <Quals/>
          : page === "Awards" ? <Awards/>
          : page === "Training Courses" ? <Courses/>
          : page === "Publications & Patents" ? <Pubs/>
          : page === "Github" ? <Github/>
          : page === "Contact" ? <Contact/>
          : page === "Hobbies" ? <Hobbies/>

          : <TechExp/>


        }

      </div>


        
    </div>
    </>
  )
}

export default App
