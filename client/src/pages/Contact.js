import React, {Component} from "react";
import { Button, Form, Container, Input, TextArea, Divider, Header, Transition} from "semantic-ui-react"
import API from "../utils/API"
import CustomPortal from "../components/CustomPortal";
import "./Contact.css"

class Contact extends Component {
    
    state = {
        firstName: "",
        lastName: "",
        subject: "",
        email: "",
        message: "",
        loading: false,
        portalDisplay: false,
        error: false,
        visible: false
    }
    
    handleInputChange = (event) => {
        const { name, value } = event.target;
            this.setState({
            [name]: value
        });
    }
    
    handleFormSubmit = (event) => {
        event.preventDefault();
        if(this.state.message === "" || this.state.subject === "" || this.state.email === null)
        {
            this.setState({error: true, portalDisplay: true})
            return;
        }

        this.setState({loading: true});
        API.sendEmail({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            subject: this.state.subject,
            email: this.state.email,
            message: this.state.message,
        }).then(x => {
            this.setState(
                {
                    firstName: "",
                    lastName: "",
                    subject: "",
                    email: "",
                    message: "",
                    loading: false,
                    portalDisplay: true,
                    error: false
                }
            )

        }).catch(err => {
            this.setState({error: true, portalDisplay: true})
        })
        setTimeout(() => {
            this.setState({portalDisplay: false})
        }, 3000);
    }

    componentDidMount = () => {
        this.setState({visible: true});
    }

    render () {
        return (
            <Container className="contact-style">
                <Transition visible={this.state.visible} animation='scale' duration={500}>
                    <Header className="contact-header">Contact Me</Header>
                </Transition>
                <Form info className="email-form">
                    <Form.Group  widths='equal'>
                        <Form.Field
                            id='form-input-control-first-name'
                            name="firstName"
                            control={Input}
                            label='First name'
                            placeholder='First name'
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                        />
                        <Form.Field
                            id='form-input-control-last-name'
                            name="lastName"
                            control={Input}
                            label='Last name'
                            placeholder='Last name'
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                        />
                        <Form.Field
                            id='form-input-control-email'
                            name="email"
                            control={Input}
                            label='Email'
                            placeholder='abc@gmail.com'
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                    </Form.Group>
                    <Divider horizontal>
                        <Header className="email-header">
                            Email Content
                        </Header>
                    </Divider>
                    <Form.Field
                        id='form-input-control-email'
                        name="subject"
                        control={Input}
                        label='Subject'
                        placeholder='Subject'
                        value={this.state.subject}
                        onChange={this.handleInputChange}
                    />
                    <Form.Field
                    id='form-textarea-control-message'
                    name="message"
                    control={TextArea}
                    label='Message'
                    value={this.state.message}
                    onChange={this.handleInputChange}
                    placeholder='Message'
                    style={{ minHeight: 350 }}
                    />
                    <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content='Send'
                    labelPosition='left' 
                    icon="send"
                    onClick={this.handleFormSubmit}
                    loading={this.state.loading && "loading"}
                    />
                </Form>
                {this.state.portalDisplay && !this.state.error && <CustomPortal message="An email has been sent successfully." messageTypes="info"/>}
                {this.state.portalDisplay && this.state.error && <CustomPortal message="An unexpected error has occured." messageTypes="error"/>}
            </Container>
        )
    }
}

export default Contact;


