import React from 'react'
import { Form, Button, Container, InputGroup, FormControl } from 'react-bootstrap'

interface FormDishesProps {
    onAdd(title: string, text: string): void,
}

export const FormDishes: React.FC<FormDishesProps> = (props) => {
    const [title, setTitle] = React.useState<string>('')
    const [text, setText] = React.useState<string>('')

    const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    const formSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if(title.trim() && text.trim()){
            props.onAdd(title, text)
            setText('')
            setTitle('')
            return
        }
        return window.alert('А где?')
    }

    return (
        <Container className="wrapper">
            <Form className="form" onSubmit={formSubmit}>
                <Form.Label>Что нового: </Form.Label>
                <InputGroup>
                    <FormControl
                        className="input"
                        value={title}
                        onChange={changeTitle}
                        type="text" id="title"
                        placeholder="Название рецепта"
                    />
                    <FormControl
                        className="input"
                        value={text}
                        onChange={changeText}
                        type="text" id="title"
                        placeholder="Сам рецептик"
                    />
                </InputGroup>
                <Button variant="outline-primary" type="submit">Добавить</Button>{' '}
            </Form>
        </Container>
    )
}