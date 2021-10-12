import React from 'react'
import './intro.css'
import profile from '../../img/profile.jpg'
import Aboutme from './aboutme'
import Typewriter from 'typewriter-effect'


function Intro() {


    return (
        <div className="intro_height">
            <div className='intro_styling'>
                <div className="image_container">
                    <img className='profile_picture_styling' src={profile} alt="profilepicture" />
                </div>
                <div>
                    <Typewriter
                        options={{
                            strings: ["Hello, I'm <span>Houssemeddine Salem</span>, <br />I'm a full-stack web developer"],
                            autoStart: true,
                            loop: true,
                            skipAddStyles: true,
                            wrapperClassName: 'typewriter',
                            cursor: ''
                        }}
                    />
                </div>


            </div>
            <Aboutme />


        </div >


    )
}

export default Intro