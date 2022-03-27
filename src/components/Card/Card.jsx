import { Route, Routes } from 'react-router-dom'
import InventoryList from '../../pages/InventoryList/InventoryList'
import WarehouseList from '../../pages/WarehouseList'
import './Card.scss'

export default function Card() {
    return (
        <div 
        className='card'
        >
            <Routes>
                <Route path='/' element={<WarehouseList />} />
                <Route path='warehouses' element={<WarehouseList />} />
                <Route path='warehouses/:id' />
                <Route path='warehouses/add' />
                <Route path='warehouses/edit/:id' />
                <Route path='inventory' element={<InventoryList />} />
                <Route path='inventory/:id' />
                <Route path='inventory/add' />
                <Route path='inventory/edit/:id' />
            </Routes>
        </div>
    )
}