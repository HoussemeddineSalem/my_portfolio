import React from 'react'
import './intro.scss'
import profile from '../../img/profile.jpg'
import Aboutme from './aboutme'
import Typewriter from 'typewriter-effect'
import introPicture from '../../img/intro-picture.png'
import { Button } from 'react-bootstrap'
import resume from '../../img/houssemeddineSalem_resume.pdf'

function Intro() {


    return (

        <div id="intro" className="intro-container">
            <div class="context">
                <img src={introPicture} alt="intro-picture" height="400px" width="400px" />
                <div>
                    <div className="typewriter-container">
                        <Typewriter
                            options={{
                                strings: ["Hello, I'm Houssemeddine Salem, <br /> I'm a Full Stack Web Developer"],
                                autoStart: true,
                                loop: true,
                                skipAddStyles: true,
                                wrapperClassName: 'typewriter',
                                cursor: ''
                            }}
                        />
                    </div>
                    <div className="social-media-container">
                        <a rel="noreferrer" href="https://twitter.com/houssmsalem" target="_blank">
                            <i class="fab fa-twitter fa-2x icon"></i>
                        </a>
                        <a rel="noreferrer" href="https://www.facebook.com/housm.slm/" target="_blank">
                            <i class="fab fa-facebook-f icon"></i>
                        </a>
                        <a rel="noreferrer" href="https://www.linkedin.com/in/houssemeddine-salem-734384144/" target="_blank">
                            <i class="fab fa-linkedin-in icon"></i>
                        </a>
                        <a rel="noreferrer" href="https://github.com/HoussemeddineSalem?tab=repositories" target="_blank">
                            <i class="fab fa-github icon"></i>
                        </a>
                    </div>
                    <Button className="btn-resume" variant="light" href={resume} download>
                        <i className="far fa-file fa-2x"></i>
                        <span>SEE MY RESUME</span>
                    </Button>
                </div>

            </div>
            <div class="area" >
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

            </div>
            <Aboutme />
        </div>


    )
}

export default Intro