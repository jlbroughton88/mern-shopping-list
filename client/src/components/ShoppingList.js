import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";

class ShoppingList extends Component {

    state = {
        items: [
            { id: uuid(), name: "Eggs" },
            { id: uuid(), name: "Milk" },
            { id: uuid(), name: "Steak" },
            { id: uuid(), name: "Water" },
        ]
    }
    render() {
        // { } means we're pulling out items from this.state
        const { items } = this.state;
        return (
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: "2rem" }}
                    onClick={() => {
                        const name = prompt("Enter Item")
                        if (name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuid(), name }]
                            }))
                        }
                    }}
                >Add Item</Button>

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {/* (({ this is called destructuring })) */}
                        {items.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem> 
                                <Button
                                 className="remove-btn"
                                 color="danger"
                                 size="sm"
                                 onClick={() => {
                                     this.setState(state => ({
                                         // filter() is a high order array method, takes a condition
                                         // deletes item from array that does not have the same id that we passed in
                                         items: state.items.filter(item => item.id !== id)
                                     }));
                                 }}
                                >&times;</Button>{name} </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default ShoppingList