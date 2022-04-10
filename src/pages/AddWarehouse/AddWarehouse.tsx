import './AddWarehouse.scss';
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';

const AddWarehouse = () => {
    return ( 
        <main 
        className="main"
        >
            <div 
            className="main__wrapper"
            >
                <div 
                className="card"
                >
                    <section
                    className="add-warehouse"
                    >
                        <div
                        className="add-warehouse__header-container"
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
                            className="add-warehouse__title"
                            >
                                Add New Warehouse
                            </h1>
                        </div>
                        <WarehouseForm />
                    </section>
                </div>
            </div>
        </main>
    );
}

export default AddWarehouse;