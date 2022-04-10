import './InventoryDetails.scss'
import { Link, useParams } from "react-router-dom";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit_white-24px.svg";
import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import { getSingleItem } from '../../utils/apiFunctions';
import { ItemStateObj } from '../../utils/interfaces';

const InventoryDetails = () => {

    const { itemId } = useParams();

    const [item, setItem] = useState<ItemStateObj>({} as ItemStateObj);

    useEffect(() => {
        getSingleItem(itemId!, setItem)
    }, [itemId])

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
                </div>
            </div>
        </main>
        
    );
}

export default InventoryDetails;