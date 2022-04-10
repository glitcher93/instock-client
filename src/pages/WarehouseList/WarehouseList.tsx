import Button from '../../components/Button';
import './WarehouseList.scss';
import Add from '../../assets/icons/add_white_24dp.svg';
import TabletHeadings from '../../components/TabletHeadings';
import ItemList from '../../components/ItemList/ItemList';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { deleteWarehouse, getAllWarehouses } from '../../utils/apiFunctions';
import DeleteModal from '../../components/DeleteModal';
import { WarehouseStateObject } from '../../utils/interfaces';

export default function WarehouseList() {

    const [warehouses, setWarehouses] = useState<WarehouseStateObject[]>([]);
    const [show, setShow] = useState(false);
    const [warehouseInfo, setWarehouseInfo] = useState({
        id: "",
        name: ""
    })

    useEffect(() => {
        getAllWarehouses(setWarehouses)
    }, [])

    const handleClose = () => {
        setShow(false);
    }

    const handleDeleteWarehouse = (id: string) => {
        deleteWarehouse(id, setWarehouses)
        setShow(false);
    }

    return (
        <main
        className='main'
        >
            <div 
            className='main__wrapper'
            >
                <div className="card">
                    <section
                    className='warehouse-list'
                    >
                        <div
                        className='warehouse-list__container'
                        >
                            <div
                            className='warehouse-list__header-container'
                            >
                                <h1
                                className='warehouse-list__title'
                                >
                                    Warehouses
                                </h1>
                            </div>
                            <div
                            className='warehouse-list__form-container'
                            >
                                <form
                                className='warehouse-list__form'
                                >
                                    <input 
                                    type="text"
                                    placeholder="Search..."
                                    className='warehouse-list__input'
                                    />
                                </form>
                                <Link 
                                to='/warehouses/add'
                                className='warehouse-list__link'
                                >
                                    <Button 
                                    text='Add New Warehouse' 
                                    image={Add} 
                                    />
                                </Link>
                            </div>
                        </div>
                        <TabletHeadings 
                        headings={['Warehouse', 'Address', 'Contact Name', 'Contact Information']}
                        />
                        <ItemList 
                        warehouses={warehouses}
                        setShow={setShow}
                        setWarehouseInfo={setWarehouseInfo}
                        />
                    </section>
                </div>
                <DeleteModal 
                show={show}
                handleClose={handleClose}
                warehouseInfo={warehouseInfo}
                handleDeleteWarehouse={handleDeleteWarehouse}
                />
            </div>
        </main>
    )
}