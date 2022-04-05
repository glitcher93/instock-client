import Item from '../Item';
import DetailItem from '../DetailItem';

export default function ItemList({ warehouses, inventory, detail }) {

    if (detail) {
        return (
            <ul className="item-list">
                {inventory.map(item => {
                    return <DetailItem 
                            key={item.id}
                            item={item}
                            />
                })}
            </ul>
        );
    }

    return (
        <ul
        className='item-list'
        >
            {warehouses ? warehouses.map(warehouse => {
                return <Item
                        key={warehouse.id}
                        warehouse={warehouse}
                        />
            }) : inventory.map(item => {
                return <Item
                        key={item.id}
                        item={item}
                        />
            })}
        </ul>
    )
}