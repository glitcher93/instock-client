import './Item.scss';
import Chevron from '../../assets/icons/chevron_right-24px.svg';
import { Link } from 'react-router-dom';
import Trash from '../../assets/icons/delete_outline-24px.svg';
import Edit from '../../assets/icons/edit-24px.svg';

export default function Item({ warehouse, item, setShow, setWarehouseInfo, setItemInfo }) {

    if (item) {
        const { id, warehouseName, itemName, category, status, quantity } = item;

        return (
            <li
            className='item'
            >
                <div 
                className='item__info-container item__info-container--inventory'
                >
                    <article
                    className='item__info item__info--inventory item__info--item'
                    >
                        <h2
                        className='item__heading'
                        >
                            Inventory Item
                        </h2>
                        <Link
                        to={`/inventory/${id}`}
                        className='item__link'
                        >
                            {itemName}
                            <img 
                            src={Chevron} 
                            alt="Chevron"
                            className='item__chevron'
                            />
                        </Link>
                    </article>
                    <article
                    className='item__info item__info--inventory item__info--category'
                    >
                        <h2
                        className='item__heading'
                        >
                            Category
                        </h2>
                        <p
                        className='item__body'
                        >
                            {category}
                        </p>
                    </article>
                    <article
                    className='item__info item__info--inventory item__info--status'
                    >
                        <h2
                        className='item__heading'
                        >
                            Status
                        </h2>
                        <p
                        className='item__body'
                        >
                            {status}
                        </p>
                    </article>
                    <article
                    className='item__info item__info--inventory item__info--qty'
                    >
                        <h2
                        className='item__heading'
                        >
                            Qty
                        </h2>
                        <p
                        className='item__body'
                        >
                            {quantity}
                        </p>
                    </article>
                    <article
                    className='item__info item__info--inventory item__info--warehouse-name'
                    >
                        <h2
                        className='item__heading'
                        >
                            Warehouse
                        </h2>
                        <p
                        className='item__body'
                        >
                            {warehouseName}
                        </p>
                    </article>
                </div>
                <div
                className='item__actions item__actions--inventory-special'
                >
                    <img 
                    src={Trash} 
                    alt="Delete"
                    onClick={() => {
                        setShow(true);
                        setItemInfo({
                            id: id,
                            name: itemName
                        });
                    }}
                    className="item__action--delete"
                    />
                    <Link
                    to={`/inventory/edit/${id}`}
                    >
                        <img 
                        src={Edit} 
                        alt="Edit"
                        className='item__action'
                        />
                    </Link>
                </div>
            </li>
        )
    }

    const { id, name, address, city, country, contact } = warehouse;

    return (
        <li
            className='item'
            >
                <div 
                className='item__info-container'
                >
                        <article
                        className='item__info item__info--warehouse'
                        >
                            <h2
                            className='item__heading'
                            >
                                Warehouse
                            </h2>
                            <Link
                            to={`/warehouses/${id}`}
                            className='item__link'
                            >
                                {name}
                                <img 
                                src={Chevron} 
                                alt="Chevron"
                                />
                            </Link>
                        </article>
                        <article
                        className='item__info item__info--address'
                        >
                            <h2
                            className='item__heading'
                            >
                                Address
                            </h2>
                            <p
                            className='item__body item__body--address'
                            >
                                {address}, {city}, {country}
                            </p>
                        </article>
                        <article
                        className='item__info item__info--contact-name'
                        >
                            <h2
                            className='item__heading'
                            >
                                Contact Name
                            </h2>
                            <p
                            className='item__body'
                            >
                                {contact.name}
                            </p>
                        </article>
                        <article
                        className='item__info item__info--contact-info'
                        >
                            <h2
                            className='item__heading'
                            >
                                Contact Information
                            </h2>
                            <p
                            className='item__body'
                            >
                                {contact.phone}
                            </p>
                            <p
                            className='item__body'
                            >
                                {contact.email}
                            </p>
                        </article>
                    </div>
                <div
                className='item__actions item__actions--special'
                >
                    <img 
                    src={Trash} 
                    alt="Delete"
                    onClick={() => {
                        setShow(true);
                        setWarehouseInfo({
                            id: id,
                            name: name
                        });
                    }}
                    className="item__action--delete"
                    />
                    <Link
                    to={`/warehouses/edit/${id}`}
                    >
                        <img 
                        src={Edit} 
                        alt="Edit"
                        className='item__action'
                        />
                    </Link>
                </div>
            </li>
    )
}