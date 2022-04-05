import './InventoryDetails.scss'
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit_white-24px.svg";
import itemData from '../../data/inventories.json';
import { useState } from 'react';
import Button from '../../components/Button';

const InventoryDetails = () => {

    const [item, setItem] = useState(itemData[0]);

    return (
        <section
        className='inventory-details'
        >
            <div
            className="inventory-details__header-container"
            >
                <div className="inventory-details__header">
                    <Link
                    to='/inventory'
                    >
                        <img 
                        src={arrow} 
                        alt="Go Back" 
                        />
                    </Link>
                    <h1
                    className="inventory-details__title"
                    >
                        {item.itemName}
                    </h1>
                </div>
                <div 
                className="inventory-details__button-container"
                >
                    <Button
                    image={edit}
                    text="Edit"
                    specialButton="button--special"
                    specialClass="button__text--special"
                    />
                </div>
            </div>
            <div
            className='inventory-details__container'
            >
                <div
                className='inventory-details__details-container'
                >
                    <article
                    className='inventory-details__details'
                    >
                        <h2
                        className='inventory-details__subtitle'
                        >
                            Item Description:
                        </h2>
                        <p
                        className='inventory-details__info'
                        >
                            {item.description}
                        </p>
                    </article>
                    <article
                    className='inventory-details__details'
                    >
                        <h2
                        className='inventory-details__subtitle'
                        >
                            Category:
                        </h2>
                        <p
                        className='inventory-details__info'
                        >
                            {item.category}
                        </p>
                    </article>
                </div>
                <div
                className='inventory-details__details-container'
                >
                    <article
                    className='inventory-details__details'
                    >
                        <h2
                        className='inventory-details__subtitle'
                        >
                            Status:
                        </h2>
                        <p
                        className={`inventory-details__info inventory-details__info--status ${item.status === "In Stock" ? "inventory-details__info--in" : "inventory-details__info--out"}`}
                        >
                            {item.status}
                        </p>
                    </article>
                    <article
                    className='inventory-details__details'
                    >
                        <h2
                        className='inventory-details__subtitle'
                        >
                            Warehouse:
                        </h2>
                        <p
                        className='inventory-details__info'
                        >
                            {item.warehouseName}
                        </p>
                    </article>
                    <article
                    className='inventory-details__details'
                    >
                        <h2
                        className='inventory-details__subtitle'
                        >
                            Quantity:
                        </h2>
                        <p
                        className='inventory-details__info'
                        >
                            {item.quantity}
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default InventoryDetails;