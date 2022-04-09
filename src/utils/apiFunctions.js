import axios from "axios"

const apiURL = 'http://localhost:8080/'

export const getAllWarehouses = (stateFn) => {
    axios
        .get(`${apiURL}warehouses`)
        .then(res => {
            stateFn(res.data);
        })
        .catch(err => console.log(err));
}

export const getSingleWarehouse = (stateFn, stateFn2, id) => {
    axios
        .get(`${apiURL}warehouses/${id}`)
        .then(res => {
            stateFn(res.data);
            stateFn2(res.data.contact)
        })
        .catch(err => console.log(err));
}

export const postNewWarehouse = (warehouseObj) => {
    axios
        .post(`${apiURL}warehouses`, warehouseObj)
        .then(() => {
            alert('Warehouse posted successfully')
        })
        .catch(err => console.log('Something went wrong:' + err));
}

export const editWarehouse = (id, warehouseObj) => {
    axios
        .patch(`${apiURL}warehouses/edit/${id}`, warehouseObj)
        .then(() => {
            alert('Warehouse updated successfully')
        })
        .catch(err => console.log('Something went wrong:' + err));
}

export const deleteWarehouse = (id, stateFn) => {
    axios
        .delete(`${apiURL}warehouses/delete/${id}`)
        .then(() => {
            getAllWarehouses(stateFn)
        })
        .catch(err => console.log('Something went wrong:' + err))
}

export const getAllInventories = (stateFn) => {
    axios
        .get(`${apiURL}inventory`)
        .then(res => {
            stateFn(res.data);
        })
        .catch(err => console.log(err));
}

export const getSingleItem = (id, stateFn) => {
    axios
        .get(`${apiURL}inventory/${id}`)
        .then(res => {
            stateFn(res.data);
        })
        .catch(err => console.log(err));
}

export const getInventoryForWarehouse = (id, stateFn) => {
    axios
        .get(`${apiURL}inventory/warehouse/${id}`)
        .then(res => {
            stateFn(res.data);
        })
        .catch(err => console.log(err));
}

export const postNewItem = (itemObj) => {
    axios
        .post(`${apiURL}inventory`, itemObj)
        .then(() => {
            alert('Item posted successfully');
        })
        .catch(err => console.log('Something went wrong:' + err));
}

export const editItem = (id, itemObj) => {
    axios
        .patch(`${apiURL}warehouses/edit/${id}`, itemObj)
        .then(() => {
            alert('Warehouse updated successfully')
        })
        .catch(err => console.log('Something went wrong:' + err));
}

export const deleteItem = (id, stateFn) => {
    axios
        .delete(`${apiURL}inventory/delete/${id}`)
        .then(() => {
            getAllInventories(stateFn);
        })
        .catch(err => console.log('Something went wrong:' + err));
}

export const deleteItemFromWarehouse = (itemId, warehouseId, stateFn) => {
    axios
        .delete(`${apiURL}inventory/delete/${itemId}`)
        .then(() => {
            getInventoryForWarehouse(warehouseId, stateFn);
        })
        .catch(err => console.log('Something went wrong:' + err));
}