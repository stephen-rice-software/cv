
import Section from './Section.tsx';

function WorkHist(){

    return(


        <>
        <p className="heading1">Work History</p>
        

        <Section heading="April 2023 to present: Senior Java Developer at Earth Sciences New Zealand">

            <p className="text2">I started at GNS Science, which was later merged with NIWA to become Earth Sciences New Zealand.</p>
            <p className="text2">As a member of the applications team under manager Lynley Smith, I have been involved with the maintenance of a number of legacy (mostly) Java applications. I played a major role in a team project involving a database migration from Oracle to PostgreSQL for all of our apps. Other app maintenance work has involved upgrading Java versions to 11 and more recently 25, upgrading hibernate and also moving apps to Spring boot. I also helped with the development of a React-based web-application to help commercial growers assess costs related to geothermal heating.</p>

        </Section>

        <Section heading="May 2006 to April 2023: Senior Software Developer at The Wellcome Trust Sanger Institute, Hinxton, Cambridgeshire, UK">
            <p className="text2">In my initial role was as a member of the Ensembl web team and Vega sub-group, my main job involved working closely with Steve Trevanion to maintain the Vega web site, the interface to manually-annotated genome data at the WTSI.</p>
            <p className="text2">In September 2007, I transferred to SWAT (SoftWare Action Team), which provided general bioinformatics support to all Sanger teams. This work was extremely varied and involved general, database, web and network development. Projects have involved creation of DAS (Distributed Annotation System) sources, data-parsing and visualization tools, read-mapping to genome assemblies, data-mining scripts utilising the Ensembl API, processing pipelines and web-sites (e.g. ARNIE). Most of the coding was in Perl, but some was C/C++ for more processor/memory-intensive algorithms. Some projects have required coding in specific languages, such as Java and Tcl.</p>
            <p className="text2">I've developed several important Java-based applications at the Sanger Institute, primarily eDAM (a system for creating and managing Data Access Agreements with external and internal-facing web portals), HuMFre (a web-based system for management of research involving Human tissues) and Ogre (a website for management of imported biological material). eDAM2 (an updated version of eDAM), Humfre and Ogre make extensive use of Javascript/React for their user-interface.</p>
            <p className="text2">I developed and maintained the eCAP system, which is widely used by faculty within the Sanger Institute as a form application portal, until it was decommissioned after 8 years of live service.</p>
            <p className="text2">I've developed a tablet-based C# Windows application for survey data collection that has seen extensive use in Africa and an Android application for showing genetics videos in a clinical setting. Recently, I developed a web-based version of the Android-app for use in remote clinical sessions. This React-based web-app also uses websockets to enable real-time collaboration between patients and genetic counsellors.</p>
            <p className="text2">For my last year at Sanger, I working fully remotely as a consultant from New Zealand.</p>
        </Section>

        <Section heading="July 2003 to April 2006: Post-doc fellow at The Bioinformatics Institute, School of Biological Sciences, University of Auckland">

            <p className="text2">In this role, I acted primarily as Bioinformatics Software Development and Support for Dr Susan Turner's Microbiology Group, with regard to their genome-sequencing project of the bacterium <span className="species">Acidovorax temperans</span>. My role was to develop and maintain a database of the sequence data and provide web-based access to the members of the Turner research group. </p>
            <p className="text2">Using my own ideas and suggestions from members of the group, I designed and developed a web-based system called GenomEZ (pronounced 'Genome-Easy') which emphasized graphical, user-friendly displays of the information and ease of administration.  A central feature is the genome-browser which displays the DNA sequence, open reading frames (ORFs), blast-alignments, HMM alignments, annotations, etc in SVG (Scalable Vector Graphics) windows.  The SVG interface adds to ease of use and reduces code complexity compared with other kinds of dynamically-generated graphics, such as .png or .jpg images.  The system can also display other features such as oligonucleotide probes in relation to the ORFs.</p>
            <p className="text2">The GenomEZ system is based on the Apache web server using SSL, with server-side scripts in PHP and Perl, connected with a MySQL database.  The system runs on a Linux-based machine.  For performance reasons, a few components were written in C.</p>
        </Section>

        <Section heading="March 2002 to May 2003: Post-doc Research Associate at MRC Functional Genetics Unit, Department of Anatomy, University of Oxford, Oxford UK.">
            
            <p className="text2">I worked as a Post-Doctoral Research Associate (Bioinformatics) with Professor Chris Ponting, a world leader in the analysis of protein domain sequences.  His lab had been involved with the human and mouse public genome sequencing consortia and I participated in the rat genome sequencing project during my time there.</p>
            <p className="text2">My initial project was developing a web-interface for a protein sequence and annotation database (PANDA), previously developed by Drs Chris Ponting and Leo Goodstadt.  The interface allowed the user to extract sets of protein sequences from the database, based on criteria such as domain-content and key-word.  The client-side used HTML/JavaScript to create an intuitive windows-like interface.  The server-side used Perl-CGI for the main data processing and database communications. Very complex queries were passed to another Perl-script which ran in the background and informed the user by email when completed.</p>
            <p className="text2">My next project involved analyses of recently-duplicated genes in rat, gene-strand bias within gene clusters, distribution of gene exon numbers in gene-clusters, and finding nested and overlapping genes in mammalian genomes.</p>
            <p className="text2">I composed almost all of the Perl scripts myself for this work and amassed a significant library of Perl modules and scripts which are now a valuable asset for the Ponting lab.</p>

        </Section>

        <Section heading="November 2001 to end of 2001: University of Auckland.">
            <p className="text2">I gained some practical programming experience working with Dr. Allen Rodrigo at the School of Biological Sciences, Auckland University, during the summer vacation, by designing a Java graphical user interface (Swing classes) for several programs in the Phylip (Phylogeny Inference) package (Joseph Felsenstein). The Java program was specially designed to facilitate addition of interfaces for further members of the Phylip package.</p>
        </Section>

        <Section heading="June 1997 to July 2000: Staff Scientist at Genesis Research & Development Corporation, Auckland.">

            <p className="text2">This work has been concerned with isolation of various kinds of promoters from the commercial tree species <span className="species">Pinus radiata</span> and <span className="species">Eucalyptus grandis</span>. Much of my work has centred on the highly active superubiquitin
            constitutive promoter isolated from pine. My initial role at the company was to start the promoter isolation and testing program, which I did by mining the cDNA high-throughput sequencing databases for interesting candidates, then testing these for tissue-specificity by RNA slot-blot hybridisation analysis.</p>

            <p className="text2">One of my main achievements has been to improve the efficiency of promoter testing in transgenic <span className="species">Arabidopsis</span> and tobacco plants by re-engineering the plant expression vector, pBI-101. New vectors with improved cloning cassettes and different reporter genes (i.e. luciferase and green fluorescent protein) were made. Much of my work involved cloning of promoters into these vectors. I
            made many promoter deletion constructs (of super-ubiquitin and other promoters) to determine important regions within the promoters, using a variety of methods. I also performed RT-PCR analyses on transgenic plants to analyse levels of super-ubiquitin transcripts and mapped the transcription start site of the promoter.</p>
            
        </Section>

        <Section heading="July 1994 to July 1996: Post-doc fellow at Otago University, Dunedin.">

            <p className="text2">I worked as a post doctoral fellow with Dr Diana Hill in the Biochemistry Department on a pilot project to evaluate the viability of mapping the genome of perennial ryegrass, focussing primarily on
            microsatellite gene markers. I cloned several microsatellites from ryegrass and evaluated each of them in terms of size variability within and between cultivars as well as the mode of inheritance, where possible.
            One microsatellite was highly polymorphic and was able to differentiate closely related cultivars.</p>

        </Section>

        <Section heading="November 1993 to April 1994: Post-doc fellow at the University of Texas, Houston, TX, USA">

            <p className="text2">I worked as a research fellow with Dr Julia Lever in the Department of Biochemistry & Molecular Biology, University of Texas Health Science Centre in Houston. The project entailed investigation of RNA-protein interactions involved with the stability of sodium dependant glucose transporter mRNA in a pig kidney cell line. </p>
            <p className="text2">Although preliminary results had been promising, technical difficulties with the project proved insurmountable, resulting in its unfortunate early cessation.</p>
        </Section>

        <Section heading="January 1991 to November 1993: Post-doc fellow at the State University of New York, Stony Brook, NY, USA">

            <p className="text2">At the Department of Physiology and Biophysics, I worked with Prof. Richard T Mathias on a project focusing on the nature of the Major Intrinsic Protein (MIP), an abundant integral membrane protein of unknown function in frog lens fibre cells.</p> 
            <p className="text2">I expressed MIP in <span className="species">Xenopus</span> oocytes by microinjecting the cRNA. After some initial problems with low levels of expressed protein, modifications of the 5' and 3' untranslated regions by expression PCR resulted in highly efficient mRNA, the translation product of which could be easily detected in oocyte extracts. Substrate uptake experiments using the oocyte suggested that MIP may be functioning as a water channel.</p>

        </Section>

        </>

        




    )






}

export default WorkHist;