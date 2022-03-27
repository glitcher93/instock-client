import Button from '../../components/Button';
import './WarehouseList.scss';
import Add from '../../assets/icons/add_white_24dp.svg';
import TabletHeadings from '../../components/TabletHeadings';

export default function WarehouseList() {
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
                    >Warehouses</h1>
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
                    <Button text='Add New Warehouse' image={Add} />
                </div>
            </div>
            <TabletHeadings headings={['Warehouse', 'Address', 'Contact Name', 'Contact Information']}/>
        </section>
    )
}