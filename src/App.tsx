import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import WarehouseList from './pages/WarehouseList'
import WarehouseDetails from './pages/WarehouseDetails';
import AddWarehouse from './pages/AddWarehouse';
import EditWarehouse from './pages/EditWarehouse';
import InventoryList from './pages/InventoryList';
import InventoryDetails from './pages/InventoryDetails';
import AddInventoryItem from './pages/AddInventoryItem';
import EditInventoryItem from './pages/EditInventoryItem';

function App() {
  return (
    <>
      <BrowserRouter>
        <PageHeader />
        <Routes>
            <Route path="/*" element={<WarehouseList />} />
            <Route path="warehouses" element={<WarehouseList />} />
            <Route path="warehouses/:warehouseId" element={<WarehouseDetails />} />
            <Route path="warehouses/add" element={<AddWarehouse />} />
            <Route path="warehouses/edit/:warehouseId" element={<EditWarehouse />}/>
            <Route path="inventory" element={<InventoryList />} />
            <Route path="inventory/:itemId" element={<InventoryDetails />} />
            <Route path="inventory/add" element={<AddInventoryItem />} />
            <Route path="inventory/edit/:itemId" element={<EditInventoryItem />} />
        </Routes>
        <PageFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
