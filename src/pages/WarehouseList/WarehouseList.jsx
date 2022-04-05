import Button from '../../components/Button';
import './WarehouseList.scss';
import Add from '../../assets/icons/add_white_24dp.svg';
import TabletHeadings from '../../components/TabletHeadings';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ItemList from '../../components/ItemList/ItemList';
import { Link } from 'react-router-dom';

export default function WarehouseList() {

    const [warehouses, setWarehouses] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:8080/warehouses')
            .then((response) => {
                setWarehouses(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <section
        className='warehouse-list'
        >
            <div
            className='warehouse-list__container'
            >
                <div
                className='warehouse-list__header-container'
                >
                    <h1
                    className='warehouse-list__title'
                    >
                        Warehouses
                    </h1>
                </div>
                <div
                className='warehouse-list__form-container'
                >
                    <form
                    className='warehouse-list__form'
                    >
                        <input 
                        type="text"
                        placeholder="Search..."
                        className='warehouse-list__input'
                        />
                    </form>
                    <Link 
                    to='/warehouses/add'
                    className='warehouse-list__link'
                    >
                        <Button 
                        text='Add New Warehouse' 
                        image={Add} 
                        />
                    </Link>
                </div>
            </div>
            <TabletHeadings 
            headings={['Warehouse', 'Address', 'Contact Name', 'Contact Information']}
            />
            <ItemList 
            warehouses={warehouses}
            />
        </section>
    )
}