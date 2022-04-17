import "./WarehouseForm.scss";
import Button from "../Button"
import Add from '../../assets/icons/add_white_24dp.svg';
import { Link, useParams, useNavigate } from "react-router-dom";
import { editWarehouse, postNewWarehouse } from "../../utils/apiFunctions";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage";
import { WarehouseFormProps } from "../../utils/interfaces";

const WarehouseForm = ({ warehouse, contact }: WarehouseFormProps) => {

    const { warehouseId } = useParams();
    const navigate = useNavigate();
    
    const [warehouseName, setWarehouseName] = useState("");
    const [warehouseAddress, setWarehouseAddress] = useState("");
    const [warehouseCity, setWarehouseCity] = useState("");
    const [warehouseCountry, setWarehouseCountry] = useState("");
    const [contactPerson, setContactPerson] = useState("");
    const [contactPosition, setContactPosition] = useState("");
    const [contactPhone, setContactPhone] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [nameRequired, setNameRequired] = useState(false);
    const [addressRequired, setAddressRequired] = useState(false);
    const [cityRequired, setCityRequired] = useState(false);
    const [countryRequired, setCountryRequired] = useState(false);
    const [contactNameRequired, setContactNameRequired] = useState(false);
    const [positionRequired, setPositionRequired] = useState(false);
    const [phoneRequired, setPhoneRequired] = useState(false);
    const [emailRequired, setEmailRequired] = useState(false)

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name: inputName, value } = e.target

        switch (inputName) {
            case "warehouseName":
                setWarehouseName(value);
                setNameRequired(false);
                break;
            case "address":
                setWarehouseAddress(value);
                setAddressRequired(false)
                break;
            case "city":
                setWarehouseCity(value);
                setCityRequired(false);
                break;
            case "country":
                setWarehouseCountry(value);
                setCountryRequired(false)
                break;
            case "contactName":
                setContactPerson(value);
                setContactNameRequired(false);
                break;
            case "position":
                setContactPosition(value);
                setPositionRequired(false);
                break;
            case "phone":
                setContactPhone(value);
                setPhoneRequired(false);
                break;
            case "email":
                setContactEmail(value);
                setEmailRequired(false)
                break;
            default: 
                return;
        }
    }

    const handleEdit = (e: FormEvent<HTMLFormElement>, id: string) => {
        e.preventDefault();

        const updatedWarehouse = {
            name: warehouseName,
            address: warehouseAddress,
            city: warehouseCity,
            country: warehouseCountry,
            contact: {
                name: contactPerson,
                position: contactPosition,
                phone: contactPhone,
                email: contactEmail
            }
        };

        editWarehouse(id, updatedWarehouse);

        setTimeout(() => {
            navigate('/')
        }, 3000)
    }

    const handleAdd = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!warehouseName) {
            setNameRequired(true);
        }

        if (!warehouseAddress) {
            setAddressRequired(true);
        }

        if (!warehouseCity) {
            setCityRequired(true);
        }

        if (!warehouseCountry) {
            setCountryRequired(true);
        }

        if (!contactPerson) {
            setContactNameRequired(true)
        }

        if (!contactPosition) {
            setPositionRequired(true);
        }

        if (!contactPhone) {
            setPhoneRequired(true);
        }

        if (!contactEmail) {
            setEmailRequired(true)
        }

        if (!warehouseName || 
            !warehouseAddress || 
            !warehouseCity || 
            !warehouseCountry || 
            !contactPerson || 
            !contactPosition || 
            !contactPhone || 
            !contactEmail ) {
                alert("One or more fields are not filled out");
                return;
        }

        const newWarehouse = {
            name: warehouseName,
            address: warehouseAddress,
            city: warehouseCity,
            country: warehouseCountry,
            contact: {
                name: contactPerson,
                position: contactPosition,
                phone: contactPhone,
                email: contactEmail
            }
        };

        postNewWarehouse(newWarehouse);

        setTimeout(() => {
            navigate('/')
        }, 3000)
    }

    useEffect(() => {
        if (warehouse && contact) {
            const { name, address, city, country } = warehouse;
            const { name: contactName, position, phone, email } = contact
            setWarehouseName(name)
            setWarehouseAddress(address)
            setWarehouseCity(city)
            setWarehouseCountry(country)
            setContactPerson(contactName)
            setContactPosition(position)
            setContactPhone(phone)
            setContactEmail(email)
        }
    }, [contact, warehouse])

    return (
        <form 
        className="warehouse-form"
        onSubmit={warehouseId ? (e) => handleEdit(e, warehouseId) : (e) => handleAdd(e)}
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
                        value={warehouseName}
                        onChange={handleOnChange}
                        className={`warehouse-form__input ${nameRequired ? "warehouse-form__input--error" : ""}`}
                        placeholder="Warehouse Name" 
                        />
                        {nameRequired && <ErrorMessage />}
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
                        className={`warehouse-form__input ${addressRequired ? "warehouse-form__input--error" : ""}`}
                        id="address"
                        name="address"
                        value={warehouseAddress}
                        onChange={handleOnChange}
                        placeholder="Address" 
                        />
                        {addressRequired && <ErrorMessage />}
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
                        className={`warehouse-form__input ${cityRequired ? "warehouse-form__input--error" : ""}`}
                        id="city"
                        name="city"
                        value={warehouseCity}
                        onChange={handleOnChange}
                        placeholder="City" 
                        />
                        {cityRequired && <ErrorMessage />}
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
                        className={`warehouse-form__input ${countryRequired ? "warehouse-form__input--error" : ""}`} 
                        id="country"
                        name="country"
                        value={warehouseCountry}
                        onChange={handleOnChange}
                        placeholder="Country"
                        />
                        {countryRequired && <ErrorMessage />}
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
                        className={`warehouse-form__input ${contactNameRequired ? "warehouse-form__input--error" : ""}`}
                        id="contactName"
                        name="contactName"
                        value={contactPerson}
                        onChange={handleOnChange}
                        placeholder="Contact Name"
                        />
                        {contactNameRequired && <ErrorMessage />}
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
                        className={`warehouse-form__input ${positionRequired ? "warehouse-form__input--error" : ""}`}
                        id="position"
                        name="position"
                        value={contactPosition}
                        onChange={handleOnChange}
                        placeholder="Position"
                        />
                        {positionRequired && <ErrorMessage />}
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
                        className={`warehouse-form__input ${phoneRequired ? "warehouse-form__input--error" : ""}`}
                        id="phone"
                        name="phone"
                        value={contactPhone}
                        onChange={handleOnChange}
                        placeholder="Phone Number"
                        />
                        {phoneRequired && <ErrorMessage />}
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
                        className={`warehouse-form__input ${emailRequired ? "warehouse-form__input--error" : ""}`}
                        id="email"
                        name="email"
                        value={contactEmail}
                        onChange={handleOnChange}
                        placeholder="Email"
                        />
                        {emailRequired && <ErrorMessage />}
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
                text={warehouseId ? "Save" : "Add Warehouse"}
                image={warehouseId ? false : Add}
                altText={warehouseId ? "" : "Add"}
                />
            </div>
        </form>
    );
};

export default WarehouseForm;
