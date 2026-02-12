import photo1 from "./assets/photo1.jpg";
import photo2 from "./assets/photo2.jpg";
import photo3 from "./assets/photo3.jpg";
import photo4 from "./assets/photo4.jpg";


function Hobbies(){


    return (

        <>
        
        <p className="heading1">Hobbies <span className="text1">Photography is my other passion.</span></p>


        <div className="photo-grid">

            <div id="photo1">
                <img className="hobby-photo" src={photo1}/>
            </div>

            <div id="photo2">
                <img className="hobby-photo" src={photo2}/>
            </div>

            <div id="photo3">
                <img className="hobby-photo" src={photo3}/>
            </div>

            <div id="photo4">
                <img className="hobby-photo" src={photo4}/>
            </div>


        </div>

        </>





    );





}

export default Hobbies;

