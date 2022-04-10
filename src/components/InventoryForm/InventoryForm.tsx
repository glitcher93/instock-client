import "./InventoryForm.scss";
import Button from "../Button"
import Add from '../../assets/icons/add_white_24dp.svg';
import { Link, useParams, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getAllWarehouses, editItem, postNewItem } from "../../utils/apiFunctions";
import ErrorMessage from "../ErrorMessage";
import { InvFormProp, WarehouseStateObject } from "../../utils/interfaces";

const InventoryForm = (props: InvFormProp) => {

    const { item } = props

    const { itemId } = useParams();
    const navigate = useNavigate();
    
    const [itemTitle, setItemTitle] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemCategory, setItemCategory] = useState("");
    const [itemStatus, setItemStatus] = useState("");
    const [itemQuantity, setItemQuantity] = useState("");
    const [itemWarehouse, setItemWarehouse] = useState("");
    const [warehouses, setWarehouses] = useState<WarehouseStateObject[]>([]);
    const [nameRequired, setNameRequired] = useState(false);
    const [descriptionRequired, setDescriptionRequired] = useState(false);
    const [categoryRequired, setCategoryRequired] = useState(false);
    const [statusRequired, setStatusRequired] = useState(false);
    const [quantityRequired, setQuantityRequired] = useState(false);
    const [warehouseNameRequired, setWarehouseNameRequired] = useState(false);
    const [show, setShow] = useState(true);

    useEffect(() => {
        if (itemId) {
            setItemTitle(item!.itemName)
            setItemDescription(item!.description)
            setItemCategory(item!.category)
            setItemStatus(item!.status)
            setItemQuantity(String(item!.quantity))
            setItemWarehouse(item!.warehouseName)
        }
        getAllWarehouses(setWarehouses);
    }, [item, itemId])

    const handleEdit = (e: FormEvent<HTMLFormElement>, id: string) => {
        e.preventDefault();

        const updatedItem = {
            itemName: itemTitle,
            description: itemDescription,
            category: itemCategory,
            status: itemStatus,
            quantity: itemStatus === "In Stock" ? parseInt(itemQuantity) : 0,
            warehouseName: itemWarehouse
        }

        editItem(id, updatedItem);

        setTimeout(() => {
            navigate('/inventory')
        }, 3000)
    }

    const handleAdd = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!itemTitle) {
            setNameRequired(true);
        }

        if (!itemDescription) {
            setDescriptionRequired(true);
        }

        if (!itemCategory) {
            setCategoryRequired(true);
        }

        if (!itemStatus) {
            setStatusRequired(true);
        }

        if (!itemQuantity) {
            setQuantityRequired(true);
        }

        if (!itemWarehouse) {
            setWarehouseNameRequired(true);
        }

        if (!itemTitle || 
            !itemDescription || 
            !itemCategory ||
            !itemStatus ||
            !itemQuantity || 
            !itemWarehouse) {
            alert("One or more fields are not filled out");
            return;
        }

        const newItem = {
            itemName: itemTitle,
            description: itemDescription,
            category: itemCategory,
            status: itemStatus,
            quantity: itemStatus === "In Stock" ? parseInt(itemQuantity) : 0,
            warehouseName: itemWarehouse
        }

        postNewItem(newItem);

        setTimeout(() => {
            navigate('/inventory')
        }, 3000)
    }

    const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> ) => {
        const { name: inputName, value } = e.target
        
        switch (inputName) {
            case "itemName":
                setItemTitle(value);
                setNameRequired(false)
                break;
            case "description":
                setItemDescription(value);
                setDescriptionRequired(false)
                break;
            case "category":
                setItemCategory(value);
                setCategoryRequired(false)
                break;
            case "status":
                setItemStatus( value);
                setStatusRequired(false)
                break;
            case "quantity":
                setItemQuantity(value);
                setQuantityRequired(false);
                break;
            case "warehouseName":
                setItemWarehouse(value);
                setWarehouseNameRequired(false);
                break;
            default: 
                return;
        }
    }

    return (
        <form 
        className="inventory-form"
        onSubmit={itemId ? (e) => handleEdit(e, itemId) : (e) => handleAdd(e)}
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
                        value={itemTitle}
                        onChange={handleOnChange}
                        className={`inventory-form__input ${nameRequired ? "inventory-form__input--error" : ""}`}
                        placeholder="Item Name"
                        />
                        {nameRequired && <ErrorMessage />}
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
                        className={`inventory-form__input inventory-form__input--textarea ${descriptionRequired ? "inventory-form__input--error" : ""}`}
                        id="description"
                        name="description"
                        defaultValue={item ? itemDescription : itemDescription}
                        onChange={handleOnChange}
                        placeholder="Please enter a brief item description..." 
                        ></textarea>
                        {descriptionRequired && <ErrorMessage />}
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
                        className={`inventory-form__input inventory-form__input--select ${categoryRequired ? "inventory-form__input--error" : ""}`}
                        id="category"
                        name="category"
                        onChange={handleOnChange}
                        defaultValue="" 
                        >
                            <option value="" disabled>{item ? itemCategory : "Please Select"}</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Gear">Gear</option>
                            <option value="Apparel">Apparel</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Health">Health</option>
                        </select>
                        {categoryRequired && <ErrorMessage />}
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
                    <fieldset 
                    className="inventory-form__form-group"
                    >
                        <legend 
                        className="inventory-form__label"
                        >
                            Status
                        </legend>
                        <div
                        className="inventory-form__radio-container"
                        >
                            <div 
                            className="inventory-form__radio-group"
                            >
                                <input 
                                type="radio" 
                                className="inventory-form__input--radio"
                                id="in-stock"
                                name="status"
                                onChange={handleOnChange}
                                value="In Stock"
                                onClick={() => setShow(true)}
                                checked={itemStatus === 'In Stock' ? true : false}
                                />
                                <label 
                                htmlFor="in-stock"
                                className="inventory-form__label inventory-form__label--radio"
                                >
                                    In Stock
                                </label>
                            </div>
                            <div 
                            className="inventory-form__radio-group"
                            >
                                <input 
                                type="radio" 
                                className="inventory-form__input--radio"
                                id="out-of-stock"
                                name="status"
                                onChange={handleOnChange}
                                onClick={() => setShow(false)}
                                value="Out of Stock"
                                checked={itemStatus === 'Out of Stock' ? true : false}
                                />
                                <label 
                                htmlFor="out-of-stock"
                                className="inventory-form__label inventory-form__label--radio"
                                >
                                    Out of Stock
                                </label>
                            </div>
                        </div>
                        {statusRequired && <ErrorMessage />}
                    </fieldset>
                    {show ? 
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
                        className={`inventory-form__input ${quantityRequired ? "inventory-form__input--error" : ""}`}
                        id="quantity"
                        name="quantity"
                        onChange={handleOnChange}
                        value={itemQuantity}
                        min={0}
                        placeholder={"0"}
                        />
                        {quantityRequired && <ErrorMessage />}
                    </div> : null
                    }
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
                        className={`inventory-form__input inventory-form__input--select ${warehouseNameRequired ? "inventory-form__input--error" : ""}`}
                        id="warehouseName"
                        name="warehouseName"
                        defaultValue=""
                        >
                            <option value="" disabled>{item ? itemWarehouse : "Please Select"}</option>
                            {warehouses.map(warehouse => {
                                return <option 
                                        key={warehouse.id}
                                        >
                                            {warehouse.name}
                                        </option>
                            })}
                        </select>
                        {warehouseNameRequired && <ErrorMessage />}
                    </div>
                </div>
            </div>
            <div 
            className="inventory-form__buttons"
            >
                <Link
                to='/inventory'
                className="inventory-form__link"
                >
                    <Button 
                    text="Cancel"
                    />
                </Link>
                <Button 
                text={item ? "Save" : "Add Item"}
                image={item ? false : Add}
                />
            </div>
        </form>
    );
};

export default InventoryForm;