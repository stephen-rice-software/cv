import Section from './Section.tsx';

function Courses(){

    return(

        <>
        
        <p className="heading1">Training Courses and Certifications</p>

        <Section heading="Courses at EarthSciences NZ">

            <p className="text2">2025, 2026: MongoDB (3 days)</p>
            <p className="text2">2025: Web Security (1 day)</p>


        </Section>

        <Section heading="Courses at the Sanger Institute">

            <p className="text2">2018: Basics of OpenStack and S3 (1 day)</p>
            <p className="text2">2015: Java Best Practices (4 days)</p>
            <p className="text2">2014: Introduction to Agile (3 hrs)</p>
            <p className="text2">2013: Introduction to Python (2 days)</p>
            <p className="text2">2011: Ensembl API (Perl) workshop (3 days)</p>
            <p className="text2">2011: Core Spring Framework (Java) course (4 days, London, by SpringSource)</p>
            <p className="text2">2010: Advanced Oracle Workshop (2 days)</p>
            <p className="text2">2010: Advanced JavaScript/JQuery (1 day)</p>
            <p className="text2">2009: C++ Programming (5 days)</p>
            <p className="text2">2009: Perl6 Programming tutorial (half day, Open Source Convention, San Jose, CA)</p>
            <p className="text2"> 2009: Erlang Programming tutorial (half day, Open Source Convention, San Jose, CA)</p>
            <p className="text2">2008: Ruby Programming (2 days)</p>
            <p className="text2">2008: R-Programming (2 days)</p>
            <p className="text2">2008: Basic Statistics (3 days)</p>
            <p className="text2">2008: AJAX Programming (4 days)</p>
            <p className="text2">2007: Introduction to Oracle (2 days)</p>
            <p className="text2">2007: LSF and the Sanger Compute Farm (1 day)</p>
            <p className="text2">2006: Intermediate Perl Programming</p>
            <p className="text2">2006: Advanced Perl Programming</p>

             
        </Section>

        <Section heading="Courses at the Ames Institute">

            <p className="text2">2000: 12-week course in Microsoft Visual Basic 6 programming.</p>
            <p className="text2">2000: 12-week course in C and C++ programming.</p>

        </Section>

        <Section heading="Certifications">
            <p className="text2">2023: AWS Cloud Practitioner Certification (foundational)</p>

        </Section>

        </>




    );


}

export default Courses;
