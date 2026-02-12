
import {useState, type ReactNode} from 'react';

type Props= {
    children : ReactNode;
    heading: string;

};

function Section(props: Props){

    const[clicked, setClicked]= useState(false);

    const handleClick=() : void => {

        setClicked(!clicked);

    }
    
    
    return(
        <div className="section-all">
            <div className="section-heading">
                {/*<img onClick={handleClick} className={clicked ? "arrow-clicked" : "arrow-base"} src={arrow}/>*/}
                <span onClick={handleClick} className={clicked ? "arrow-clicked" : "arrow-base"}>&#x25BA;</span>&nbsp;<span>{props.heading}</span>

            </div>
            <div className={clicked ? "text-clicked" : "text-base"}>
                <div className="text-inner">
                    {props.children}

                </div>
                
            </div>
        
        
        </div>

    )





}
export default Section;


