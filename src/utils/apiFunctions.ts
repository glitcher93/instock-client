import axios from "axios"
import { Dispatch, SetStateAction } from "react";
import { ContactObj, ItemObj, ItemStateObj, WarehouseObject, WarehouseStateObject } from "./interfaces";

const apiURL = 'http://localhost:8080/'

export const getAllWarehouses = (stateFn: Dispatch<SetStateAction<WarehouseStateObject[]>>) => {
    axios
        .get(`${apiURL}warehouses`)
        .then(res => {
            stateFn(res.data);
        })
        .catch(err => console.log(err));
}

export const getSingleWarehouse = (stateFn: Dispatch<SetStateAction<WarehouseStateObject | undefined>>, stateFn2: Dispatch<SetStateAction<ContactObj | undefined>>, id: string ) => {
    axios
        .get(`${apiURL}warehouses/${id}`)
        .then(res => {
            stateFn(res.data);
            stateFn2(res.data.contact)
        })
        .catch(err => console.log(err));
}

export const postNewWarehouse = (warehouseObj: WarehouseObject) => {
    axios
        .post(`${apiURL}warehouses`, warehouseObj)
        .then(() => {
            alert('Warehouse posted successfully')
        })
        .catch(err => console.log('Something went wrong:' + err));
}

export const editWarehouse = (id: string, warehouseObj: WarehouseObject) => {
    axios
        .patch(`${apiURL}warehouses/edit/${id}`, warehouseObj)
        .then(() => {
            alert('Warehouse updated successfully')
        })
        .catch(err => console.log('Something went wrong:' + err));
}

export const deleteWarehouse = (id: string, stateFn: Dispatch<SetStateAction<WarehouseStateObject[]>>) => {
    axios
        .delete(`${apiURL}warehouses/delete/${id}`)
        .then(() => {
            getAllWarehouses(stateFn)
        })
        .catch(err => console.log('Something went wrong:' + err))
}

export const getAllInventories = (stateFn: Dispatch<SetStateAction<ItemStateObj[]>>) => {
    axios
        .get(`${apiURL}inventory`)
        .then(res => {
            stateFn(res.data);
        })
        .catch(err => console.log(err));
}

export const getSingleItem = (id: string, stateFn: Dispatch<SetStateAction<ItemStateObj | undefined>>) => {
    axios
        .get(`${apiURL}inventory/${id}`)
        .then(res => {
            stateFn(res.data);
        })
        .catch(err => console.log(err));
}

export const getInventoryForWarehouse = (id: string, stateFn: Dispatch<SetStateAction<ItemStateObj[]>>) => {
    axios
        .get(`${apiURL}inventory/warehouse/${id}`)
        .then(res => {
            stateFn(res.data);
        })
        .catch(err => console.log(err));
}

export const postNewItem = (itemObj: ItemObj) => {
    axios
        .post(`${apiURL}inventory`, itemObj)
        .then(() => {
            alert('Item posted successfully');
        })
        .catch(err => console.log('Something went wrong:' + err));
}

export const editItem = (id: string, itemObj: ItemObj) => {
    axios
        .patch(`${apiURL}warehouses/edit/${id}`, itemObj)
        .then(() => {
            alert('Warehouse updated successfully')
        })
        .catch(err => console.log('Something went wrong:' + err));
}

export const deleteItem = (id: string, stateFn: Dispatch<SetStateAction<ItemStateObj[]>>) => {
    axios
        .delete(`${apiURL}inventory/delete/${id}`)
        .then(() => {
            getAllInventories(stateFn);
        })
        .catch(err => console.log('Something went wrong:' + err));
}

export const deleteItemFromWarehouse = (itemId: string, warehouseId: string, stateFn: Dispatch<SetStateAction<ItemStateObj[]>>) => {
    axios
        .delete(`${apiURL}inventory/delete/${itemId}`)
        .then(() => {
            getInventoryForWarehouse(warehouseId, stateFn);
        })
        .catch(err => console.log('Something went wrong:' + err));
}