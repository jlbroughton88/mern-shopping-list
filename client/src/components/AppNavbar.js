import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from "reactstrap"

class AppNavbar extends Component {
    // Dont need a "this" or contructor or super anymore because we bound "this" to toggle()
    state = {
        isOpen: false
    }

    // Arrow function binds "this" to the function automatically
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                {/* dark property tells text to contrast, expand is for responsiveness at "sm" screens */}
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">Shopping List</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        {/* "navbar" property is to let the collapse component know that its part of a navbar. */}
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/jlbroughton88">
                                        Github
                                </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )

    }
}



export default AppNavbar;