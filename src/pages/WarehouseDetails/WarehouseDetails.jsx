import './WarehouseDetails.scss';
import arrow from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit_white-24px.svg";
import { Link, useParams } from "react-router-dom";
import { useState } from 'react';
import warehouseData from '../../data/warehouses.json';
import inventoryData from '../../data/inventories.json';
import Button from '../../components/Button';
import TabletHeadings from '../../components/TabletHeadings';
import ItemList from '../../components/ItemList';

const WarehouseDetails = () => {

    const [warehouse, setWarehouse] = useState(warehouseData[0])
    const foundInventory = inventoryData.filter(items => items.warehouseID === warehouse.id);
    const [inventory, setInventory] = useState(foundInventory);

    return (  
        <section 
        className="warehouse-details"
        >
            <div
            className="warehouse-details__header-container"
            >
                <div className="warehouse-details__header">
                    <Link
                    to='/warehouses'
                    >
                        <img 
                        src={arrow} 
                        alt="Go Back" 
                        />
                    </Link>
                    <h1
                    className="warehouse-details__title"
                    >
                        {warehouse.name}
                    </h1>
                </div>
                <div 
                className="warehouse-details__button-container"
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
            className='warehouse-details__container'
            >
                <div
                className='warehouse-details__details-container'
                >
                    <article
                    className='warehouse-details__details'
                    >
                        <h2
                        className='warehouse-details__subtitle'
                        >
                            Warehouse Address:
                        </h2>
                        <p
                        className='warehouse-details__info warehouse-details__info--address'
                        >
                            {warehouse.address}, {warehouse.city}, {warehouse.country}
                        </p>
                    </article>
                </div>
                <div
                className='warehouse-details__details-container'
                >
                    <article
                    className='warehouse-details__details'
                    >
                        <h2
                        className='warehouse-details__subtitle'
                        >
                            Contact Name:
                        </h2>
                        <p
                        className="warehouse-details__info"
                        >
                            {warehouse.contact.name}
                        </p>
                        <p
                        className="warehouse-details__info"
                        >
                            {warehouse.contact.position}
                        </p>
                    </article>
                    <article
                    className='warehouse-details__details'
                    >
                        <h2
                        className='warehouse-details__subtitle'
                        >
                            Contact Information:
                        </h2>
                        <p
                        className='warehouse-details__info'
                        >
                            {warehouse.contact.phone}
                        </p>
                        <p
                        className='warehouse-details__info'
                        >
                            {warehouse.contact.email}
                        </p>
                    </article>
                </div>
            </div>
            <TabletHeadings 
            headings={["Inventory Item", "Category", "Status", "Quantity"]}
            specialClasses={["tablet-headings__container--details-item", "tablet-headings__container--details-category", "tablet-headings__container--details-status","tablet-headings__container--details-qty", "tablet-headings__container--details-actions"]}
            />
            <ItemList 
            inventory={inventory}
            detail
            />
        </section>
    );
}
 
export default WarehouseDetails;