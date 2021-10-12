import React, { useEffect, useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import './contact.css'
import axios from 'axios'

function Contact() {
    const [entry, setEntry] = useState({
        name: '',
        email: '',
        object: '',
        message: ''
    })
    const [clicked, setClicked] = useState(true)
    console.log(entry)

    const handleSubmit = () => {
        try {

            axios.post("http://localhost:8000/contact", {
                name: entry.name,
                email: entry.email,
                object: entry.object,
                message: entry.message
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    // setClicked(!clicked)

    console.log(clicked)

    // useEffect(() => {


    // }, [clicked])

    return (
        <div id="contact" className="contactme">

            <Form className="form">
                <Container className="contact_section">
                    <i class="far fa-laugh-beam fa-3x"></i>
                    <p className="p_under_smile_icon">Do I sound like a good fit for your team?</p>
                    <h3>Contact Me</h3>
                    <Container className="phone_email">
                        <Container className="icon_phone_email">
                            <i class="far fa-envelope-open fa-2x"></i>
                            <span className="num_email">salemhoussemeddine@gmail.com</span>
                        </Container>
                        <Container className="icon_phone_email">
                            <i class="fas fa-mobile-alt fa-2x"></i>
                            <span className="num_email">+216 58 00 49 77</span>
                        </Container>
                    </Container>

                </Container>
                <Container className="form_container">
                    <Form.Group className="form_layout mb-3">
                        <Form.Control
                            className="form_margin"
                            name="name" type="text"
                            placeholder="Your Name..."
                            value={entry.name}
                            onChange={(e) => {
                                setEntry({ ...entry, name: e.target.value })
                            }}
                        />
                        <Form.Control
                            className="form_margin"
                            name="email" type="email"
                            placeholder="Your Email..."
                            value={entry.email}
                            onChange={(e) => {
                                setEntry({ ...entry, email: e.target.value })
                            }}

                        />
                    </Form.Group>
                    <Form.Group className="form_layout mb-3">
                        <Form.Control
                            className="form_margin"
                            name="object" type="text"
                            placeholder="Your Subject"
                            value={entry.object}
                            onChange={(e) => {
                                setEntry({ ...entry, object: e.target.value })
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="form_layout mb-3">
                        <Form.Control
                            className="form_margin"
                            name="message"
                            as="textarea"
                            rows={3}
                            placeholder="Your Message"
                            value={entry.message}
                            onChange={(e) => {
                                setEntry({ ...entry, message: e.target.value })
                            }}
                        />
                    </Form.Group>
                    <Container className="button_container">
                        <Button
                            className="button_position"
                            onClick={handleSubmit}
                            variant="secondary"
                            type="submit"
                        >
                            Send Message
                        </Button>
                    </Container>

                </Container>

            </Form>
        </div>

    )
}

export default Contact
