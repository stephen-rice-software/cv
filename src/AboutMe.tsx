

import Section from './Section.tsx';


function AboutMe(){

    

    return(
        <>
        
        <p className="heading1">My passion is for creating top-notch, high-quality software, using agile principles and modern, reliable technologies.</p>
        
        <p className="heading2">My core principles are:</p>

        <p className="text1">

            <ol className="list1">
                <li>
                To give the highest possible level of customer service. This means that I will do whatever it takes to create the product that the customer wants as quickly as reasonably possible.
                </li>

                <li>

                To constantly strive for technical excellence. This means keeping up to date with changing technologies, programming languages and best practices, then implementing these in projects. I'm also wary of using unproven "new, shiny" technologies, which can lead to maintenance problems in future.
        
                </li>

            </ol>

        </p>

        
        
        <p className="heading2">My current core programming languages are Java and Javascript/Typescript. My core Javascript framework is React. I also use Python for scripting.</p>
        
        <Section heading="YouTube clips of apps that I've developed">

            <ul className="youtube-list">
                <li>
                    <a target="_blank" href="https://youtu.be/g7w4mZ1c-fc">Music of Life (React with Java SpringBoot backend, websockets)</a>
                </li>
                <li>
                    <a target="_blank" href="https://youtu.be/u4-lhMj-92M">eDAM2 (React with Java SpringBoot backend)</a>
                </li>

                <li>
                    
                    <a target="_blank" href="https://youtu.be/qhmVASvgAX8">Internal eDAM2 (React with SpringBoot backend)</a>

                </li>
                <li>
                    <a target="_blank" href="https://youtu.be/JxUWV5hl2dw">Edam Reports (React with Node/Express backend)</a>

                </li>

                <li>
                    <a target="_blank" href="https://youtu.be/eVO8U6LM6Ls">Humfre (React with Java SpringBoot backend)</a>

                </li>

                <li>

                    <a target="_blank" href="https://youtu.be/lnJpbGG7l50">Humfre-lite (React with Node/Express backend)</a>

                </li>

                <li>
                    <a target="_blank" href="https://youtu.be/vj5Zdu0H1jM">Ogre (React with Java SpringBoot backend)</a>


                </li>

                <li>

                    <a target="_blank" href="https://youtu.be/7TR1cjTas9U">Plasmid-DB (HTML/Javascript/JQuery with Java SpringBoot backend)</a>

                </li>

                <li>

                    <a target="_blank" href="https://youtu.be/08WNX5HKewY">Cypress testing of eDAM2</a>
                </li>



            </ul>

            
            
        </Section>
        

        
        <Section heading="Some user comments about my work">
        <p className="quoted-text">"Great, you are an absolute star! Thank you." &mdash; K.A. 2017</p> 

        <p className="quoted-text">"Damn, you are good." &mdash; S.B. 2018</p> 

        <p className="quoted-text">"I cannot think of any area of development which would improve the level of service we receive from Stephen." &mdash; L.E. 2015</p> 

        <p className="quoted-text">"Stephen, is always quick to respond to requests. He is able to provided helpful suggestions on how a system can work more effectively. He is always friendly, helpful and effective. Very pleased to have Stephen looking after our systems." &mdash; L.E. 2016</p> 

        <p className="quoted-text">"I genuinely cannot think of any areas for development. Stephen is great!" &mdash; H.C. 2018</p> 

        <p className="quoted-text">"Thank you, Stephen, for all your help!." &mdash; C.S. 2018</p> 

        </Section>

        
        
        </>
        



    );



}

export default AboutMe;

