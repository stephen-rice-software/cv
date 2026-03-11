import {useState} from 'react';

type Props={

    setPage : (page: string) => void;
    page: string;

};



function Menu(props: Props){

    const[menuOpen, setMenuOpen]= useState(false);

    return(

        <div className="menu-container">

            <span onClick={()=>{

                setMenuOpen(!menuOpen);

            }} className="menu-button">&#9776;</span>

            
            <div className={menuOpen ? "menu-open" : "menu-hidden"}>

                <ul className="menu-list">

                    <li onClick={()=>{props.setPage("About Me"); setMenuOpen(false)}}>About Me</li>

                    <li onClick={()=>{props.setPage("Work History"); setMenuOpen(false)}}>Work History</li>

                    <li onClick={()=>{props.setPage("Technical Expertise"); setMenuOpen(false)}}>Technical Expertise</li>

                    <li onClick={()=>{props.setPage("Formal Qualifications"); setMenuOpen(false)}}>Formal Qualifications</li>

                    <li onClick={()=>{props.setPage("Awards"); setMenuOpen(false)}}>Awards</li>
                    <li onClick={()=>{props.setPage("Hobbies"); setMenuOpen(false)}}>Hobbies</li>
                    <li onClick={()=>{props.setPage("Training Courses"); setMenuOpen(false)}}>Training Courses</li>

                    <li onClick={()=>{props.setPage("Publications & Patents"); setMenuOpen(false)}}>Publications & Patents</li>

                    <li onClick={()=>{props.setPage("Github"); setMenuOpen(false)}}>Github</li>
                    <li onClick={()=>{props.setPage("Contact"); setMenuOpen(false)}}>Contact</li>

                
                </ul>





            </div>




        </div>





    );


}
export default Menu;