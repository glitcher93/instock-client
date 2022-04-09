import Item from '../Item';
import DetailItem from '../DetailItem';

export default function ItemList({ warehouses, inventory, warehouseInventory, detail, setShow, setWarehouseInfo, setItemInfo, setWarehouseItemInfo }) {

    if (detail) {
        return (
            <ul className="item-list">
                {warehouseInventory.map(item => {
                    return <DetailItem 
                            key={item.id}
                            item={item}
                            setShow={setShow}
                            setWarehouseItemInfo={setWarehouseItemInfo}
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
                        setShow={setShow}
                        setWarehouseInfo={setWarehouseInfo}
                        />
            }) : inventory.map(item => {
                return <Item
                        key={item.id}
                        item={item}
                        setShow={setShow}
                        setItemInfo={setItemInfo}
                        />
            })}
        </ul>
    )
}