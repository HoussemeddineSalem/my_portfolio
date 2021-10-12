import React from 'react'
import './aboutme.css'
import { Button } from 'react-bootstrap'
import resume from '../../img/houssemeddineSalem_res.pdf'

const Aboutme = () => {
    return (

        <div id="about" className='aboutme_and_contact'>
            <article className='article'>
                <h3>About me :</h3>
                <p>
                    Hello, My name is Houssem eddine Salem and I am a Full-Stack Developer from Nabeul, Tunisia.
                </p>
                <p>
                    I enjoy turning complex problems into simple, beautiful and intuitive designs
                </p>
                <div className="skills">
                    <p>My Skills are : </p>
                    <p><i class="fas fa-palette"></i><span>  Frontend :</span>  HTML, CSS, JavaScript, ReactJs, Redux, MaterialUI, Bootstrap</p>
                    <p><i class="fas fa-wrench"></i><span>  Backend :</span>  NodeJs, ExpressJs, REST API, PassportJS, JWT, EJS</p>
                    <p><i class="fas fa-database"></i><span>  DataBase :</span>  MongoDB, Mongoose(ORM)</p>
                    <p><i class="fas fa-anchor"></i><span>  Integration tools :</span>  Git</p>
                    <p><i class="fas fa-vial"></i><span>  Testing Framework :</span>  Jest</p>
                </div>
                <p>Click below to download my resume as a PDF.</p>
                <Button variant="secondary" href={resume} download>DOWNLOAD RESUME</Button>
            </article>

            <article className='article contact second_article'>
                <h3>Contact :</h3>
                <div className='icon_styling'>
                    <a href="#Twitter">
                        <i class="fab fa-twitter fa-2x icon"></i>
                        <span className="social_med_title">Twitter</span>
                    </a>
                    <a href="https://www.facebook.com/housm.slm/" target="_blank">
                        <i class="fab fa-facebook-f icon"></i>
                        <span className="social_med_title">Facebook</span>
                    </a>
                    <a href="https://www.linkedin.com/in/houssemeddine-salem-734384144/" target="_blank">
                        <i class="fab fa-linkedin-in icon"></i>
                        <span className="social_med_title">LinkedIn</span>
                    </a>
                    <a href="https://github.com/HoussemeddineSalem?tab=repositories" target="_blank">
                        <i class="fab fa-github icon"></i>
                        <span className="social_med_title" >Github</span>
                    </a>
                </div>
            </article>
        </div>


    )
}

export default Aboutme
