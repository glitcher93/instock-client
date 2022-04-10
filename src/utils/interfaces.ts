import { Dispatch, SetStateAction } from "react"

export interface TabletHeadingsProps {
    headings: string[]
    specialClasses?: string[]
}

export interface WarehouseObject {
    name: string
    address: string
    city: string
    country: string
    contact: ContactObj
}

export interface SingleWarehouse {
    id: string
    name: string
    address: string
    city: string
    country: string
    contact: ContactObj
}

export interface WarehouseStateObject {
    id: string
    name: string
    address: string
    city: string
    country: string
    contact: ContactObj
}

export interface ContactObj {
    name: string
    position: string
    phone: string
    email: string
}

export interface ItemObj {
    warehouseName: string
    itemName: string
    description: string
    category: string
    status: string
    quantity: number
}

export interface ItemStateObj {
    id: string
    warehouseID: string
    warehouseName: string
    itemName: string
    description: string
    category: string
    status: string
    quantity: number
}

export interface InvFormProp  {
    item?: any
}

export type WarehouseFormProps = {
    warehouse?: any
    contact?: any
} | {
    warehouse?: never
    contact?: never
}

export interface Info {
    id: string
    name: string
}

export interface DetailItemProps {
    item: ItemStateObj,
    setShow: Dispatch<SetStateAction<boolean>>
    setWarehouseItemInfo: Dispatch<SetStateAction<Info>>
}

export interface ItemProps {
    setShow: Dispatch<SetStateAction<boolean>>
    warehouse?: SingleWarehouse
    item?: ItemStateObj
    setWarehouseInfo?: Dispatch<SetStateAction<Info>>
    setItemInfo?: Dispatch<SetStateAction<Info>> 
}

export interface ItemListProps {
    setShow: Dispatch<SetStateAction<boolean>>
    warehouses?: WarehouseStateObject[],
    inventory?: ItemStateObj[]
    warehouseInventory?: ItemStateObj[]
    detail?: boolean
    setWarehouseInfo?: Dispatch<SetStateAction<Info>>
    setItemInfo?: Dispatch<SetStateAction<Info>>
    setWarehouseItemInfo?: any
}

export interface ButtonProps {
    text: string
    image?: string
    altText?: string
    specialButton?: string
    specialClass?: string
    handleClose?: () => void
    warehouseInfo?: Info
    itemInfo?: Info
    warehouseItemInfo?: Info
    handleDeleteWarehouse?: (arg0: string) => void
    handleDeleteItem?: (arg0: string) => void
    handleDeleteItemFromWarehouse?: (arg0: string) => void
}

export interface ModalProps {
    show: boolean
    handleClose: () => void
    warehouseInfo?: Info
    itemInfo?: Info
    warehouseItemInfo?: Info
    handleDeleteWarehouse?: (arg0: string) => void
    handleDeleteItem?: (arg0: string) => void
    handleDeleteItemFromWarehouse?: (arg0: string) => void
}
