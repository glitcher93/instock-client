import Item from '../Item';
import DetailItem from '../DetailItem';
import { ItemListProps, ItemStateObj, SingleWarehouse } from '../../utils/interfaces';

export default function ItemList({ warehouses, inventory, warehouseInventory, detail, setShow, setWarehouseInfo, setItemInfo, setWarehouseItemInfo }: ItemListProps) {

    if (detail) {
        return (
            <ul className="item-list">
                {warehouseInventory!.map((item: ItemStateObj) => {
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
            {warehouses ? warehouses.map((warehouse: SingleWarehouse) => {
                return <Item
                        key={warehouse.id}
                        warehouse={warehouse}
                        setShow={setShow}
                        setWarehouseInfo={setWarehouseInfo}
                        />
            }) : inventory!.map((item: ItemStateObj) => {
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