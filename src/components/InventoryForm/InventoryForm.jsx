import "./InventoryForm.scss";
import Button from "../Button"
import Add from '../../assets/icons/add_white_24dp.svg';
import { Link } from "react-router-dom";

const InventoryForm = ({ item }) => {
  return (
    <form 
    className="inventory-form"
    >
        <div className="inventory-form__wrapper">
            <div
            className="inventory-form__container"
            >
                <h2 
                className="inventory-form__sub-header"
                >
                    Item Details
                </h2>
                <div 
                className="inventory-form__form-group"
                >
                    <label 
                    htmlFor="itemName" 
                    className="inventory-form__label"
                    >
                        Item Name
                    </label>
                    <input 
                    type="text"
                    id="itemName" 
                    name="itemName"
                    className="inventory-form__input"
                    placeholder={item ? item.itemName : "Item Name"} 
                    />
                </div>
                <div 
                className="inventory-form__form-group"
                >
                    <label 
                    htmlFor="description" 
                    className="inventory-form__label"
                    >
                        Description
                    </label>
                    <textarea 
                    className="inventory-form__input inventory-form__input--textarea"
                    id="description"
                    name="description"
                    placeholder={
                        item ? item.description : "Please enter a brief item description..."
                    } 
                    />
                </div>
                <div 
                className="inventory-form__form-group"
                >
                    <label 
                    htmlFor="category" 
                    className="inventory-form__label"
                    >
                        Category
                    </label>
                    <select 
                    className="inventory-form__input inventory-form__input--select"
                    id="category"
                    name="category" 
                    >
                    </select>
                </div>
            </div>
            <div 
            className="inventory-form__container"
            >
                <h2 
                className="inventory-form__sub-header"
                >
                    Item Availability
                </h2>
                <div 
                className="inventory-form__form-group"
                >
                    <label 
                    htmlFor="status" 
                    className="inventory-form__label"
                    >
                        Status
                    </label>
                    <input 
                    type="text" 
                    className="inventory-form__input"
                    id="status"
                    name="status"
                    />
                </div>
                <div 
                className="inventory-form__form-group"
                >
                    <label 
                    htmlFor="quantity" 
                    className="inventory-form__label">
                        Quantity
                    </label>
                    <input 
                    type="number" 
                    className="inventory-form__input"
                    id="quantity"
                    name="quantity"
                    min={0}
                    placeholder={item ? item.quantity : 0}
                    />
                </div>
                <div 
                className="inventory-form__form-group"
                >
                    <label 
                    htmlFor="warehouseName" 
                    className="inventory-form__label"
                    >
                        Warehouse
                    </label>
                    <select 
                    className="inventory-form__input inventory-form__input--select" 
                    id="warehouseName"
                    name="warehouseName"
                    >
                    </select>
                </div>
            </div>
        </div>
        <div 
        className="inventory-form__buttons"
        >
            <Link
            to='/'
            className="inventory-form__link"
            >
                <Button 
                text="Cancel"
                />
            </Link>
            <Button 
            text={item ? "Save" : "Add Item"}
            image={item ? "" : Add}
            />
        </div>
    </form>
  );
};

export default InventoryForm;