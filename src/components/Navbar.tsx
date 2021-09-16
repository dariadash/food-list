import React from 'react'
import { Navbar as BSNavbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import { Dish } from '../interface'

type Props = {
  dishes: Dish[]
  setDishes: React.Dispatch<React.SetStateAction<Dish[]>>
}

export const Navbar: React.FC<Props> = ({dishes, setDishes}) => {
  const checkedCount = dishes.filter((dish) => (dish.completed)).length

  const deleteToggles = () => {
    setDishes((prevDishes) => prevDishes.map((dish) => ({...dish, completed: false})))
  }

  return(
  <BSNavbar bg="warning" variant="light" expand="lg">
    <BSNavbar.Brand href="/">GоЕсть?</BSNavbar.Brand>
    <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
    <BSNavbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        
      <Nav.Link href="#">{checkedCount}</Nav.Link>
        <Button variant="outline-primary" onClick={() => deleteToggles()}>Сбросить статистику</Button>
        <NavDropdown title="Dropчик" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Драгон</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Драгон</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Мани</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Мани</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </BSNavbar.Collapse>
  </BSNavbar>
)}