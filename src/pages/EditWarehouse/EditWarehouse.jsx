import './EditWarehouse.scss';
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';

const EditWarehouse = () => {
    return ( 
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
            <WarehouseForm warehouse />
        </section>
    );
}

export default EditWarehouse;