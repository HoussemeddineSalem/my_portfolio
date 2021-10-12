import React from 'react'
import mybestnanny from '../../img/mybestnanny.svg'
import './projects.css'
import projectDescription from './projectsdescr'

const Projects = () => {
    return (
        <div id="projects">
            <div className="project_intro">
                <i class="fas fa-tools fa-4x"></i>
                <br />
                <h3>Projects</h3>
                <br />
                <p id="parag_under_projects">I can help you build a product, a feature or a website.
                    Look through some of my work! If you like what you see and have a project you need coded,
                    don’t hesistate to contact me.</p>
            </div>
            <div className='mybestnanny_proj'>
                <div className="mybestnanny img_container">
                    <img className=' mybestnanny_img' src={mybestnanny} alt="mybestnanny" />
                    <div class="middle">
                        <a href="https://mybestnannys.herokuapp.com/" target="_blanked"><button className="source_btn" >Live Demo</button></a>

                    </div>
                </div>

                <div className='mybestnanny mybestnanny_desc'>
                    <a href="https://github.com/HoussemeddineSalem/Checkpoint-MernAppBabysitter/tree/master" target="_blank"><p className='project_title'>My Best Nanny <i class="fab fa-github fa-1x"></i></p> </a>
                    <p>Based on google Maps API, this app allows for : <br />
                        <i class="fas fa-chevron-circle-right"></i>Parents to : <br />
                        Search and Sort for baby sitters in any desired area <br />
                        <i class="fas fa-chevron-circle-right"></i>Nannys to : <br />
                        Post their profile in order to be visible for the baby sitting seekers
                    </p>
                    <p>Technologies</p>
                    {['reactjs', 'redux', 'axios', 'nodejs', 'jwt', 'expressjs', 'mongoDB', 'mongoose'].map(
                        el => {
                            return <span className="tech_styling">{el}</span>
                        }
                    )}

                </div>
            </div>

            {
                projectDescription.map(el => {
                    return <div className='mybestnanny_proj'>
                        <div className="mybestnanny img_container">
                            <img className='mybestnanny mybestnanny_img' src={el.image} alt="mybestnanny" />
                            <div class="middle">
                                <a href={el.demo} target="_blank"><button className="source_btn">Live Demo</button></a>
                            </div>
                        </div>
                        <hr />
                        <div className='mybestnanny mybestnanny_desc'>
                            <a href={el.github} target="_blank"><p className='project_title'>{el.title} <i class="fab fa-github fa-1x"></i></p> </a>
                            <p>{el.description}</p>
                            <p>Technologies</p>
                            {
                                el.technologies.map(el => {
                                    return <span className="tech_styling">{el}</span>
                                })
                            }
                        </div>
                    </div>
                })
            }
            <div>
            </div>
        </div >

    )
}

export default Projects
