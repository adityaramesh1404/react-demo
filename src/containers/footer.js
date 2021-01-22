import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">What We Do</Footer.Link>
                    <Footer.Link href="#">Director's Message</Footer.Link>
                    <Footer.Link href="#">Office Bearers</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Search</Footer.Title>
                    <Footer.Link href="#">Search By Name</Footer.Link>
                    <Footer.Link href="#">Search By Department</Footer.Link>
                    <Footer.Link href="#">Search By Company</Footer.Link>
                    <Footer.Link href="#">Search By Year</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link>Rajalakshmi Engineering College</Footer.Link>
                    <Footer.Link>Rajalakshmi Nagar Thandalam, Chennai - 602 105.</Footer.Link>
                    <Footer.Link>Phone : +91-44-67181111, 67181112</Footer.Link> 
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}