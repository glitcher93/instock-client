import { Route, Routes } from 'react-router-dom'
import AddInventoryItem from '../../pages/AddInventoryItem/AddInventoryItem'
import AddWarehouse from '../../pages/AddWarehouse'
import EditInventoryItem from '../../pages/EditInventoryItem/EditInventoryItem'
import EditWarehouse from '../../pages/EditWarehouse'
import InventoryDetails from '../../pages/InventoryDetails/InventoryDetails'
import InventoryList from '../../pages/InventoryList'
import WarehouseDetails from '../../pages/WarehouseDetails'
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
                <Route path='warehouses/:id' element={<WarehouseDetails />} />
                <Route path='warehouses/add' element={<AddWarehouse />}/>
                <Route path='warehouses/edit/:id' element={<EditWarehouse />} />
                <Route path='inventory' element={<InventoryList />} />
                <Route path='inventory/:id' element={<InventoryDetails />} />
                <Route path='inventory/add' element={<AddInventoryItem />} />
                <Route path='inventory/edit/:id' element={<EditInventoryItem />} />
            </Routes>
        </div>
    )
}