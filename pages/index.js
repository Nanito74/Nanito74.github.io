import Head from "next/head";
import Layout from "../components/Layout";
import React, { useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';





  
// creacion del index//

const index = ({data}) => {

//servicio para enviar mails //
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
    emailjs.sendForm('service_pmqa4xl', 'template_xm06c8u', form.current, 'IXvW8A-Am4QqnClfl')
    
    e.target.reset()
    alert('Message Send');
  };

//Codigo para el dark theme//
  if (typeof window !== 'undefined') {
    var localSetBool = localStorage.getItem('setActive')
    var isTrueSet = (localSetBool === 'true' )
}
    const div = useRef(); 
    
    useEffect(() => {
        const divcnt = div.current
        if (isTrueSet) {
            divcnt.className = "dark"
        }
        else {
            divcnt.className = ""
        }
    }, []);
    
//boton para el dark theme//
    const handleToggle = () => {
        const divcnt = div.current
        isTrueSet = !isTrueSet
        if (isTrueSet) {
            divcnt.className = "dark"
        }
        else {
            divcnt.className = ""
        }
        if (typeof window !== 'undefined') {
            localStorage.setItem('setActive',isTrueSet)
        }

    
};


/* main component */
    return(
    <div ref={div} > 
    <Layout>
        <Head>
            <title>Mariano Cordoba</title>
        </Head>
       
        <div className="header-container">
            <button id="switch" onClick={handleToggle}><i className="fa-solid fa-moon"></i><i class="fa-solid fa-sun"></i></button>
            <img src="header.jpg" alt="" />
            <div className="header-text">
                <h1>Mariano's portfolio</h1>
                <p>Hello, I'm Mariano Cordoba. I'm a Developer Junior and this is my PortFolios. If you like my job contact me!</p>
                <a href="https://linkedin.com/in/mariano-c%C3%B3rdoba-61103420a/" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://instagram.com/marianocordoba74/" target="_blank"><i className="fab fa-instagram"></i></a>
                <a href="https://github.com/Nanito74" target="_blank"><i className="fab fa-github"></i></a>
            </div>   
            <img id="gif" src="giphy.gif" alt=""/> 
        </div>
        <div id="aboutme" className="aboutme-container">
            <h1>About Me</h1>
                <p>Hi! I'm Mariano Cordoba, but you can call me Nano or Nanito. I'm 22. I'm from Rosario-Santa Fe-Argentina. I studied IT technician at EETP N°550 high school. My native lenguage is Spanish, but I'm learning english, my level is B1 (pre-intermediate). At the moment, I'm studyng Sistem Analyst in order to be a full stack developer and I'm working at Baufest, argentinian system enterprise in the role of BI consultant - reporting. I'm on wheelchair because of a SCI (long story). This is my first web-page.</p>                
                <div className="skills-container">
                <h2>Skills</h2>
                    <div className="skills-grid__container">
                        <div className="img-container"><img src="css.png" /><p>Intermediate</p></div>
                        <div className="img-container"><img src="html.png" /><p>Intermediate</p></div>
                        <div className="img-container"><img src="js.png" /><p>Intermediate</p></div>
                        <div className="img-container"><img src="sql.png" /><p>Intermediate</p></div>
                        <div className="img-container"><img src="node.png" /><p>Intermediate</p></div>
                    </div>
                </div>
            <div className="cnt-btn">
                <a id="cv-btn" href="pdfprueba.pdf" download>Download CV <i className="fa fa-download"></i></a>
            </div>
        </div>
        <div id="repositories" className="repositories-container">
            <h1>Repositories</h1>
            <div className="repositories-cards__container">
                <div className="repositories-cards">
                    <h3>{data[0].name}</h3>
                    <p>{data[0].description}</p>
                    <div className="cnt-btn"><a href={data[0].html_url} target="_blank">See More <i className="fa-solid fa-code"></i></a></div>
                </div>
                <div className="repositories-cards">
                    <h3>{data[1].name}</h3>
                    <p>{data[1].description}</p>
                    <div className="cnt-btn"><a href={data[1].html_url} target="_blank">See More <i className="fa-solid fa-code"></i></a></div>
                </div>
                <div className="repositories-cards">
                    <h3>{data[2].name}</h3>
                    <p>{data[2].description}</p>
                    <div className="cnt-btn"><a href={data[2].html_url} target="_blank">See More <i className="fa-solid fa-code"></i></a></div>
                </div>
            </div>
        </div>
        <div id='contact' className="contact-container">
            <h1>Contact</h1>
            <form ref={form} onSubmit={sendEmail} className="form-container">
                <input type="text" name="name" placeholder="Your Full Name" required></input>
                <input type="email" name="email" placeholder="Your Email" required></input>
                <textarea name="message" rows="10" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message <i className="fa-solid fa-envelope"></i></button>
            </form>
        </div>
        <div className="foot-container">
            <h1>Social Medias</h1>
            <div className="social-container">
                <a href="https://www.linkedin.com/in/mariano-c%C3%B3rdoba-61103420a/" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/Nanito74" target="_blank"><i className="fab fa-github"></i></a>
                <a href="https://www.instagram.com/marianocordoba74/" target="_blank"><i className="fab fa-instagram"></i></a>
            </div>
            <p className="copyright">Mariano Cordoba <i className="far fa-copyright"></i> 2022</p>
            <p className="copyright">This page was created using nextjs</p>
        </div> 
</Layout>
</div> 
)
}


/* Fetch a API de github para repositorios-info*/

export async function getServerSideProps() {

    const res = await fetch(`https://api.github.com/users/Nanito74/repos`)
    const data = await res.json()
  

    return { props: { data } }
  }


export default index;

