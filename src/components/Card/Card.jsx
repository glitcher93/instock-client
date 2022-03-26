import { Route, Routes } from 'react-router-dom'
import './Card.scss'

export default function Card() {
    return (
        <div 
        className='card'
        >
            <Routes>
                <Route path='/' />
                <Route path='warehouses' />
                <Route path='warehouses/:id' />
                <Route path='warehouses/add' />
                <Route path='warehouses/edit/:id' />
                <Route path='inventory' />
                <Route path='inventory/:id' />
                <Route path='inventory/add' />
                <Route path='inventory/edit/:id' />
            </Routes>
        </div>
    )
}