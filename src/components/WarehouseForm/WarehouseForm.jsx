import "./WarehouseForm.scss";
import Button from "../Button"
import Add from '../../assets/icons/add_white_24dp.svg';
import { Link } from "react-router-dom";

const WarehouseForm = ({ warehouse }) => {
  return (
    <form 
    className="warehouse-form"
    >
        <div className="warehouse-form__wrapper">
            <div
            className="warehouse-form__container"
            >
                <h2 
                className="warehouse-form__sub-header"
                >
                    Warehouse Details
                </h2>
                <div 
                className="warehouse-form__form-group"
                >
                    <label 
                    htmlFor="warehouseName" 
                    className="warehouse-form__label"
                    >
                        Warehouse Name
                    </label>
                    <input 
                    type="text"
                    id="warehouseName" 
                    name="warehouseName"
                    className="warehouse-form__input"
                    placeholder={warehouse ? warehouse.name : "Warehouse Name"} 
                    />
                    </div>
                <div 
                className="warehouse-form__form-group"
                >
                    <label 
                    htmlFor="address" 
                    className="warehouse-form__label"
                    >
                        Street Address
                    </label>
                    <input 
                    type="text" 
                    className="warehouse-form__input"
                    id="address"
                    name="address"
                    placeholder={warehouse ? warehouse.address : "Address"} 
                    />
                </div>
                <div 
                className="warehouse-form__form-group"
                >
                    <label 
                    htmlFor="city" 
                    className="warehouse-form__label"
                    >
                        City
                    </label>
                    <input 
                    type="text" 
                    className="warehouse-form__input"
                    id="city"
                    name="city" 
                    placeholder={warehouse ? warehouse.city : "City"} 
                    />
                    </div>
                <div 
                className="warehouse-form__form-group"
                >
                    <label 
                    htmlFor="country" 
                    className="warehouse-form__label"
                    >
                        Country
                    </label>
                    <input 
                    type="text" 
                    className="warehouse-form__input" 
                    id="country"
                    name="country"
                    placeholder={warehouse ? warehouse.country : "Country"}
                    />
                    </div>
            </div>
            <div 
            className="warehouse-form__container"
            >
                <h2 
                className="warehouse-form__sub-header"
                >
                    Contact Details
                </h2>
                <div 
                className="warehouse-form__form-group"
                >
                    <label 
                    htmlFor="contactName" 
                    className="warehouse-form__label"
                    >
                        Contact Name
                    </label>
                    <input 
                    type="text" 
                    className="warehouse-form__input"
                    id="contactName"
                    name="contactName"
                    placeholder={warehouse ? warehouse.contact.name : "Contact Name"}
                    />
                </div>
                <div 
                className="warehouse-form__form-group"
                >
                    <label 
                    htmlFor="position" 
                    className="warehouse-form__label">
                        Position
                    </label>
                    <input 
                    type="text" 
                    className="warehouse-form__input"
                    id="position"
                    name="position"
                    placeholder={warehouse ? warehouse.contact.position : "Position"}
                    />
                </div>
                <div 
                className="warehouse-form__form-group"
                >
                    <label 
                    htmlFor="phone" 
                    className="warehouse-form__label"
                    >
                        Phone Number
                    </label>
                    <input 
                    type="text" 
                    className="warehouse-form__input" 
                    id="phone"
                    name="phone"
                    placeholder={warehouse ? warehouse.contact.phone : "Phone Number"}
                    />
                </div>
                <div 
                className="warehouse-form__form-group"
                >
                    <label 
                    htmlFor="email" 
                    className="warehouse-form__label"
                    >
                        Email
                    </label>
                    <input 
                    type="text" 
                    className="warehouse-form__input"
                    id="email"
                    name="email" 
                    placeholder={warehouse ? warehouse.contact.email : "Email"}
                    />
                </div>
            </div>
        </div>
        <div 
        className="warehouse-form__buttons"
        >
            <Link
            to='/'
            className="warehouse-form__link"
            >
                <Button 
                text="Cancel"
                />
            </Link>
            <Button 
            text={warehouse ? "Save" : "Add Warehouse"}
            image={warehouse ? "" : Add}
            />
        </div>
    </form>
  );
};

export default WarehouseForm;
