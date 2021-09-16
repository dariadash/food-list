import React from 'react'
import { Card, Col, Container, Row, Button, ToggleButton } from 'react-bootstrap'
import { Dish } from '../interface'

type ListProps = {
    dishes: Dish[],
    onToggle(id: number): void,
    onRemove(id: number): void,
}

export const ListOfDishes: React.FC<ListProps> = ({ dishes, onToggle, onRemove }) => {
    if (dishes.length === 0) {
        return <p className="center">Блюд нет</p>
    }

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        onRemove(id)
    }

    return (
        <Container>
            <Row>
                {dishes.map(dish => {
                    const classes = ['dish']
                    if (dish.completed) {
                        classes.push('completed')
                    }

                    return (
                        <Col key={dish.id} lg="4">
                            <Card className="dish-card">
                                <Card.Body>
                                    <Row>
                                        <Col sm="8">
                                            <Card.Title>{dish.title}</Card.Title>
                                        </Col>
                                        <Col sm="4">
                                            <ToggleButton
                                                className="button"
                                                size="sm"
                                                type="checkbox"
                                                checked={dish.completed}
                                                onChange={() => onToggle(dish.id)}
                                                value="" />
                                            <Button className="button" variant="danger" size="sm" onClick={event => removeHandler(event, dish.id)}>X</Button>
                                        </Col>
                                    </Row>
                                    <hr className="line"></hr>
                                    <Card.Text>
                                        {dish.text}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

