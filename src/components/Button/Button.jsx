import './Button.scss'

export default function Button({ text, image, altText, specialButton, specialClass, handleClose, warehouseInfo, itemInfo, warehouseItemInfo, handleDeleteItem, handleDeleteWarehouse, handleDeleteItemFromWarehouse }) {

    const renderButton = () => {
        if (image) {
            return (
                <button
                className={`button ${specialButton}`}
                >
                    <img 
                    src={image} 
                    alt={altText}
                    className='button__image'
                    />
                    <p
                    className={`button__text ${specialClass}`}
                    >
                        {text}
                    </p>
                </button>
            )
        }

        if (handleDeleteWarehouse) {
            return (
                <button
                className="button button--delete"
                onClick={() => handleDeleteWarehouse(warehouseInfo.id)} 
                >
                    <p
                    className="button__text"
                    >
                        {text}
                    </p>
                </button>
            );
            
        }

        if (handleDeleteItem) {
            return (
                <button
                className="button button--delete"
                onClick={() => handleDeleteItem(itemInfo.id)} 
                >
                    <p
                    className="button__text"
                    >
                        {text}
                    </p>
                </button>
            );
        }

        if (handleDeleteItemFromWarehouse) {
            return (
                <button
                className="button button--delete"
                onClick={() => handleDeleteItemFromWarehouse(warehouseItemInfo.id)} 
                >
                    <p
                    className="button__text"
                    >
                        {text}
                    </p>
                </button>
            );
        }

        if (text === "Cancel") {
            return (
                <button
                className="button button--cancel"
                onClick={handleClose} 
                >
                    <p
                    className="button__text"
                    >
                        {text}
                    </p>
                </button>
            )
        }

        return (
            <button
            className="button"
            >
                <p
                className="button__text"
                >
                    {text}
                </p>
            </button>
        )
    }
    

    return (
        <>
            {renderButton()}
        </>
    )
}