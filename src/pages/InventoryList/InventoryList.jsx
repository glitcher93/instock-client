import Button from '../../components/Button';
import './InventoryList.scss';
import Add from '../../assets/icons/add_white_24dp.svg';
import TabletHeadings from '../../components/TabletHeadings';
import ItemList from '../../components/ItemList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function InventoryList() {

    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/inventory')
            .then(response => {
                setInventory(response.data)
            })
            .catch(err => console.log(err))

    }, [])

    return (
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
            <TabletHeadings headings={['Inventory Item', 'Category', 'Status', 'Qty', 'Warehouse']}/>
            <ItemList inventory={inventory}/>
        </section>
    )
}