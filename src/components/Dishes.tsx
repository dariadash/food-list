import React, { useEffect, useState } from 'react'
import { Dish } from '../interface'
import { FormDishes } from './FormDishes'
import { ListOfDishes } from './ListOfDishes'

type Props<T> = {
    dishes: T[],
    setDishes: React.Dispatch<React.SetStateAction<T[]>>
}

export const Dishes: React.FC<Props<Dish>> = ({dishes, setDishes}) => {
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('dishes') || '[]') as Dish[]
        setDishes(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('dishes', JSON.stringify(dishes))
    }, [dishes])

    const addHandler = (title: string, text: string) => {
        const newDish: Dish = {
            title: title,
            text: text,
            id: Date.now(),
            completed: false
        }
        setDishes(prev => [newDish, ...prev])
    }

    const toggleHandler = (id: number) => {
        setDishes(prev => prev.map(dish => {
            if (dish.id === id) {
                return {
                    ...dish,
                    completed: !dish.completed
                }
            }
            return dish
        }))
    }

    const removeHandler = (id: number) => {
        const shoudRemove = window.confirm('Вы уверены, что хотите удалить элемент?')
        if (shoudRemove) {
            setDishes(prev => prev.filter(dish => dish.id !== id))
        }
    }

    return (<>
        <FormDishes onAdd={addHandler} />
        <ListOfDishes dishes={dishes} onToggle={toggleHandler} onRemove={removeHandler} />
    </>)
}