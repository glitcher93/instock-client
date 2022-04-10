"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("components/PageHeader/PageHeader", ["require", "exports", "react/jsx-runtime", "react-router-dom", "../../assets/logo/InStock-Logo.svg", "./PageHeader.scss"], function (require, exports, jsx_runtime_1, react_router_dom_1, InStock_Logo_svg_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    InStock_Logo_svg_1 = __importDefault(InStock_Logo_svg_1);
    function PageHeader() {
        return ((0, jsx_runtime_1.jsx)("header", Object.assign({ className: 'header' }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "header__wrapper" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'header__logo-container' }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/', className: 'header__link' }, { children: (0, jsx_runtime_1.jsx)("img", { src: InStock_Logo_svg_1.default, alt: "InStock logo", className: 'header__logo' }) })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'header__nav-container' }, { children: (0, jsx_runtime_1.jsx)("nav", Object.assign({ className: 'header__nav' }, { children: (0, jsx_runtime_1.jsxs)("ul", Object.assign({ className: 'header__nav-list' }, { children: [(0, jsx_runtime_1.jsx)("li", Object.assign({ className: 'header__nav-item header__nav-item--left' }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: '/warehouses', className: 'header__nav-link' }, { children: "Warehouses" })) })), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: 'header__nav-item' }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: '/inventory', className: 'header__nav-link' }, { children: "Inventory" })) }))] })) })) }))] })) })));
    }
    exports.default = PageHeader;
});
define("components/PageHeader/index", ["require", "exports", "components/PageHeader/PageHeader"], function (require, exports, PageHeader_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = void 0;
    Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(PageHeader_1).default; } });
});
define("components/PageFooter/PageFooter", ["require", "exports", "react/jsx-runtime", "./PageFooter.scss"], function (require, exports, jsx_runtime_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function PageFooter() {
        return ((0, jsx_runtime_2.jsx)("footer", Object.assign({ className: 'footer' }, { children: (0, jsx_runtime_2.jsx)("p", Object.assign({ className: 'footer__copyright' }, { children: "\u00A9 InStock Inc. All Rights Reserved" })) })));
    }
    exports.default = PageFooter;
});
define("components/PageFooter/index", ["require", "exports", "components/PageFooter/PageFooter"], function (require, exports, PageFooter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    PageFooter_1 = __importDefault(PageFooter_1);
    exports.default = PageFooter_1.default;
});
define("utils/interfaces", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("components/Button/Button", ["require", "exports", "react/jsx-runtime", "./Button.scss"], function (require, exports, jsx_runtime_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Button({ text, image, altText, specialButton, specialClass, handleClose, warehouseInfo, itemInfo, warehouseItemInfo, handleDeleteItem, handleDeleteWarehouse, handleDeleteItemFromWarehouse }) {
        const renderButton = () => {
            if (image) {
                return ((0, jsx_runtime_3.jsxs)("button", Object.assign({ className: `button ${specialButton}` }, { children: [(0, jsx_runtime_3.jsx)("img", { src: image, alt: altText, className: 'button__image' }), (0, jsx_runtime_3.jsx)("p", Object.assign({ className: `button__text ${specialClass}` }, { children: text }))] })));
            }
            if (handleDeleteWarehouse) {
                return ((0, jsx_runtime_3.jsx)("button", Object.assign({ className: "button button--delete", onClick: () => handleDeleteWarehouse(warehouseInfo.id) }, { children: (0, jsx_runtime_3.jsx)("p", Object.assign({ className: "button__text" }, { children: text })) })));
            }
            if (handleDeleteItem) {
                return ((0, jsx_runtime_3.jsx)("button", Object.assign({ className: "button button--delete", onClick: () => handleDeleteItem(itemInfo.id) }, { children: (0, jsx_runtime_3.jsx)("p", Object.assign({ className: "button__text" }, { children: text })) })));
            }
            if (handleDeleteItemFromWarehouse) {
                return ((0, jsx_runtime_3.jsx)("button", Object.assign({ className: "button button--delete", onClick: () => handleDeleteItemFromWarehouse(warehouseItemInfo.id) }, { children: (0, jsx_runtime_3.jsx)("p", Object.assign({ className: "button__text" }, { children: text })) })));
            }
            if (text === "Cancel") {
                return ((0, jsx_runtime_3.jsx)("button", Object.assign({ className: "button button--cancel", onClick: handleClose }, { children: (0, jsx_runtime_3.jsx)("p", Object.assign({ className: "button__text" }, { children: text })) })));
            }
            return ((0, jsx_runtime_3.jsx)("button", Object.assign({ className: "button" }, { children: (0, jsx_runtime_3.jsx)("p", Object.assign({ className: "button__text" }, { children: text })) })));
        };
        return ((0, jsx_runtime_3.jsx)(jsx_runtime_3.Fragment, { children: renderButton() }));
    }
    exports.default = Button;
});
define("components/Button/index", ["require", "exports", "components/Button/Button"], function (require, exports, Button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Button_1 = __importDefault(Button_1);
    exports.default = Button_1.default;
});
define("components/TabletHeadings/TabletHeadings", ["require", "exports", "react/jsx-runtime", "../../assets/icons/sort-24px.svg", "./TabletHeadings.scss"], function (require, exports, jsx_runtime_4, sort_24px_svg_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    sort_24px_svg_1 = __importDefault(sort_24px_svg_1);
    function TabletHeadings(props) {
        const { headings, specialClasses } = props;
        if (headings.length === 5) {
            return ((0, jsx_runtime_4.jsxs)("div", Object.assign({ className: 'tablet-headings' }, { children: [(0, jsx_runtime_4.jsxs)("div", Object.assign({ className: "tablet-headings__container tablet-headings__container--item" }, { children: [(0, jsx_runtime_4.jsx)("p", Object.assign({ className: "tablet-headings__heading" }, { children: headings[0] })), (0, jsx_runtime_4.jsx)("img", { src: sort_24px_svg_1.default, alt: "Sort", className: 'tablet-headings__sort-icon' })] })), (0, jsx_runtime_4.jsxs)("div", Object.assign({ className: "tablet-headings__container tablet-headings__container--category" }, { children: [(0, jsx_runtime_4.jsx)("p", Object.assign({ className: "tablet-headings__heading" }, { children: headings[1] })), (0, jsx_runtime_4.jsx)("img", { src: sort_24px_svg_1.default, alt: "Sort", className: 'tablet-headings__sort-icon' })] })), (0, jsx_runtime_4.jsxs)("div", Object.assign({ className: "tablet-headings__container tablet-headings__container--status" }, { children: [(0, jsx_runtime_4.jsx)("p", Object.assign({ className: "tablet-headings__heading" }, { children: headings[2] })), (0, jsx_runtime_4.jsx)("img", { src: sort_24px_svg_1.default, alt: "Sort", className: 'tablet-headings__sort-icon' })] })), (0, jsx_runtime_4.jsxs)("div", Object.assign({ className: "tablet-headings__container tablet-headings__container--qty" }, { children: [(0, jsx_runtime_4.jsx)("p", Object.assign({ className: "tablet-headings__heading" }, { children: headings[3] })), (0, jsx_runtime_4.jsx)("img", { src: sort_24px_svg_1.default, alt: "Sort", className: 'tablet-headings__sort-icon' })] })), (0, jsx_runtime_4.jsxs)("div", Object.assign({ className: "tablet-headings__container tablet-headings__container--warehouse-name" }, { children: [(0, jsx_runtime_4.jsx)("p", Object.assign({ className: "tablet-headings__heading" }, { children: headings[4] })), (0, jsx_runtime_4.jsx)("img", { src: sort_24px_svg_1.default, alt: "Sort", className: 'tablet-headings__sort-icon' })] })), (0, jsx_runtime_4.jsx)("div", Object.assign({ className: "tablet-headings__container tablet-headings__container--inventory-actions" }, { children: (0, jsx_runtime_4.jsx)("p", Object.assign({ className: "tablet-headings__heading" }, { children: "Actions" })) }))] })));
        }
        return ((0, jsx_runtime_4.jsxs)("div", Object.assign({ className: 'tablet-headings' }, { children: [(0, jsx_runtime_4.jsxs)("div", Object.assign({ className: `tablet-headings__container tablet-headings__container--warehouse ${specialClasses ? specialClasses[0] : ""}` }, { children: [(0, jsx_runtime_4.jsx)("p", Object.assign({ className: "tablet-headings__heading" }, { children: headings[0] })), (0, jsx_runtime_4.jsx)("img", { src: sort_24px_svg_1.default, alt: "Sort", className: 'tablet-headings__sort-icon' })] })), (0, jsx_runtime_4.jsxs)("div", Object.assign({ className: `tablet-headings__container tablet-headings__container--address ${specialClasses ? specialClasses[1] : ""}` }, { children: [(0, jsx_runtime_4.jsx)("p", Object.assign({ className: "tablet-headings__heading" }, { children: headings[1] })), (0, jsx_runtime_4.jsx)("img", { src: sort_24px_svg_1.default, alt: "Sort", className: 'tablet-headings__sort-icon' })] })), (0, jsx_runtime_4.jsxs)("div", Object.assign({ className: `tablet-headings__container tablet-headings__container--contact-name ${specialClasses ? specialClasses[2] : ""}` }, { children: [(0, jsx_runtime_4.jsx)("p", Object.assign({ className: "tablet-headings__heading" }, { children: headings[2] })), (0, jsx_runtime_4.jsx)("img", { src: sort_24px_svg_1.default, alt: "Sort", className: 'tablet-headings__sort-icon' })] })), (0, jsx_runtime_4.jsxs)("div", Object.assign({ className: `tablet-headings__container tablet-headings__container--contact-info ${specialClasses ? specialClasses[3] : ""}` }, { children: [(0, jsx_runtime_4.jsx)("p", Object.assign({ className: "tablet-headings__heading" }, { children: headings[3] })), (0, jsx_runtime_4.jsx)("img", { src: sort_24px_svg_1.default, alt: "Sort", className: 'tablet-headings__sort-icon' })] })), (0, jsx_runtime_4.jsx)("div", Object.assign({ className: `tablet-headings__container tablet-headings__container--actions ${specialClasses ? specialClasses[4] : ""}` }, { children: (0, jsx_runtime_4.jsx)("p", Object.assign({ className: "tablet-headings__heading" }, { children: "Actions" })) }))] })));
    }
    exports.default = TabletHeadings;
});
define("components/TabletHeadings/index", ["require", "exports", "components/TabletHeadings/TabletHeadings"], function (require, exports, TabletHeadings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    TabletHeadings_1 = __importDefault(TabletHeadings_1);
    exports.default = TabletHeadings_1.default;
});
define("components/Item/Item", ["require", "exports", "react/jsx-runtime", "../../assets/icons/chevron_right-24px.svg", "react-router-dom", "../../assets/icons/delete_outline-24px.svg", "../../assets/icons/edit-24px.svg", "./Item.scss"], function (require, exports, jsx_runtime_5, chevron_right_24px_svg_1, react_router_dom_2, delete_outline_24px_svg_1, edit_24px_svg_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    chevron_right_24px_svg_1 = __importDefault(chevron_right_24px_svg_1);
    delete_outline_24px_svg_1 = __importDefault(delete_outline_24px_svg_1);
    edit_24px_svg_1 = __importDefault(edit_24px_svg_1);
    function Item({ warehouse, item, setShow, setWarehouseInfo, setItemInfo }) {
        if (item) {
            const { id, warehouseName, itemName, category, status, quantity } = item;
            return ((0, jsx_runtime_5.jsxs)("li", Object.assign({ className: 'item' }, { children: [(0, jsx_runtime_5.jsxs)("div", Object.assign({ className: 'item__info-container item__info-container--inventory' }, { children: [(0, jsx_runtime_5.jsxs)("article", Object.assign({ className: 'item__info item__info--inventory item__info--item' }, { children: [(0, jsx_runtime_5.jsx)("h2", Object.assign({ className: 'item__heading' }, { children: "Inventory Item" })), (0, jsx_runtime_5.jsxs)(react_router_dom_2.Link, Object.assign({ to: `/inventory/${id}`, className: 'item__link' }, { children: [itemName, (0, jsx_runtime_5.jsx)("img", { src: chevron_right_24px_svg_1.default, alt: "Chevron", className: 'item__chevron' })] }))] })), (0, jsx_runtime_5.jsxs)("article", Object.assign({ className: 'item__info item__info--inventory item__info--category' }, { children: [(0, jsx_runtime_5.jsx)("h2", Object.assign({ className: 'item__heading' }, { children: "Category" })), (0, jsx_runtime_5.jsx)("p", Object.assign({ className: 'item__body' }, { children: category }))] })), (0, jsx_runtime_5.jsxs)("article", Object.assign({ className: 'item__info item__info--inventory item__info--status' }, { children: [(0, jsx_runtime_5.jsx)("h2", Object.assign({ className: 'item__heading' }, { children: "Status" })), (0, jsx_runtime_5.jsx)("p", Object.assign({ className: 'item__body' }, { children: status }))] })), (0, jsx_runtime_5.jsxs)("article", Object.assign({ className: 'item__info item__info--inventory item__info--qty' }, { children: [(0, jsx_runtime_5.jsx)("h2", Object.assign({ className: 'item__heading' }, { children: "Qty" })), (0, jsx_runtime_5.jsx)("p", Object.assign({ className: 'item__body' }, { children: quantity }))] })), (0, jsx_runtime_5.jsxs)("article", Object.assign({ className: 'item__info item__info--inventory item__info--warehouse-name' }, { children: [(0, jsx_runtime_5.jsx)("h2", Object.assign({ className: 'item__heading' }, { children: "Warehouse" })), (0, jsx_runtime_5.jsx)("p", Object.assign({ className: 'item__body' }, { children: warehouseName }))] }))] })), (0, jsx_runtime_5.jsxs)("div", Object.assign({ className: 'item__actions item__actions--inventory-special' }, { children: [(0, jsx_runtime_5.jsx)("img", { src: delete_outline_24px_svg_1.default, alt: "Delete", onClick: () => {
                                    setShow(true);
                                    setItemInfo({
                                        id: id,
                                        name: itemName
                                    });
                                }, className: "item__action--delete" }), (0, jsx_runtime_5.jsx)(react_router_dom_2.Link, Object.assign({ to: `/inventory/edit/${id}` }, { children: (0, jsx_runtime_5.jsx)("img", { src: edit_24px_svg_1.default, alt: "Edit", className: 'item__action' }) }))] }))] })));
        }
        const { id, name, address, city, country, contact } = warehouse;
        return ((0, jsx_runtime_5.jsxs)("li", Object.assign({ className: 'item' }, { children: [(0, jsx_runtime_5.jsxs)("div", Object.assign({ className: 'item__info-container' }, { children: [(0, jsx_runtime_5.jsxs)("article", Object.assign({ className: 'item__info item__info--warehouse' }, { children: [(0, jsx_runtime_5.jsx)("h2", Object.assign({ className: 'item__heading' }, { children: "Warehouse" })), (0, jsx_runtime_5.jsxs)(react_router_dom_2.Link, Object.assign({ to: `/warehouses/${id}`, className: 'item__link' }, { children: [name, (0, jsx_runtime_5.jsx)("img", { src: chevron_right_24px_svg_1.default, alt: "Chevron" })] }))] })), (0, jsx_runtime_5.jsxs)("article", Object.assign({ className: 'item__info item__info--address' }, { children: [(0, jsx_runtime_5.jsx)("h2", Object.assign({ className: 'item__heading' }, { children: "Address" })), (0, jsx_runtime_5.jsxs)("p", Object.assign({ className: 'item__body item__body--address' }, { children: [address, ", ", city, ", ", country] }))] })), (0, jsx_runtime_5.jsxs)("article", Object.assign({ className: 'item__info item__info--contact-name' }, { children: [(0, jsx_runtime_5.jsx)("h2", Object.assign({ className: 'item__heading' }, { children: "Contact Name" })), (0, jsx_runtime_5.jsx)("p", Object.assign({ className: 'item__body' }, { children: contact.name }))] })), (0, jsx_runtime_5.jsxs)("article", Object.assign({ className: 'item__info item__info--contact-info' }, { children: [(0, jsx_runtime_5.jsx)("h2", Object.assign({ className: 'item__heading' }, { children: "Contact Information" })), (0, jsx_runtime_5.jsx)("p", Object.assign({ className: 'item__body' }, { children: contact.phone })), (0, jsx_runtime_5.jsx)("p", Object.assign({ className: 'item__body' }, { children: contact.email }))] }))] })), (0, jsx_runtime_5.jsxs)("div", Object.assign({ className: 'item__actions item__actions--special' }, { children: [(0, jsx_runtime_5.jsx)("img", { src: delete_outline_24px_svg_1.default, alt: "Delete", onClick: () => {
                                setShow(true);
                                setWarehouseInfo({
                                    id: id,
                                    name: name
                                });
                            }, className: "item__action--delete" }), (0, jsx_runtime_5.jsx)(react_router_dom_2.Link, Object.assign({ to: `/warehouses/edit/${id}` }, { children: (0, jsx_runtime_5.jsx)("img", { src: edit_24px_svg_1.default, alt: "Edit", className: 'item__action' }) }))] }))] })));
    }
    exports.default = Item;
});
define("components/Item/index", ["require", "exports", "components/Item/Item"], function (require, exports, Item_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Item_1 = __importDefault(Item_1);
    exports.default = Item_1.default;
});
define("components/DetailItem/DetailItem", ["require", "exports", "react/jsx-runtime", "../../assets/icons/chevron_right-24px.svg", "react-router-dom", "../../assets/icons/delete_outline-24px.svg", "../../assets/icons/edit-24px.svg"], function (require, exports, jsx_runtime_6, chevron_right_24px_svg_2, react_router_dom_3, delete_outline_24px_svg_2, edit_24px_svg_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    chevron_right_24px_svg_2 = __importDefault(chevron_right_24px_svg_2);
    delete_outline_24px_svg_2 = __importDefault(delete_outline_24px_svg_2);
    edit_24px_svg_2 = __importDefault(edit_24px_svg_2);
    const DetailItem = ({ item, setShow, setWarehouseItemInfo }) => {
        const { id, itemName, category, status, quantity } = item;
        return ((0, jsx_runtime_6.jsxs)("li", Object.assign({ className: 'item' }, { children: [(0, jsx_runtime_6.jsxs)("div", Object.assign({ className: 'item__info-container item__info-container--inventory' }, { children: [(0, jsx_runtime_6.jsxs)("article", Object.assign({ className: "item__info item__info--inventory item__info--item item__info--item-special" }, { children: [(0, jsx_runtime_6.jsx)("h2", Object.assign({ className: 'item__heading' }, { children: "Inventory Item" })), (0, jsx_runtime_6.jsxs)(react_router_dom_3.Link, Object.assign({ to: `/inventory/${id}`, className: 'item__link' }, { children: [itemName, (0, jsx_runtime_6.jsx)("img", { src: chevron_right_24px_svg_2.default, alt: "Chevron", className: 'item__chevron' })] }))] })), (0, jsx_runtime_6.jsxs)("article", Object.assign({ className: "item__info item__info--inventory item__info--category item__info--category-special" }, { children: [(0, jsx_runtime_6.jsx)("h2", Object.assign({ className: 'item__heading' }, { children: "Category" })), (0, jsx_runtime_6.jsx)("p", Object.assign({ className: 'item__body' }, { children: category }))] })), (0, jsx_runtime_6.jsxs)("article", Object.assign({ className: "item__info item__info--inventory item__info--status item__info--status-special" }, { children: [(0, jsx_runtime_6.jsx)("h2", Object.assign({ className: 'item__heading' }, { children: "Status" })), (0, jsx_runtime_6.jsx)("p", Object.assign({ className: 'item__body' }, { children: status }))] })), (0, jsx_runtime_6.jsxs)("article", Object.assign({ className: "item__info item__info--inventory item__info--qty item__info--qty-special" }, { children: [(0, jsx_runtime_6.jsx)("h2", Object.assign({ className: 'item__heading' }, { children: "Qty" })), (0, jsx_runtime_6.jsx)("p", Object.assign({ className: 'item__body' }, { children: quantity }))] }))] })), (0, jsx_runtime_6.jsxs)("div", Object.assign({ className: 'item__actions item__actions--inventory-special item__actions--details-special' }, { children: [(0, jsx_runtime_6.jsx)("img", { src: delete_outline_24px_svg_2.default, alt: "Delete", onClick: () => {
                                setShow(true);
                                setWarehouseItemInfo({
                                    id: id,
                                    name: itemName
                                });
                            }, className: "item__action--delete" }), (0, jsx_runtime_6.jsx)(react_router_dom_3.Link, Object.assign({ to: `/inventory/edit/${id}` }, { children: (0, jsx_runtime_6.jsx)("img", { src: edit_24px_svg_2.default, alt: "Edit", className: 'item__action' }) }))] }))] })));
    };
    exports.default = DetailItem;
});
define("components/DetailItem/index", ["require", "exports", "components/DetailItem/DetailItem"], function (require, exports, DetailItem_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    DetailItem_1 = __importDefault(DetailItem_1);
    exports.default = DetailItem_1.default;
});
define("components/ItemList/ItemList", ["require", "exports", "react/jsx-runtime", "components/Item/index", "components/DetailItem/index"], function (require, exports, jsx_runtime_7, Item_2, DetailItem_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Item_2 = __importDefault(Item_2);
    DetailItem_2 = __importDefault(DetailItem_2);
    function ItemList({ warehouses, inventory, warehouseInventory, detail, setShow, setWarehouseInfo, setItemInfo, setWarehouseItemInfo }) {
        if (detail) {
            return ((0, jsx_runtime_7.jsx)("ul", Object.assign({ className: "item-list" }, { children: warehouseInventory.map((item) => {
                    return (0, jsx_runtime_7.jsx)(DetailItem_2.default, { item: item, setShow: setShow, setWarehouseItemInfo: setWarehouseItemInfo }, item.id);
                }) })));
        }
        return ((0, jsx_runtime_7.jsx)("ul", Object.assign({ className: 'item-list' }, { children: warehouses ? warehouses.map((warehouse) => {
                return (0, jsx_runtime_7.jsx)(Item_2.default, { warehouse: warehouse, setShow: setShow, setWarehouseInfo: setWarehouseInfo }, warehouse.id);
            }) : inventory.map((item) => {
                return (0, jsx_runtime_7.jsx)(Item_2.default, { item: item, setShow: setShow, setItemInfo: setItemInfo }, item.id);
            }) })));
    }
    exports.default = ItemList;
});
define("utils/apiFunctions", ["require", "exports", "axios"], function (require, exports, axios_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.deleteItemFromWarehouse = exports.deleteItem = exports.editItem = exports.postNewItem = exports.getInventoryForWarehouse = exports.getSingleItem = exports.getAllInventories = exports.deleteWarehouse = exports.editWarehouse = exports.postNewWarehouse = exports.getSingleWarehouse = exports.getAllWarehouses = void 0;
    axios_1 = __importDefault(axios_1);
    const apiURL = 'http://localhost:8080/';
    const getAllWarehouses = (stateFn) => {
        axios_1.default
            .get(`${apiURL}warehouses`)
            .then(res => {
            stateFn(res.data);
        })
            .catch(err => console.log(err));
    };
    exports.getAllWarehouses = getAllWarehouses;
    const getSingleWarehouse = (stateFn, stateFn2, id) => {
        axios_1.default
            .get(`${apiURL}warehouses/${id}`)
            .then(res => {
            stateFn(res.data);
            stateFn2(res.data.contact);
        })
            .catch(err => console.log(err));
    };
    exports.getSingleWarehouse = getSingleWarehouse;
    const postNewWarehouse = (warehouseObj) => {
        axios_1.default
            .post(`${apiURL}warehouses`, warehouseObj)
            .then(() => {
            alert('Warehouse posted successfully');
        })
            .catch(err => console.log('Something went wrong:' + err));
    };
    exports.postNewWarehouse = postNewWarehouse;
    const editWarehouse = (id, warehouseObj) => {
        axios_1.default
            .patch(`${apiURL}warehouses/edit/${id}`, warehouseObj)
            .then(() => {
            alert('Warehouse updated successfully');
        })
            .catch(err => console.log('Something went wrong:' + err));
    };
    exports.editWarehouse = editWarehouse;
    const deleteWarehouse = (id, stateFn) => {
        axios_1.default
            .delete(`${apiURL}warehouses/delete/${id}`)
            .then(() => {
            (0, exports.getAllWarehouses)(stateFn);
        })
            .catch(err => console.log('Something went wrong:' + err));
    };
    exports.deleteWarehouse = deleteWarehouse;
    const getAllInventories = (stateFn) => {
        axios_1.default
            .get(`${apiURL}inventory`)
            .then(res => {
            stateFn(res.data);
        })
            .catch(err => console.log(err));
    };
    exports.getAllInventories = getAllInventories;
    const getSingleItem = (id, stateFn) => {
        axios_1.default
            .get(`${apiURL}inventory/${id}`)
            .then(res => {
            stateFn(res.data);
        })
            .catch(err => console.log(err));
    };
    exports.getSingleItem = getSingleItem;
    const getInventoryForWarehouse = (id, stateFn) => {
        axios_1.default
            .get(`${apiURL}inventory/warehouse/${id}`)
            .then(res => {
            stateFn(res.data);
        })
            .catch(err => console.log(err));
    };
    exports.getInventoryForWarehouse = getInventoryForWarehouse;
    const postNewItem = (itemObj) => {
        axios_1.default
            .post(`${apiURL}inventory`, itemObj)
            .then(() => {
            alert('Item posted successfully');
        })
            .catch(err => console.log('Something went wrong:' + err));
    };
    exports.postNewItem = postNewItem;
    const editItem = (id, itemObj) => {
        axios_1.default
            .patch(`${apiURL}warehouses/edit/${id}`, itemObj)
            .then(() => {
            alert('Warehouse updated successfully');
        })
            .catch(err => console.log('Something went wrong:' + err));
    };
    exports.editItem = editItem;
    const deleteItem = (id, stateFn) => {
        axios_1.default
            .delete(`${apiURL}inventory/delete/${id}`)
            .then(() => {
            (0, exports.getAllInventories)(stateFn);
        })
            .catch(err => console.log('Something went wrong:' + err));
    };
    exports.deleteItem = deleteItem;
    const deleteItemFromWarehouse = (itemId, warehouseId, stateFn) => {
        axios_1.default
            .delete(`${apiURL}inventory/delete/${itemId}`)
            .then(() => {
            (0, exports.getInventoryForWarehouse)(warehouseId, stateFn);
        })
            .catch(err => console.log('Something went wrong:' + err));
    };
    exports.deleteItemFromWarehouse = deleteItemFromWarehouse;
});
define("components/DeleteModal/DeleteModal", ["require", "exports", "react/jsx-runtime", "components/Button/index", "../../assets/icons/close-24px.svg", "./DeleteModal.scss"], function (require, exports, jsx_runtime_8, Button_2, close_24px_svg_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Button_2 = __importDefault(Button_2);
    close_24px_svg_1 = __importDefault(close_24px_svg_1);
    const DeleteModal = ({ show, handleClose, warehouseInfo, warehouseItemInfo, itemInfo, handleDeleteWarehouse, handleDeleteItem, handleDeleteItemFromWarehouse }) => {
        if (!show) {
            document.body.style.overflow = "unset";
            return null;
        }
        if (show) {
            document.body.style.overflow = "hidden";
        }
        const renderButton = () => {
            if (handleDeleteWarehouse) {
                return (0, jsx_runtime_8.jsx)(Button_2.default, { text: "Delete", handleDeleteWarehouse: handleDeleteWarehouse, warehouseInfo: warehouseInfo });
            }
            if (handleDeleteItem) {
                return (0, jsx_runtime_8.jsx)(Button_2.default, { text: "Delete", handleDeleteItem: handleDeleteItem, itemInfo: itemInfo });
            }
            return (0, jsx_runtime_8.jsx)(Button_2.default, { text: "Delete", handleDeleteItemFromWarehouse: handleDeleteItemFromWarehouse, warehouseItemInfo: warehouseItemInfo });
        };
        return ((0, jsx_runtime_8.jsx)("div", Object.assign({ className: "delete-modal", onClick: handleClose }, { children: (0, jsx_runtime_8.jsx)("div", Object.assign({ className: "delete-modal__container" }, { children: (0, jsx_runtime_8.jsxs)("div", Object.assign({ className: "delete-modal__content", onClick: (e) => e.stopPropagation() }, { children: [(0, jsx_runtime_8.jsx)("div", Object.assign({ className: "delete-modal__image-container" }, { children: (0, jsx_runtime_8.jsx)("img", { src: close_24px_svg_1.default, alt: "Close", onClick: handleClose, className: "delete-modal__image" }) })), (0, jsx_runtime_8.jsxs)("div", Object.assign({ className: "delete-modal__content-container" }, { children: [(0, jsx_runtime_8.jsx)("div", Object.assign({ className: "delete-modal__heading" }, { children: (0, jsx_runtime_8.jsxs)("h3", Object.assign({ className: 'delete-modal__title' }, { children: ["Delete ", warehouseInfo ? warehouseInfo.name : itemInfo ? itemInfo.name : warehouseItemInfo ? warehouseItemInfo.name : null, " ", warehouseInfo ? "warehouse?" : itemInfo ? "inventory item?" : warehouseItemInfo ? "inventory item?" : null] })) })), (0, jsx_runtime_8.jsxs)("div", Object.assign({ className: "delete-modal__space-out" }, { children: [(0, jsx_runtime_8.jsx)("div", Object.assign({ className: "delete-modal__message" }, { children: (0, jsx_runtime_8.jsxs)("p", Object.assign({ className: "delete-modal__paragraph" }, { children: ["Please confirm that you'd like to delete the ", warehouseInfo ? warehouseInfo.name : itemInfo ? itemInfo.name : warehouseItemInfo ? warehouseItemInfo.name : null, " from the ", warehouseInfo ? "list of warehouses." : itemInfo ? "inventory list." : warehouseItemInfo ? "inventory list." : null, " You won't be able to undo this action."] })) })), (0, jsx_runtime_8.jsxs)("div", Object.assign({ className: "delete-modal__buttons" }, { children: [(0, jsx_runtime_8.jsx)(Button_2.default, { text: "Cancel", handleClose: handleClose }), renderButton()] }))] }))] }))] })) })) })));
    };
    exports.default = DeleteModal;
});
define("components/DeleteModal/index", ["require", "exports", "components/DeleteModal/DeleteModal"], function (require, exports, DeleteModal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    DeleteModal_1 = __importDefault(DeleteModal_1);
    exports.default = DeleteModal_1.default;
});
define("pages/WarehouseList/WarehouseList", ["require", "exports", "react/jsx-runtime", "components/Button/index", "../../assets/icons/add_white_24dp.svg", "components/TabletHeadings/index", "components/ItemList/ItemList", "react-router-dom", "react", "utils/apiFunctions", "components/DeleteModal/index", "./WarehouseList.scss"], function (require, exports, jsx_runtime_9, Button_3, add_white_24dp_svg_1, TabletHeadings_2, ItemList_1, react_router_dom_4, react_1, apiFunctions_1, DeleteModal_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Button_3 = __importDefault(Button_3);
    add_white_24dp_svg_1 = __importDefault(add_white_24dp_svg_1);
    TabletHeadings_2 = __importDefault(TabletHeadings_2);
    ItemList_1 = __importDefault(ItemList_1);
    DeleteModal_2 = __importDefault(DeleteModal_2);
    function WarehouseList() {
        const [warehouses, setWarehouses] = (0, react_1.useState)([]);
        const [show, setShow] = (0, react_1.useState)(false);
        const [warehouseInfo, setWarehouseInfo] = (0, react_1.useState)({
            id: "",
            name: ""
        });
        (0, react_1.useEffect)(() => {
            (0, apiFunctions_1.getAllWarehouses)(setWarehouses);
        }, []);
        const handleClose = () => {
            setShow(false);
        };
        const handleDeleteWarehouse = (id) => {
            (0, apiFunctions_1.deleteWarehouse)(id, setWarehouses);
            setShow(false);
        };
        return ((0, jsx_runtime_9.jsx)("main", Object.assign({ className: 'main' }, { children: (0, jsx_runtime_9.jsxs)("div", Object.assign({ className: 'main__wrapper' }, { children: [(0, jsx_runtime_9.jsx)("div", Object.assign({ className: "card" }, { children: (0, jsx_runtime_9.jsxs)("section", Object.assign({ className: 'warehouse-list' }, { children: [(0, jsx_runtime_9.jsxs)("div", Object.assign({ className: 'warehouse-list__container' }, { children: [(0, jsx_runtime_9.jsx)("div", Object.assign({ className: 'warehouse-list__header-container' }, { children: (0, jsx_runtime_9.jsx)("h1", Object.assign({ className: 'warehouse-list__title' }, { children: "Warehouses" })) })), (0, jsx_runtime_9.jsxs)("div", Object.assign({ className: 'warehouse-list__form-container' }, { children: [(0, jsx_runtime_9.jsx)("form", Object.assign({ className: 'warehouse-list__form' }, { children: (0, jsx_runtime_9.jsx)("input", { type: "text", placeholder: "Search...", className: 'warehouse-list__input' }) })), (0, jsx_runtime_9.jsx)(react_router_dom_4.Link, Object.assign({ to: '/warehouses/add', className: 'warehouse-list__link' }, { children: (0, jsx_runtime_9.jsx)(Button_3.default, { text: 'Add New Warehouse', image: add_white_24dp_svg_1.default }) }))] }))] })), (0, jsx_runtime_9.jsx)(TabletHeadings_2.default, { headings: ['Warehouse', 'Address', 'Contact Name', 'Contact Information'] }), (0, jsx_runtime_9.jsx)(ItemList_1.default, { warehouses: warehouses, setShow: setShow, setWarehouseInfo: setWarehouseInfo })] })) })), (0, jsx_runtime_9.jsx)(DeleteModal_2.default, { show: show, handleClose: handleClose, warehouseInfo: warehouseInfo, handleDeleteWarehouse: handleDeleteWarehouse })] })) })));
    }
    exports.default = WarehouseList;
});
define("pages/WarehouseList/index", ["require", "exports", "pages/WarehouseList/WarehouseList"], function (require, exports, WarehouseList_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    WarehouseList_1 = __importDefault(WarehouseList_1);
    exports.default = WarehouseList_1.default;
});
define("components/ItemList/index", ["require", "exports", "components/ItemList/ItemList"], function (require, exports, ItemList_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ItemList_2 = __importDefault(ItemList_2);
    exports.default = ItemList_2.default;
});
define("pages/WarehouseDetails/WarehouseDetails", ["require", "exports", "react/jsx-runtime", "../../assets/icons/arrow_back-24px.svg", "../../assets/icons/edit_white-24px.svg", "react-router-dom", "react", "components/Button/index", "components/TabletHeadings/index", "components/ItemList/index", "utils/apiFunctions", "components/DeleteModal/index", "./WarehouseDetails.scss"], function (require, exports, jsx_runtime_10, arrow_back_24px_svg_1, edit_white_24px_svg_1, react_router_dom_5, react_2, Button_4, TabletHeadings_3, ItemList_3, apiFunctions_2, DeleteModal_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    arrow_back_24px_svg_1 = __importDefault(arrow_back_24px_svg_1);
    edit_white_24px_svg_1 = __importDefault(edit_white_24px_svg_1);
    Button_4 = __importDefault(Button_4);
    TabletHeadings_3 = __importDefault(TabletHeadings_3);
    ItemList_3 = __importDefault(ItemList_3);
    DeleteModal_3 = __importDefault(DeleteModal_3);
    const WarehouseDetails = () => {
        const { warehouseId } = (0, react_router_dom_5.useParams)();
        const [warehouse, setWarehouse] = (0, react_2.useState)({});
        const [contact, setContact] = (0, react_2.useState)({});
        const [warehouseInventory, setWarehouseInventory] = (0, react_2.useState)([]);
        const [show, setShow] = (0, react_2.useState)(false);
        const [warehouseItemInfo, setWarehouseItemInfo] = (0, react_2.useState)({
            id: "",
            name: ""
        });
        (0, react_2.useEffect)(() => {
            (0, apiFunctions_2.getSingleWarehouse)(setWarehouse, setContact, warehouseId);
            (0, apiFunctions_2.getInventoryForWarehouse)(warehouseId, setWarehouseInventory);
        }, [warehouseId]);
        const handleClose = () => {
            setShow(false);
        };
        const handleDeleteItemFromWarehouse = (id) => {
            (0, apiFunctions_2.deleteItemFromWarehouse)(id, warehouseId, setWarehouseInventory);
            setShow(false);
        };
        const { id, name, address, city, country } = warehouse;
        const { name: contactName, position, phone, email } = contact;
        return ((0, jsx_runtime_10.jsx)("main", Object.assign({ className: "main" }, { children: (0, jsx_runtime_10.jsxs)("div", Object.assign({ className: "main__wrapper" }, { children: [(0, jsx_runtime_10.jsx)("div", Object.assign({ className: "card" }, { children: (0, jsx_runtime_10.jsxs)("section", Object.assign({ className: "warehouse-details" }, { children: [(0, jsx_runtime_10.jsxs)("div", Object.assign({ className: "warehouse-details__header-container" }, { children: [(0, jsx_runtime_10.jsxs)("div", Object.assign({ className: "warehouse-details__header" }, { children: [(0, jsx_runtime_10.jsx)(react_router_dom_5.Link, Object.assign({ to: '/warehouses' }, { children: (0, jsx_runtime_10.jsx)("img", { src: arrow_back_24px_svg_1.default, alt: "Go Back" }) })), (0, jsx_runtime_10.jsx)("h1", Object.assign({ className: "warehouse-details__title" }, { children: name }))] })), (0, jsx_runtime_10.jsx)("div", Object.assign({ className: "warehouse-details__button-container" }, { children: (0, jsx_runtime_10.jsx)(react_router_dom_5.Link, Object.assign({ to: `/warehouses/edit/${id}` }, { children: (0, jsx_runtime_10.jsx)(Button_4.default, { image: edit_white_24px_svg_1.default, text: "Edit", specialButton: "button--special", specialClass: "button__text--special" }) })) }))] })), (0, jsx_runtime_10.jsxs)("div", Object.assign({ className: 'warehouse-details__container' }, { children: [(0, jsx_runtime_10.jsx)("div", Object.assign({ className: 'warehouse-details__details-container' }, { children: (0, jsx_runtime_10.jsxs)("article", Object.assign({ className: 'warehouse-details__details' }, { children: [(0, jsx_runtime_10.jsx)("h2", Object.assign({ className: 'warehouse-details__subtitle' }, { children: "Warehouse Address:" })), (0, jsx_runtime_10.jsxs)("p", Object.assign({ className: 'warehouse-details__info warehouse-details__info--address' }, { children: [address, ", ", city, ", ", country] }))] })) })), (0, jsx_runtime_10.jsxs)("div", Object.assign({ className: 'warehouse-details__details-container' }, { children: [(0, jsx_runtime_10.jsxs)("article", Object.assign({ className: 'warehouse-details__details' }, { children: [(0, jsx_runtime_10.jsx)("h2", Object.assign({ className: 'warehouse-details__subtitle' }, { children: "Contact Name:" })), (0, jsx_runtime_10.jsx)("p", Object.assign({ className: "warehouse-details__info" }, { children: contactName })), (0, jsx_runtime_10.jsx)("p", Object.assign({ className: "warehouse-details__info" }, { children: position }))] })), (0, jsx_runtime_10.jsxs)("article", Object.assign({ className: 'warehouse-details__details' }, { children: [(0, jsx_runtime_10.jsx)("h2", Object.assign({ className: 'warehouse-details__subtitle' }, { children: "Contact Information:" })), (0, jsx_runtime_10.jsx)("p", Object.assign({ className: 'warehouse-details__info' }, { children: phone })), (0, jsx_runtime_10.jsx)("p", Object.assign({ className: 'warehouse-details__info' }, { children: email }))] }))] }))] })), (0, jsx_runtime_10.jsx)(TabletHeadings_3.default, { headings: ["Inventory Item", "Category", "Status", "Quantity"], specialClasses: ["tablet-headings__container--details-item", "tablet-headings__container--details-category", "tablet-headings__container--details-status", "tablet-headings__container--details-qty", "tablet-headings__container--details-actions"] }), (0, jsx_runtime_10.jsx)(ItemList_3.default, { warehouseInventory: warehouseInventory, setShow: setShow, setWarehouseItemInfo: setWarehouseItemInfo, detail: true })] })) })), (0, jsx_runtime_10.jsx)(DeleteModal_3.default, { show: show, handleClose: handleClose, warehouseItemInfo: warehouseItemInfo, handleDeleteItemFromWarehouse: handleDeleteItemFromWarehouse })] })) })));
    };
    exports.default = WarehouseDetails;
});
define("pages/WarehouseDetails/index", ["require", "exports", "pages/WarehouseDetails/WarehouseDetails"], function (require, exports, WarehouseDetails_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    WarehouseDetails_1 = __importDefault(WarehouseDetails_1);
    exports.default = WarehouseDetails_1.default;
});
define("components/ErrorMessage/ErrorMessage", ["require", "exports", "react/jsx-runtime", "../../assets/icons/error-24px.svg", "./ErrorMessage.scss"], function (require, exports, jsx_runtime_11, error_24px_svg_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    error_24px_svg_1 = __importDefault(error_24px_svg_1);
    const ErrorMessage = () => {
        return ((0, jsx_runtime_11.jsxs)("div", Object.assign({ className: 'error-message' }, { children: [(0, jsx_runtime_11.jsx)("img", { src: error_24px_svg_1.default, alt: "Error", className: 'error-message__image' }), (0, jsx_runtime_11.jsx)("p", Object.assign({ className: "error-message__text" }, { children: "This field is required" }))] })));
    };
    exports.default = ErrorMessage;
});
define("components/ErrorMessage/index", ["require", "exports", "components/ErrorMessage/ErrorMessage"], function (require, exports, ErrorMessage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ErrorMessage_1 = __importDefault(ErrorMessage_1);
    exports.default = ErrorMessage_1.default;
});
define("components/WarehouseForm/WarehouseForm", ["require", "exports", "react/jsx-runtime", "components/Button/index", "../../assets/icons/add_white_24dp.svg", "react-router-dom", "utils/apiFunctions", "react", "components/ErrorMessage/index", "./WarehouseForm.scss"], function (require, exports, jsx_runtime_12, Button_5, add_white_24dp_svg_2, react_router_dom_6, apiFunctions_3, react_3, ErrorMessage_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Button_5 = __importDefault(Button_5);
    add_white_24dp_svg_2 = __importDefault(add_white_24dp_svg_2);
    ErrorMessage_2 = __importDefault(ErrorMessage_2);
    const WarehouseForm = (props) => {
        const { warehouse, contact } = props;
        const { warehouseId } = (0, react_router_dom_6.useParams)();
        const navigate = (0, react_router_dom_6.useNavigate)();
        const [warehouseName, setWarehouseName] = (0, react_3.useState)("");
        const [warehouseAddress, setWarehouseAddress] = (0, react_3.useState)("");
        const [warehouseCity, setWarehouseCity] = (0, react_3.useState)("");
        const [warehouseCountry, setWarehouseCountry] = (0, react_3.useState)("");
        const [contactPerson, setContactPerson] = (0, react_3.useState)("");
        const [contactPosition, setContactPosition] = (0, react_3.useState)("");
        const [contactPhone, setContactPhone] = (0, react_3.useState)("");
        const [contactEmail, setContactEmail] = (0, react_3.useState)("");
        const [nameRequired, setNameRequired] = (0, react_3.useState)(false);
        const [addressRequired, setAddressRequired] = (0, react_3.useState)(false);
        const [cityRequired, setCityRequired] = (0, react_3.useState)(false);
        const [countryRequired, setCountryRequired] = (0, react_3.useState)(false);
        const [contactNameRequired, setContactNameRequired] = (0, react_3.useState)(false);
        const [positionRequired, setPositionRequired] = (0, react_3.useState)(false);
        const [phoneRequired, setPhoneRequired] = (0, react_3.useState)(false);
        const [emailRequired, setEmailRequired] = (0, react_3.useState)(false);
        const handleOnChange = (e) => {
            const { name: inputName, value } = e.target;
            switch (inputName) {
                case "warehouseName":
                    setWarehouseName(value);
                    setNameRequired(false);
                    break;
                case "address":
                    setWarehouseAddress(value);
                    setAddressRequired(false);
                    break;
                case "city":
                    setWarehouseCity(value);
                    setCityRequired(false);
                    break;
                case "country":
                    setWarehouseCountry(value);
                    setCountryRequired(false);
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
                    setEmailRequired(false);
                    break;
                default:
                    return;
            }
        };
        const handleEdit = (e, id) => {
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
            (0, apiFunctions_3.editWarehouse)(id, updatedWarehouse);
            setTimeout(() => {
                navigate('/');
            }, 3000);
        };
        const handleAdd = (e) => {
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
                setContactNameRequired(true);
            }
            if (!contactPosition) {
                setPositionRequired(true);
            }
            if (!contactPhone) {
                setPhoneRequired(true);
            }
            if (!contactEmail) {
                setEmailRequired(true);
            }
            if (!warehouseName ||
                !warehouseAddress ||
                !warehouseCity ||
                !warehouseCountry ||
                !contactPerson ||
                !contactPosition ||
                !contactPhone ||
                !contactEmail) {
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
            (0, apiFunctions_3.postNewWarehouse)(newWarehouse);
            setTimeout(() => {
                navigate('/');
            }, 3000);
        };
        (0, react_3.useEffect)(() => {
            if (warehouseId) {
                setWarehouseName(warehouse.name);
                setWarehouseAddress(warehouse.address);
                setWarehouseCity(warehouse.city);
                setWarehouseCountry(warehouse.country);
                setContactPerson(contact.name);
                setContactPosition(contact.position);
                setContactPhone(contact.phone);
                setContactEmail(contact.email);
            }
        }, [warehouseId, contact, warehouse]);
        return ((0, jsx_runtime_12.jsxs)("form", Object.assign({ className: "warehouse-form", onSubmit: warehouseId ? (e) => handleEdit(e, warehouseId) : (e) => handleAdd(e) }, { children: [(0, jsx_runtime_12.jsxs)("div", Object.assign({ className: "warehouse-form__wrapper" }, { children: [(0, jsx_runtime_12.jsxs)("div", Object.assign({ className: "warehouse-form__container" }, { children: [(0, jsx_runtime_12.jsx)("h2", Object.assign({ className: "warehouse-form__sub-header" }, { children: "Warehouse Details" })), (0, jsx_runtime_12.jsxs)("div", Object.assign({ className: "warehouse-form__form-group" }, { children: [(0, jsx_runtime_12.jsx)("label", Object.assign({ htmlFor: "warehouseName", className: "warehouse-form__label" }, { children: "Warehouse Name" })), (0, jsx_runtime_12.jsx)("input", { type: "text", id: "warehouseName", name: "warehouseName", value: warehouseName, onChange: handleOnChange, className: `warehouse-form__input ${nameRequired ? "warehouse-form__input--error" : ""}`, placeholder: "Warehouse Name" }), nameRequired && (0, jsx_runtime_12.jsx)(ErrorMessage_2.default, {})] })), (0, jsx_runtime_12.jsxs)("div", Object.assign({ className: "warehouse-form__form-group" }, { children: [(0, jsx_runtime_12.jsx)("label", Object.assign({ htmlFor: "address", className: "warehouse-form__label" }, { children: "Street Address" })), (0, jsx_runtime_12.jsx)("input", { type: "text", className: `warehouse-form__input ${addressRequired ? "warehouse-form__input--error" : ""}`, id: "address", name: "address", value: warehouseAddress, onChange: handleOnChange, placeholder: "Address" }), addressRequired && (0, jsx_runtime_12.jsx)(ErrorMessage_2.default, {})] })), (0, jsx_runtime_12.jsxs)("div", Object.assign({ className: "warehouse-form__form-group" }, { children: [(0, jsx_runtime_12.jsx)("label", Object.assign({ htmlFor: "city", className: "warehouse-form__label" }, { children: "City" })), (0, jsx_runtime_12.jsx)("input", { type: "text", className: `warehouse-form__input ${cityRequired ? "warehouse-form__input--error" : ""}`, id: "city", name: "city", value: warehouseCity, onChange: handleOnChange, placeholder: "City" }), cityRequired && (0, jsx_runtime_12.jsx)(ErrorMessage_2.default, {})] })), (0, jsx_runtime_12.jsxs)("div", Object.assign({ className: "warehouse-form__form-group" }, { children: [(0, jsx_runtime_12.jsx)("label", Object.assign({ htmlFor: "country", className: "warehouse-form__label" }, { children: "Country" })), (0, jsx_runtime_12.jsx)("input", { type: "text", className: `warehouse-form__input ${countryRequired ? "warehouse-form__input--error" : ""}`, id: "country", name: "country", value: warehouseCountry, onChange: handleOnChange, placeholder: "Country" }), countryRequired && (0, jsx_runtime_12.jsx)(ErrorMessage_2.default, {})] }))] })), (0, jsx_runtime_12.jsxs)("div", Object.assign({ className: "warehouse-form__container" }, { children: [(0, jsx_runtime_12.jsx)("h2", Object.assign({ className: "warehouse-form__sub-header" }, { children: "Contact Details" })), (0, jsx_runtime_12.jsxs)("div", Object.assign({ className: "warehouse-form__form-group" }, { children: [(0, jsx_runtime_12.jsx)("label", Object.assign({ htmlFor: "contactName", className: "warehouse-form__label" }, { children: "Contact Name" })), (0, jsx_runtime_12.jsx)("input", { type: "text", className: `warehouse-form__input ${contactNameRequired ? "warehouse-form__input--error" : ""}`, id: "contactName", name: "contactName", value: contactPerson, onChange: handleOnChange, placeholder: "Contact Name" }), contactNameRequired && (0, jsx_runtime_12.jsx)(ErrorMessage_2.default, {})] })), (0, jsx_runtime_12.jsxs)("div", Object.assign({ className: "warehouse-form__form-group" }, { children: [(0, jsx_runtime_12.jsx)("label", Object.assign({ htmlFor: "position", className: "warehouse-form__label" }, { children: "Position" })), (0, jsx_runtime_12.jsx)("input", { type: "text", className: `warehouse-form__input ${positionRequired ? "warehouse-form__input--error" : ""}`, id: "position", name: "position", value: contactPosition, onChange: handleOnChange, placeholder: "Position" }), positionRequired && (0, jsx_runtime_12.jsx)(ErrorMessage_2.default, {})] })), (0, jsx_runtime_12.jsxs)("div", Object.assign({ className: "warehouse-form__form-group" }, { children: [(0, jsx_runtime_12.jsx)("label", Object.assign({ htmlFor: "phone", className: "warehouse-form__label" }, { children: "Phone Number" })), (0, jsx_runtime_12.jsx)("input", { type: "text", className: `warehouse-form__input ${phoneRequired ? "warehouse-form__input--error" : ""}`, id: "phone", name: "phone", value: contactPhone, onChange: handleOnChange, placeholder: "Phone Number" }), phoneRequired && (0, jsx_runtime_12.jsx)(ErrorMessage_2.default, {})] })), (0, jsx_runtime_12.jsxs)("div", Object.assign({ className: "warehouse-form__form-group" }, { children: [(0, jsx_runtime_12.jsx)("label", Object.assign({ htmlFor: "email", className: "warehouse-form__label" }, { children: "Email" })), (0, jsx_runtime_12.jsx)("input", { type: "text", className: `warehouse-form__input ${emailRequired ? "warehouse-form__input--error" : ""}`, id: "email", name: "email", value: contactEmail, onChange: handleOnChange, placeholder: "Email" }), emailRequired && (0, jsx_runtime_12.jsx)(ErrorMessage_2.default, {})] }))] }))] })), (0, jsx_runtime_12.jsxs)("div", Object.assign({ className: "warehouse-form__buttons" }, { children: [(0, jsx_runtime_12.jsx)(react_router_dom_6.Link, Object.assign({ to: '/', className: "warehouse-form__link" }, { children: (0, jsx_runtime_12.jsx)(Button_5.default, { text: "Cancel" }) })), (0, jsx_runtime_12.jsx)(Button_5.default, { text: "Add Warehouse", image: add_white_24dp_svg_2.default, altText: "Add" })] }))] })));
    };
    exports.default = WarehouseForm;
});
define("pages/AddWarehouse/AddWarehouse", ["require", "exports", "react/jsx-runtime", "react-router-dom", "../../assets/icons/arrow_back-24px.svg", "components/WarehouseForm/WarehouseForm", "./AddWarehouse.scss"], function (require, exports, jsx_runtime_13, react_router_dom_7, arrow_back_24px_svg_2, WarehouseForm_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    arrow_back_24px_svg_2 = __importDefault(arrow_back_24px_svg_2);
    WarehouseForm_1 = __importDefault(WarehouseForm_1);
    const AddWarehouse = () => {
        return ((0, jsx_runtime_13.jsx)("main", Object.assign({ className: "main" }, { children: (0, jsx_runtime_13.jsx)("div", Object.assign({ className: "main__wrapper" }, { children: (0, jsx_runtime_13.jsx)("div", Object.assign({ className: "card" }, { children: (0, jsx_runtime_13.jsxs)("section", Object.assign({ className: "add-warehouse" }, { children: [(0, jsx_runtime_13.jsxs)("div", Object.assign({ className: "add-warehouse__header-container" }, { children: [(0, jsx_runtime_13.jsx)(react_router_dom_7.Link, Object.assign({ to: '/' }, { children: (0, jsx_runtime_13.jsx)("img", { src: arrow_back_24px_svg_2.default, alt: "Go Back" }) })), (0, jsx_runtime_13.jsx)("h1", Object.assign({ className: "add-warehouse__title" }, { children: "Add New Warehouse" }))] })), (0, jsx_runtime_13.jsx)(WarehouseForm_1.default, {})] })) })) })) })));
    };
    exports.default = AddWarehouse;
});
define("pages/AddWarehouse/index", ["require", "exports", "pages/AddWarehouse/AddWarehouse"], function (require, exports, AddWarehouse_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    AddWarehouse_1 = __importDefault(AddWarehouse_1);
    exports.default = AddWarehouse_1.default;
});
define("pages/EditWarehouse/EditWarehouse", ["require", "exports", "react/jsx-runtime", "react-router-dom", "../../assets/icons/arrow_back-24px.svg", "components/WarehouseForm/WarehouseForm", "react", "utils/apiFunctions", "./EditWarehouse.scss"], function (require, exports, jsx_runtime_14, react_router_dom_8, arrow_back_24px_svg_3, WarehouseForm_2, react_4, apiFunctions_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    arrow_back_24px_svg_3 = __importDefault(arrow_back_24px_svg_3);
    WarehouseForm_2 = __importDefault(WarehouseForm_2);
    const EditWarehouse = () => {
        const { warehouseId } = (0, react_router_dom_8.useParams)();
        const [warehouse, setWarehouse] = (0, react_4.useState)({});
        const [contact, setContact] = (0, react_4.useState)({});
        (0, react_4.useEffect)(() => {
            (0, apiFunctions_4.getSingleWarehouse)(setWarehouse, setContact, warehouseId);
        }, [warehouseId]);
        return ((0, jsx_runtime_14.jsx)("main", Object.assign({ className: "main" }, { children: (0, jsx_runtime_14.jsx)("div", Object.assign({ className: "main__wrapper" }, { children: (0, jsx_runtime_14.jsx)("div", Object.assign({ className: "card" }, { children: (0, jsx_runtime_14.jsxs)("section", Object.assign({ className: "edit-warehouse" }, { children: [(0, jsx_runtime_14.jsxs)("div", Object.assign({ className: "edit-warehouse__header-container" }, { children: [(0, jsx_runtime_14.jsx)(react_router_dom_8.Link, Object.assign({ to: '/' }, { children: (0, jsx_runtime_14.jsx)("img", { src: arrow_back_24px_svg_3.default, alt: "Go Back" }) })), (0, jsx_runtime_14.jsx)("h1", Object.assign({ className: "edit-warehouse__title" }, { children: "Edit Warehouse" }))] })), (0, jsx_runtime_14.jsx)(WarehouseForm_2.default, { warehouse: warehouse, contact: contact })] })) })) })) })));
    };
    exports.default = EditWarehouse;
});
define("pages/EditWarehouse/index", ["require", "exports", "pages/EditWarehouse/EditWarehouse"], function (require, exports, EditWarehouse_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    EditWarehouse_1 = __importDefault(EditWarehouse_1);
    exports.default = EditWarehouse_1.default;
});
define("pages/InventoryList/InventoryList", ["require", "exports", "react/jsx-runtime", "components/Button/index", "../../assets/icons/add_white_24dp.svg", "components/TabletHeadings/index", "components/ItemList/index", "react-router-dom", "react", "utils/apiFunctions", "components/DeleteModal/index", "./InventoryList.scss"], function (require, exports, jsx_runtime_15, Button_6, add_white_24dp_svg_3, TabletHeadings_4, ItemList_4, react_router_dom_9, react_5, apiFunctions_5, DeleteModal_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Button_6 = __importDefault(Button_6);
    add_white_24dp_svg_3 = __importDefault(add_white_24dp_svg_3);
    TabletHeadings_4 = __importDefault(TabletHeadings_4);
    ItemList_4 = __importDefault(ItemList_4);
    DeleteModal_4 = __importDefault(DeleteModal_4);
    function InventoryList() {
        const [inventory, setInventory] = (0, react_5.useState)([]);
        const [show, setShow] = (0, react_5.useState)(false);
        const [itemInfo, setItemInfo] = (0, react_5.useState)({
            id: "",
            name: ""
        });
        (0, react_5.useEffect)(() => {
            (0, apiFunctions_5.getAllInventories)(setInventory);
        }, []);
        const handleClose = () => {
            setShow(false);
        };
        const handleDeleteItem = (id) => {
            (0, apiFunctions_5.deleteItem)(id, setInventory);
            setShow(false);
        };
        return ((0, jsx_runtime_15.jsx)("main", Object.assign({ className: "main" }, { children: (0, jsx_runtime_15.jsxs)("div", Object.assign({ className: "main__wrapper" }, { children: [(0, jsx_runtime_15.jsx)("div", Object.assign({ className: "card" }, { children: (0, jsx_runtime_15.jsxs)("section", Object.assign({ className: 'inventory-list' }, { children: [(0, jsx_runtime_15.jsxs)("div", Object.assign({ className: 'inventory-list__container' }, { children: [(0, jsx_runtime_15.jsx)("div", Object.assign({ className: 'inventory-list__header-container' }, { children: (0, jsx_runtime_15.jsx)("h1", Object.assign({ className: 'inventory-list__title' }, { children: "Inventory" })) })), (0, jsx_runtime_15.jsxs)("div", Object.assign({ className: 'inventory-list__form-container' }, { children: [(0, jsx_runtime_15.jsx)("form", Object.assign({ className: 'inventory-list__form' }, { children: (0, jsx_runtime_15.jsx)("input", { type: "text", placeholder: "Search...", className: 'inventory-list__input' }) })), (0, jsx_runtime_15.jsx)(react_router_dom_9.Link, Object.assign({ to: '/inventory/add', className: 'inventory-list__link' }, { children: (0, jsx_runtime_15.jsx)(Button_6.default, { text: 'Add New Item', image: add_white_24dp_svg_3.default }) }))] }))] })), (0, jsx_runtime_15.jsx)(TabletHeadings_4.default, { headings: ['Inventory Item', 'Category', 'Status', 'Qty', 'Warehouse'] }), (0, jsx_runtime_15.jsx)(ItemList_4.default, { inventory: inventory, setShow: setShow, setItemInfo: setItemInfo })] })) })), (0, jsx_runtime_15.jsx)(DeleteModal_4.default, { show: show, handleClose: handleClose, itemInfo: itemInfo, handleDeleteItem: handleDeleteItem })] })) })));
    }
    exports.default = InventoryList;
});
define("pages/InventoryList/index", ["require", "exports", "pages/InventoryList/InventoryList"], function (require, exports, InventoryList_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    InventoryList_1 = __importDefault(InventoryList_1);
    exports.default = InventoryList_1.default;
});
define("pages/InventoryDetails/InventoryDetails", ["require", "exports", "react/jsx-runtime", "react-router-dom", "../../assets/icons/arrow_back-24px.svg", "../../assets/icons/edit_white-24px.svg", "react", "components/Button/index", "utils/apiFunctions", "./InventoryDetails.scss"], function (require, exports, jsx_runtime_16, react_router_dom_10, arrow_back_24px_svg_4, edit_white_24px_svg_2, react_6, Button_7, apiFunctions_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    arrow_back_24px_svg_4 = __importDefault(arrow_back_24px_svg_4);
    edit_white_24px_svg_2 = __importDefault(edit_white_24px_svg_2);
    Button_7 = __importDefault(Button_7);
    const InventoryDetails = () => {
        const { itemId } = (0, react_router_dom_10.useParams)();
        const [item, setItem] = (0, react_6.useState)({});
        (0, react_6.useEffect)(() => {
            (0, apiFunctions_6.getSingleItem)(itemId, setItem);
        }, [itemId]);
        return ((0, jsx_runtime_16.jsx)("main", Object.assign({ className: "main" }, { children: (0, jsx_runtime_16.jsx)("div", Object.assign({ className: "main__wrapper" }, { children: (0, jsx_runtime_16.jsx)("div", Object.assign({ className: "card" }, { children: (0, jsx_runtime_16.jsxs)("section", Object.assign({ className: 'inventory-details' }, { children: [(0, jsx_runtime_16.jsxs)("div", Object.assign({ className: "inventory-details__header-container" }, { children: [(0, jsx_runtime_16.jsxs)("div", Object.assign({ className: "inventory-details__header" }, { children: [(0, jsx_runtime_16.jsx)(react_router_dom_10.Link, Object.assign({ to: '/inventory' }, { children: (0, jsx_runtime_16.jsx)("img", { src: arrow_back_24px_svg_4.default, alt: "Go Back" }) })), (0, jsx_runtime_16.jsx)("h1", Object.assign({ className: "inventory-details__title" }, { children: item.itemName }))] })), (0, jsx_runtime_16.jsx)("div", Object.assign({ className: "inventory-details__button-container" }, { children: (0, jsx_runtime_16.jsx)(Button_7.default, { image: edit_white_24px_svg_2.default, text: "Edit", specialButton: "button--special", specialClass: "button__text--special" }) }))] })), (0, jsx_runtime_16.jsxs)("div", Object.assign({ className: 'inventory-details__container' }, { children: [(0, jsx_runtime_16.jsxs)("div", Object.assign({ className: 'inventory-details__details-container' }, { children: [(0, jsx_runtime_16.jsxs)("article", Object.assign({ className: 'inventory-details__details' }, { children: [(0, jsx_runtime_16.jsx)("h2", Object.assign({ className: 'inventory-details__subtitle' }, { children: "Item Description:" })), (0, jsx_runtime_16.jsx)("p", Object.assign({ className: 'inventory-details__info' }, { children: item.description }))] })), (0, jsx_runtime_16.jsxs)("article", Object.assign({ className: 'inventory-details__details' }, { children: [(0, jsx_runtime_16.jsx)("h2", Object.assign({ className: 'inventory-details__subtitle' }, { children: "Category:" })), (0, jsx_runtime_16.jsx)("p", Object.assign({ className: 'inventory-details__info' }, { children: item.category }))] }))] })), (0, jsx_runtime_16.jsxs)("div", Object.assign({ className: 'inventory-details__details-container' }, { children: [(0, jsx_runtime_16.jsxs)("article", Object.assign({ className: 'inventory-details__details' }, { children: [(0, jsx_runtime_16.jsx)("h2", Object.assign({ className: 'inventory-details__subtitle' }, { children: "Status:" })), (0, jsx_runtime_16.jsx)("p", Object.assign({ className: `inventory-details__info inventory-details__info--status ${item.status === "In Stock" ? "inventory-details__info--in" : "inventory-details__info--out"}` }, { children: item.status }))] })), (0, jsx_runtime_16.jsxs)("article", Object.assign({ className: 'inventory-details__details' }, { children: [(0, jsx_runtime_16.jsx)("h2", Object.assign({ className: 'inventory-details__subtitle' }, { children: "Warehouse:" })), (0, jsx_runtime_16.jsx)("p", Object.assign({ className: 'inventory-details__info' }, { children: item.warehouseName }))] })), (0, jsx_runtime_16.jsxs)("article", Object.assign({ className: 'inventory-details__details' }, { children: [(0, jsx_runtime_16.jsx)("h2", Object.assign({ className: 'inventory-details__subtitle' }, { children: "Quantity:" })), (0, jsx_runtime_16.jsx)("p", Object.assign({ className: 'inventory-details__info' }, { children: item.quantity }))] }))] }))] }))] })) })) })) })));
    };
    exports.default = InventoryDetails;
});
define("pages/InventoryDetails/index", ["require", "exports", "pages/InventoryDetails/InventoryDetails"], function (require, exports, InventoryDetails_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    InventoryDetails_1 = __importDefault(InventoryDetails_1);
    exports.default = InventoryDetails_1.default;
});
define("components/InventoryForm/InventoryForm", ["require", "exports", "react/jsx-runtime", "components/Button/index", "../../assets/icons/add_white_24dp.svg", "react-router-dom", "react", "utils/apiFunctions", "components/ErrorMessage/index", "./InventoryForm.scss"], function (require, exports, jsx_runtime_17, Button_8, add_white_24dp_svg_4, react_router_dom_11, react_7, apiFunctions_7, ErrorMessage_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Button_8 = __importDefault(Button_8);
    add_white_24dp_svg_4 = __importDefault(add_white_24dp_svg_4);
    ErrorMessage_3 = __importDefault(ErrorMessage_3);
    const InventoryForm = (props) => {
        const { item } = props;
        const { itemId } = (0, react_router_dom_11.useParams)();
        const navigate = (0, react_router_dom_11.useNavigate)();
        const [itemTitle, setItemTitle] = (0, react_7.useState)("");
        const [itemDescription, setItemDescription] = (0, react_7.useState)("");
        const [itemCategory, setItemCategory] = (0, react_7.useState)("");
        const [itemStatus, setItemStatus] = (0, react_7.useState)("");
        const [itemQuantity, setItemQuantity] = (0, react_7.useState)("");
        const [itemWarehouse, setItemWarehouse] = (0, react_7.useState)("");
        const [warehouses, setWarehouses] = (0, react_7.useState)([]);
        const [nameRequired, setNameRequired] = (0, react_7.useState)(false);
        const [descriptionRequired, setDescriptionRequired] = (0, react_7.useState)(false);
        const [categoryRequired, setCategoryRequired] = (0, react_7.useState)(false);
        const [statusRequired, setStatusRequired] = (0, react_7.useState)(false);
        const [quantityRequired, setQuantityRequired] = (0, react_7.useState)(false);
        const [warehouseNameRequired, setWarehouseNameRequired] = (0, react_7.useState)(false);
        const [show, setShow] = (0, react_7.useState)(true);
        (0, react_7.useEffect)(() => {
            if (itemId) {
                setItemTitle(item.itemName);
                setItemDescription(item.description);
                setItemCategory(item.category);
                setItemStatus(item.status);
                setItemQuantity(String(item.quantity));
                setItemWarehouse(item.warehouseName);
            }
            (0, apiFunctions_7.getAllWarehouses)(setWarehouses);
        }, [item, itemId]);
        const handleEdit = (e, id) => {
            e.preventDefault();
            const updatedItem = {
                itemName: itemTitle,
                description: itemDescription,
                category: itemCategory,
                status: itemStatus,
                quantity: itemStatus === "In Stock" ? parseInt(itemQuantity) : 0,
                warehouseName: itemWarehouse
            };
            (0, apiFunctions_7.editItem)(id, updatedItem);
            setTimeout(() => {
                navigate('/inventory');
            }, 3000);
        };
        const handleAdd = (e) => {
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
            };
            (0, apiFunctions_7.postNewItem)(newItem);
            setTimeout(() => {
                navigate('/inventory');
            }, 3000);
        };
        const handleOnChange = (e) => {
            const { name: inputName, value } = e.target;
            switch (inputName) {
                case "itemName":
                    setItemTitle(value);
                    setNameRequired(false);
                    break;
                case "description":
                    setItemDescription(value);
                    setDescriptionRequired(false);
                    break;
                case "category":
                    setItemCategory(value);
                    setCategoryRequired(false);
                    break;
                case "status":
                    setItemStatus(value);
                    setStatusRequired(false);
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
        };
        return ((0, jsx_runtime_17.jsxs)("form", Object.assign({ className: "inventory-form", onSubmit: itemId ? (e) => handleEdit(e, itemId) : (e) => handleAdd(e) }, { children: [(0, jsx_runtime_17.jsxs)("div", Object.assign({ className: "inventory-form__wrapper" }, { children: [(0, jsx_runtime_17.jsxs)("div", Object.assign({ className: "inventory-form__container" }, { children: [(0, jsx_runtime_17.jsx)("h2", Object.assign({ className: "inventory-form__sub-header" }, { children: "Item Details" })), (0, jsx_runtime_17.jsxs)("div", Object.assign({ className: "inventory-form__form-group" }, { children: [(0, jsx_runtime_17.jsx)("label", Object.assign({ htmlFor: "itemName", className: "inventory-form__label" }, { children: "Item Name" })), (0, jsx_runtime_17.jsx)("input", { type: "text", id: "itemName", name: "itemName", value: itemTitle, onChange: handleOnChange, className: `inventory-form__input ${nameRequired ? "inventory-form__input--error" : ""}`, placeholder: "Item Name" }), nameRequired && (0, jsx_runtime_17.jsx)(ErrorMessage_3.default, {})] })), (0, jsx_runtime_17.jsxs)("div", Object.assign({ className: "inventory-form__form-group" }, { children: [(0, jsx_runtime_17.jsx)("label", Object.assign({ htmlFor: "description", className: "inventory-form__label" }, { children: "Description" })), (0, jsx_runtime_17.jsx)("textarea", { className: `inventory-form__input inventory-form__input--textarea ${descriptionRequired ? "inventory-form__input--error" : ""}`, id: "description", name: "description", defaultValue: item ? itemDescription : itemDescription, onChange: handleOnChange, placeholder: "Please enter a brief item description..." }), descriptionRequired && (0, jsx_runtime_17.jsx)(ErrorMessage_3.default, {})] })), (0, jsx_runtime_17.jsxs)("div", Object.assign({ className: "inventory-form__form-group" }, { children: [(0, jsx_runtime_17.jsx)("label", Object.assign({ htmlFor: "category", className: "inventory-form__label" }, { children: "Category" })), (0, jsx_runtime_17.jsxs)("select", Object.assign({ className: `inventory-form__input inventory-form__input--select ${categoryRequired ? "inventory-form__input--error" : ""}`, id: "category", name: "category", onChange: handleOnChange, defaultValue: "" }, { children: [(0, jsx_runtime_17.jsx)("option", Object.assign({ value: "", disabled: true }, { children: item ? itemCategory : "Please Select" })), (0, jsx_runtime_17.jsx)("option", Object.assign({ value: "Electronics" }, { children: "Electronics" })), (0, jsx_runtime_17.jsx)("option", Object.assign({ value: "Gear" }, { children: "Gear" })), (0, jsx_runtime_17.jsx)("option", Object.assign({ value: "Apparel" }, { children: "Apparel" })), (0, jsx_runtime_17.jsx)("option", Object.assign({ value: "Accessories" }, { children: "Accessories" })), (0, jsx_runtime_17.jsx)("option", Object.assign({ value: "Health" }, { children: "Health" }))] })), categoryRequired && (0, jsx_runtime_17.jsx)(ErrorMessage_3.default, {})] }))] })), (0, jsx_runtime_17.jsxs)("div", Object.assign({ className: "inventory-form__container" }, { children: [(0, jsx_runtime_17.jsx)("h2", Object.assign({ className: "inventory-form__sub-header" }, { children: "Item Availability" })), (0, jsx_runtime_17.jsxs)("fieldset", Object.assign({ className: "inventory-form__form-group" }, { children: [(0, jsx_runtime_17.jsx)("legend", Object.assign({ className: "inventory-form__label" }, { children: "Status" })), (0, jsx_runtime_17.jsxs)("div", Object.assign({ className: "inventory-form__radio-container" }, { children: [(0, jsx_runtime_17.jsxs)("div", Object.assign({ className: "inventory-form__radio-group" }, { children: [(0, jsx_runtime_17.jsx)("input", { type: "radio", className: "inventory-form__input--radio", id: "in-stock", name: "status", onChange: handleOnChange, value: "In Stock", onClick: () => setShow(true), checked: itemStatus === 'In Stock' ? true : false }), (0, jsx_runtime_17.jsx)("label", Object.assign({ htmlFor: "in-stock", className: "inventory-form__label inventory-form__label--radio" }, { children: "In Stock" }))] })), (0, jsx_runtime_17.jsxs)("div", Object.assign({ className: "inventory-form__radio-group" }, { children: [(0, jsx_runtime_17.jsx)("input", { type: "radio", className: "inventory-form__input--radio", id: "out-of-stock", name: "status", onChange: handleOnChange, onClick: () => setShow(false), value: "Out of Stock", checked: itemStatus === 'Out of Stock' ? true : false }), (0, jsx_runtime_17.jsx)("label", Object.assign({ htmlFor: "out-of-stock", className: "inventory-form__label inventory-form__label--radio" }, { children: "Out of Stock" }))] }))] })), statusRequired && (0, jsx_runtime_17.jsx)(ErrorMessage_3.default, {})] })), show ?
                                    (0, jsx_runtime_17.jsxs)("div", Object.assign({ className: "inventory-form__form-group" }, { children: [(0, jsx_runtime_17.jsx)("label", Object.assign({ htmlFor: "quantity", className: "inventory-form__label" }, { children: "Quantity" })), (0, jsx_runtime_17.jsx)("input", { type: "number", className: `inventory-form__input ${quantityRequired ? "inventory-form__input--error" : ""}`, id: "quantity", name: "quantity", onChange: handleOnChange, value: itemQuantity, min: 0, placeholder: "0" }), quantityRequired && (0, jsx_runtime_17.jsx)(ErrorMessage_3.default, {})] })) : null, (0, jsx_runtime_17.jsxs)("div", Object.assign({ className: "inventory-form__form-group" }, { children: [(0, jsx_runtime_17.jsx)("label", Object.assign({ htmlFor: "warehouseName", className: "inventory-form__label" }, { children: "Warehouse" })), (0, jsx_runtime_17.jsxs)("select", Object.assign({ className: `inventory-form__input inventory-form__input--select ${warehouseNameRequired ? "inventory-form__input--error" : ""}`, id: "warehouseName", name: "warehouseName", defaultValue: "" }, { children: [(0, jsx_runtime_17.jsx)("option", Object.assign({ value: "", disabled: true }, { children: item ? itemWarehouse : "Please Select" })), warehouses.map(warehouse => {
                                                    return (0, jsx_runtime_17.jsx)("option", { children: warehouse.name }, warehouse.id);
                                                })] })), warehouseNameRequired && (0, jsx_runtime_17.jsx)(ErrorMessage_3.default, {})] }))] }))] })), (0, jsx_runtime_17.jsxs)("div", Object.assign({ className: "inventory-form__buttons" }, { children: [(0, jsx_runtime_17.jsx)(react_router_dom_11.Link, Object.assign({ to: '/inventory', className: "inventory-form__link" }, { children: (0, jsx_runtime_17.jsx)(Button_8.default, { text: "Cancel" }) })), (0, jsx_runtime_17.jsx)(Button_8.default, { text: item ? "Save" : "Add Item", image: item ? false : add_white_24dp_svg_4.default })] }))] })));
    };
    exports.default = InventoryForm;
});
define("pages/AddInventoryItem/AddInventoryItem", ["require", "exports", "react/jsx-runtime", "react-router-dom", "../../assets/icons/arrow_back-24px.svg", "components/InventoryForm/InventoryForm", "./AddInventoryItem.scss"], function (require, exports, jsx_runtime_18, react_router_dom_12, arrow_back_24px_svg_5, InventoryForm_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    arrow_back_24px_svg_5 = __importDefault(arrow_back_24px_svg_5);
    InventoryForm_1 = __importDefault(InventoryForm_1);
    const AddInventoryItem = () => {
        return ((0, jsx_runtime_18.jsx)("main", Object.assign({ className: "main" }, { children: (0, jsx_runtime_18.jsx)("div", Object.assign({ className: "main__wrapper" }, { children: (0, jsx_runtime_18.jsx)("div", Object.assign({ className: "card" }, { children: (0, jsx_runtime_18.jsxs)("section", Object.assign({ className: "add-item" }, { children: [(0, jsx_runtime_18.jsxs)("div", Object.assign({ className: "add-item__header-container" }, { children: [(0, jsx_runtime_18.jsx)(react_router_dom_12.Link, Object.assign({ to: '/' }, { children: (0, jsx_runtime_18.jsx)("img", { src: arrow_back_24px_svg_5.default, alt: "Go Back" }) })), (0, jsx_runtime_18.jsx)("h1", Object.assign({ className: "add-item__title" }, { children: "Add Inventory Item" }))] })), (0, jsx_runtime_18.jsx)(InventoryForm_1.default, {})] })) })) })) })));
    };
    exports.default = AddInventoryItem;
});
define("pages/AddInventoryItem/index", ["require", "exports", "pages/AddInventoryItem/AddInventoryItem"], function (require, exports, AddInventoryItem_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    AddInventoryItem_1 = __importDefault(AddInventoryItem_1);
    exports.default = AddInventoryItem_1.default;
});
define("pages/EditInventoryItem/EditInventoryItem", ["require", "exports", "react/jsx-runtime", "react-router-dom", "../../assets/icons/arrow_back-24px.svg", "components/InventoryForm/InventoryForm", "react", "utils/apiFunctions", "./EditInventoryItem.scss"], function (require, exports, jsx_runtime_19, react_router_dom_13, arrow_back_24px_svg_6, InventoryForm_2, react_8, apiFunctions_8) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    arrow_back_24px_svg_6 = __importDefault(arrow_back_24px_svg_6);
    InventoryForm_2 = __importDefault(InventoryForm_2);
    const EditInventoryItem = () => {
        const { itemId } = (0, react_router_dom_13.useParams)();
        const [item, setItem] = (0, react_8.useState)({});
        (0, react_8.useEffect)(() => {
            (0, apiFunctions_8.getSingleItem)(itemId, setItem);
        }, [itemId]);
        return ((0, jsx_runtime_19.jsx)("main", Object.assign({ className: "main" }, { children: (0, jsx_runtime_19.jsx)("div", Object.assign({ className: "main__wrapper" }, { children: (0, jsx_runtime_19.jsx)("div", Object.assign({ className: "card" }, { children: (0, jsx_runtime_19.jsxs)("section", Object.assign({ className: "edit-item" }, { children: [(0, jsx_runtime_19.jsxs)("div", Object.assign({ className: "edit-item__header-container" }, { children: [(0, jsx_runtime_19.jsx)(react_router_dom_13.Link, Object.assign({ to: '/inventory' }, { children: (0, jsx_runtime_19.jsx)("img", { src: arrow_back_24px_svg_6.default, alt: "Go Back" }) })), (0, jsx_runtime_19.jsx)("h1", Object.assign({ className: "edit-item__title" }, { children: "Edit Inventory Item" }))] })), (0, jsx_runtime_19.jsx)(InventoryForm_2.default, { item: item })] })) })) })) })));
    };
    exports.default = EditInventoryItem;
});
define("pages/EditInventoryItem/index", ["require", "exports", "pages/EditInventoryItem/EditInventoryItem"], function (require, exports, EditInventoryItem_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    EditInventoryItem_1 = __importDefault(EditInventoryItem_1);
    exports.default = EditInventoryItem_1.default;
});
define("App", ["require", "exports", "react/jsx-runtime", "react-router-dom", "components/PageHeader/index", "components/PageFooter/index", "pages/WarehouseList/index", "pages/WarehouseDetails/index", "pages/AddWarehouse/index", "pages/EditWarehouse/index", "pages/InventoryList/index", "pages/InventoryDetails/index", "pages/AddInventoryItem/index", "pages/EditInventoryItem/index", "./App.scss"], function (require, exports, jsx_runtime_20, react_router_dom_14, PageHeader_2, PageFooter_2, WarehouseList_2, WarehouseDetails_2, AddWarehouse_2, EditWarehouse_2, InventoryList_2, InventoryDetails_2, AddInventoryItem_2, EditInventoryItem_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    PageHeader_2 = __importDefault(PageHeader_2);
    PageFooter_2 = __importDefault(PageFooter_2);
    WarehouseList_2 = __importDefault(WarehouseList_2);
    WarehouseDetails_2 = __importDefault(WarehouseDetails_2);
    AddWarehouse_2 = __importDefault(AddWarehouse_2);
    EditWarehouse_2 = __importDefault(EditWarehouse_2);
    InventoryList_2 = __importDefault(InventoryList_2);
    InventoryDetails_2 = __importDefault(InventoryDetails_2);
    AddInventoryItem_2 = __importDefault(AddInventoryItem_2);
    EditInventoryItem_2 = __importDefault(EditInventoryItem_2);
    function App() {
        return ((0, jsx_runtime_20.jsx)(jsx_runtime_20.Fragment, { children: (0, jsx_runtime_20.jsxs)(react_router_dom_14.BrowserRouter, { children: [(0, jsx_runtime_20.jsx)(PageHeader_2.default, {}), (0, jsx_runtime_20.jsxs)(react_router_dom_14.Routes, { children: [(0, jsx_runtime_20.jsx)(react_router_dom_14.Route, { path: "/*", element: (0, jsx_runtime_20.jsx)(WarehouseList_2.default, {}) }), (0, jsx_runtime_20.jsx)(react_router_dom_14.Route, { path: "warehouses", element: (0, jsx_runtime_20.jsx)(WarehouseList_2.default, {}) }), (0, jsx_runtime_20.jsx)(react_router_dom_14.Route, { path: "warehouses/:warehouseId", element: (0, jsx_runtime_20.jsx)(WarehouseDetails_2.default, {}) }), (0, jsx_runtime_20.jsx)(react_router_dom_14.Route, { path: "warehouses/add", element: (0, jsx_runtime_20.jsx)(AddWarehouse_2.default, {}) }), (0, jsx_runtime_20.jsx)(react_router_dom_14.Route, { path: "warehouses/edit/:warehouseId", element: (0, jsx_runtime_20.jsx)(EditWarehouse_2.default, {}) }), (0, jsx_runtime_20.jsx)(react_router_dom_14.Route, { path: "inventory", element: (0, jsx_runtime_20.jsx)(InventoryList_2.default, {}) }), (0, jsx_runtime_20.jsx)(react_router_dom_14.Route, { path: "inventory/:itemId", element: (0, jsx_runtime_20.jsx)(InventoryDetails_2.default, {}) }), (0, jsx_runtime_20.jsx)(react_router_dom_14.Route, { path: "inventory/add", element: (0, jsx_runtime_20.jsx)(AddInventoryItem_2.default, {}) }), (0, jsx_runtime_20.jsx)(react_router_dom_14.Route, { path: "inventory/edit/:itemId", element: (0, jsx_runtime_20.jsx)(EditInventoryItem_2.default, {}) })] }), (0, jsx_runtime_20.jsx)(PageFooter_2.default, {})] }) }));
    }
    exports.default = App;
});
define("index", ["require", "exports", "react/jsx-runtime", "react", "react-dom", "App"], function (require, exports, jsx_runtime_21, react_9, react_dom_1, App_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_9 = __importDefault(react_9);
    react_dom_1 = __importDefault(react_dom_1);
    App_1 = __importDefault(App_1);
    react_dom_1.default.render((0, jsx_runtime_21.jsx)(react_9.default.StrictMode, { children: (0, jsx_runtime_21.jsx)(App_1.default, {}) }), document.getElementById('root'));
});
define("components/WarehouseForm/index", ["require", "exports", "components/WarehouseForm/WarehouseForm"], function (require, exports, WarehouseForm_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    WarehouseForm_3 = __importDefault(WarehouseForm_3);
    exports.default = WarehouseForm_3.default;
});
