import Chevron from '../../assets/icons/chevron_right-24px.svg';
import { Link } from 'react-router-dom';
import Trash from '../../assets/icons/delete_outline-24px.svg';
import Edit from '../../assets/icons/edit-24px.svg';
import { DetailItemProps } from '../../utils/interfaces';

const DetailItem = ({ item, setShow, setWarehouseItemInfo }: DetailItemProps) => {

    const { id, itemName, category, status, quantity } = item;

    return ( 
        <li
        className='item'
        >
            <div 
            className='item__info-container item__info-container--inventory'
            >
                <article
                className="item__info item__info--inventory item__info--item item__info--item-special"
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
                className="item__info item__info--inventory item__info--category item__info--category-special"
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
                className="item__info item__info--inventory item__info--status item__info--status-special"
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
                className="item__info item__info--inventory item__info--qty item__info--qty-special"
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
            </div>
            <div
            className='item__actions item__actions--inventory-special item__actions--details-special'
            >
                <img 
                src={Trash} 
                alt="Delete"
                onClick={() => {
                    setShow(true);
                    setWarehouseItemInfo!({
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
    );
}
export default DetailItem;