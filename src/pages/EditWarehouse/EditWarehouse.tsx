import './EditWarehouse.scss';
import { Link, useParams } from "react-router-dom";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';
import { useEffect, useState } from 'react';
import { getSingleWarehouse } from '../../utils/apiFunctions';

const EditWarehouse = () => {

    const { warehouseId } = useParams();

    const [warehouse, setWarehouse] = useState({});
    const [contact, setContact] = useState({});

    useEffect(() => {
        getSingleWarehouse(setWarehouse, setContact, warehouseId!)
    }, [warehouseId])

    return (
        <main className="main">
            <div className="main__wrapper">
                <div className="card">
                    <section
                    className="edit-warehouse"
                    >
                        <div
                        className="edit-warehouse__header-container"
                        >
                            <Link
                            to='/'
                            >
                                <img 
                                src={arrow} 
                                alt="Go Back" 
                                />
                            </Link>
                            <h1
                            className="edit-warehouse__title"
                            >
                                Edit Warehouse
                            </h1>
                        </div>
                        <WarehouseForm 
                        warehouse={warehouse} 
                        contact={contact} 
                        />
                    </section>
                </div>
            </div>
        </main> 
    );
}

export default EditWarehouse;