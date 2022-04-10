import './WarehouseDetails.scss';
import arrow from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit_white-24px.svg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import TabletHeadings from '../../components/TabletHeadings';
import ItemList from '../../components/ItemList';
import { deleteItemFromWarehouse, getInventoryForWarehouse, getSingleWarehouse } from '../../utils/apiFunctions';
import DeleteModal from '../../components/DeleteModal';
import { ContactObj, ItemStateObj, WarehouseStateObject } from '../../utils/interfaces';

const WarehouseDetails = () => {

    const { warehouseId } = useParams();

    const [warehouse, setWarehouse] = useState<WarehouseStateObject>({} as WarehouseStateObject);
    const [contact, setContact]  = useState<ContactObj>({} as ContactObj);
    const [warehouseInventory, setWarehouseInventory] = useState<ItemStateObj[]>([]);
    const [show, setShow] = useState(false);
    const [warehouseItemInfo, setWarehouseItemInfo] = useState({
        id: "",
        name: ""
    })

    useEffect(() => {
        getSingleWarehouse(setWarehouse, setContact, warehouseId!);
        getInventoryForWarehouse(warehouseId!, setWarehouseInventory)
    }, [warehouseId])

    const handleClose = () => {
        setShow(false);
    }

    const handleDeleteItemFromWarehouse = (id: string) => {
        deleteItemFromWarehouse(id, warehouseId!, setWarehouseInventory)
        setShow(false);
    }

    const {id, name, address, city, country } = warehouse;
    const { name: contactName, position, phone, email } = contact

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
                                    {name}
                                </h1>
                            </div>
                            <div 
                            className="warehouse-details__button-container"
                            >
                                <Link
                                to={`/warehouses/edit/${id}`}
                                >
                                    <Button
                                    image={edit}
                                    text="Edit"
                                    specialButton="button--special"
                                    specialClass="button__text--special"
                                    />
                                </Link>
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
                                        {address}, {city}, {country}
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
                                        {contactName}
                                    </p>
                                    <p
                                    className="warehouse-details__info"
                                    >
                                        {position}
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
                                        {phone}
                                    </p>
                                    <p
                                    className='warehouse-details__info'
                                    >
                                        {email}
                                    </p>
                                </article>
                            </div>
                        </div>
                        <TabletHeadings 
                        headings={["Inventory Item", "Category", "Status", "Quantity"]}
                        specialClasses={["tablet-headings__container--details-item", "tablet-headings__container--details-category", "tablet-headings__container--details-status","tablet-headings__container--details-qty", "tablet-headings__container--details-actions"]}
                        />
                        <ItemList 
                        warehouseInventory={warehouseInventory}
                        setShow={setShow}
                        setWarehouseItemInfo={setWarehouseItemInfo}
                        detail
                        />
                    </section>
                </div>
                <DeleteModal 
                show={show}
                handleClose={handleClose}
                warehouseItemInfo={warehouseItemInfo}
                handleDeleteItemFromWarehouse={handleDeleteItemFromWarehouse} 
                />
            </div>
        </main>  
    );
}

export default WarehouseDetails;