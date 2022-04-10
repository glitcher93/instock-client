import './EditInventoryItem.scss';
import { Link, useParams } from 'react-router-dom';
import arrow from "../../assets/icons/arrow_back-24px.svg";
import InventoryForm from '../../components/InventoryForm/InventoryForm';
import { useEffect, useState } from 'react';
import { getSingleItem } from '../../utils/apiFunctions';

const EditInventoryItem = () => {

    const { itemId } = useParams();

    const [item, setItem] = useState({})

    useEffect(() => {
        getSingleItem(itemId!, setItem);
    }, [itemId])

    return (
        <main className="main">
            <div className="main__wrapper">
                <div className="card">
                    <section
                    className="edit-item"
                    >
                        <div
                        className="edit-item__header-container"
                        >
                            <Link
                            to='/inventory'
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
                        <InventoryForm item={item} />
                    </section>
                </div>
            </div>
        </main>
    );
}

export default EditInventoryItem;