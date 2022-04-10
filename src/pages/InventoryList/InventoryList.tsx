import Button from '../../components/Button';
import './InventoryList.scss';
import Add from '../../assets/icons/add_white_24dp.svg';
import TabletHeadings from '../../components/TabletHeadings';
import ItemList from '../../components/ItemList';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { deleteItem, getAllInventories } from '../../utils/apiFunctions';
import DeleteModal from '../../components/DeleteModal';
import { ItemStateObj } from '../../utils/interfaces';

export default function InventoryList() {

    const [inventory, setInventory] = useState<ItemStateObj[]>([]);
    const [show, setShow] = useState(false);
    const [itemInfo, setItemInfo] = useState({
        id: "",
        name: ""
    })

    useEffect(() => {
        getAllInventories(setInventory)
    }, [])

    const handleClose = () => {
        setShow(false);
    }

    const handleDeleteItem = (id: string) => {
        deleteItem(id, setInventory);
        setShow(false);
    }


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
                    className='inventory-list'
                    >
                        <div
                        className='inventory-list__container'
                        >
                            <div
                            className='inventory-list__header-container'
                            >
                                <h1
                                className='inventory-list__title'
                                >
                                    Inventory
                                </h1>
                            </div>
                            <div
                            className='inventory-list__form-container'
                            >
                                <form
                                className='inventory-list__form'
                                >
                                    <input 
                                    type="text"
                                    placeholder="Search..."
                                    className='inventory-list__input'
                                    />
                                </form>
                                <Link
                                to='/inventory/add'
                                className='inventory-list__link'
                                >
                                    <Button 
                                    text='Add New Item' 
                                    image={Add} 
                                    />
                                </Link>
                            </div>
                        </div>
                        <TabletHeadings 
                        headings={['Inventory Item', 'Category', 'Status', 'Qty', 'Warehouse']}
                        />
                        <ItemList 
                        inventory={inventory}
                        setShow={setShow}
                        setItemInfo={setItemInfo}
                        />
                    </section>
                </div>
                <DeleteModal 
                show={show}
                handleClose={handleClose}
                itemInfo={itemInfo}
                handleDeleteItem={handleDeleteItem}
                />
            </div>
        </main>
    )
}