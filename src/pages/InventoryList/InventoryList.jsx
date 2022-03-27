import Button from '../../components/Button';
import './InventoryList.scss';
import Add from '../../assets/icons/add_white_24dp.svg';
import TabletHeadings from '../../components/TabletHeadings';

export default function InventoryList() {
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
                    <Button text='Add New Item' image={Add} />
                </div>
            </div>
            <TabletHeadings headings={['Inventory Item', 'Category', 'Status', 'Qty', 'Warehouse']}/>
        </section>
    )
}