import './EditInventoryItem.scss';
import { Link } from 'react-router-dom';
import arrow from "../../assets/icons/arrow_back-24px.svg";
import InventoryForm from '../../components/InventoryForm/InventoryForm';

const EditInventoryItem = () => {
    return ( 
        <section
        className="edit-item"
        >
            <div
            className="edit-item__header-container"
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
                className="edit-item__title"
                >
                    Edit Inventory Item
                </h1>
            </div>
            <InventoryForm item />
        </section>
    );
}
 
export default EditInventoryItem;