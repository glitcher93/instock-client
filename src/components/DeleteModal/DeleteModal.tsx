import Button from '../Button';
import './DeleteModal.scss';
import close from '../../assets/icons/close-24px.svg';
import { ModalProps } from '../../utils/interfaces';

const DeleteModal = ({show, handleClose, warehouseInfo, warehouseItemInfo, itemInfo, handleDeleteWarehouse, handleDeleteItem, handleDeleteItemFromWarehouse }: ModalProps) => {

    if (!show) {
        document.body.style.overflow = "unset"
        return null;
    }

    if (show) {
        document.body.style.overflow = "hidden";
    }

    const renderButton = () => {
        if (handleDeleteWarehouse) {
            return <Button 
                    text="Delete"
                    handleDeleteWarehouse={handleDeleteWarehouse}
                    warehouseInfo={warehouseInfo}
                    />
        }

        if (handleDeleteItem) {
            return <Button 
                    text="Delete"
                    handleDeleteItem={handleDeleteItem}
                    itemInfo={itemInfo}
                    />
        }

        return <Button 
                text="Delete"
                handleDeleteItemFromWarehouse={handleDeleteItemFromWarehouse}
                warehouseItemInfo={warehouseItemInfo}
                /> 
    }

    return ( 
        <div 
        className="delete-modal"
        onClick={handleClose}
        >
            <div
            className="delete-modal__container"
            >
                <div
                className="delete-modal__content"
                onClick={(e) => e.stopPropagation()}
                >
                    <div 
                    className="delete-modal__image-container"
                    >
                        <img 
                        src={close}
                        alt="Close"
                        onClick={handleClose} 
                        className="delete-modal__image"
                        />
                    </div>
                    <div 
                    className="delete-modal__content-container"
                    >
                        <div 
                        className="delete-modal__heading"
                        >
                            <h3
                            className='delete-modal__title'
                            >
                                Delete {warehouseInfo ? warehouseInfo.name : itemInfo ? itemInfo.name : warehouseItemInfo ? warehouseItemInfo.name : null} {warehouseInfo ? "warehouse?" : itemInfo ? "inventory item?" : warehouseItemInfo ? "inventory item?" : null}
                            </h3>
                        </div>
                        <div className="delete-modal__space-out">
                            <div 
                            className="delete-modal__message"
                            >
                                <p
                                className="delete-modal__paragraph"
                                >
                                    Please confirm that you'd like to delete the {warehouseInfo ? warehouseInfo.name : itemInfo ? itemInfo.name : warehouseItemInfo ? warehouseItemInfo.name : null} from the {warehouseInfo ? "list of warehouses." : itemInfo ? "inventory list." : warehouseItemInfo ? "inventory list." : null} You won't be able to undo this action.
                                </p>
                            </div>
                            <div
                            className="delete-modal__buttons"
                            >
                                <Button 
                                text="Cancel"
                                handleClose={handleClose}
                                />
                                {renderButton()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;