import awardsImage from './assets/stars_for_science2.jpg';

function Awards(){

    return(

        <>
        <p className="heading1">Awards</p>

        <div className="awards-container">

            <div className="awards-left">
                {/*<div className="awards-left-inner">

                     <img width="4608" height="3456" src={awardsImage} className="awards-image"/>
                </div>*/}

               <img width="4608" height="3456" src={awardsImage} className="awards-image"/>

            </div>

            <div className="awards-right">

                <p className="awards-heading">I won a prestigious “Stars for Science” award in 2020.</p>

                <p className="awards-text">
                    “Sarion Bowers and I would like to nominate Stephen Rice for a Stars for Science award.”
                    
                </p>

                <p className="awards-text">

                    “Stephen is an extremely helpful, diligent and considerate colleague who is always quick to respond to questions and issues effectively.”

                </p>

                <p className="awards-text">

                    “He is committed to improving and developing resources and making things run smoother for all stakeholders involved in the data sharing process.”
                </p>

                <p className="awards-text">
                    “Every time I contact Stephen, he always very kindly and rapidly responds with help and advice, extracts data and resolves issues and we really appreciate his invaluable support and quick turnaround!”

                </p>

                <p className="awards-text">
                    “It is a pleasure to work with Stephen and both Sarion and I would like to express our thanks to him for all of his help and hard work with eDAM and data sharing. Thank you Stephen!”

                </p>


            </div>




        </div>


        
        </>






    );






}

export default Awards;
