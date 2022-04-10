import './AddInventoryItem.scss';
import { Link } from 'react-router-dom';
import arrow from "../../assets/icons/arrow_back-24px.svg";
import InventoryForm from '../../components/InventoryForm/InventoryForm';

const AddInventoryItem = () => {

    

    return (
        <main className="main">
            <div className="main__wrapper">
                <div className="card">
                    <section
                    className="add-item"
                    >
                        <div
                        className="add-item__header-container"
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
                            className="add-item__title"
                            >
                                Add Inventory Item
                            </h1>
                        </div>
                        <InventoryForm />
                    </section>
                </div>
            </div>
        </main>
    );
}
 
export default AddInventoryItem;