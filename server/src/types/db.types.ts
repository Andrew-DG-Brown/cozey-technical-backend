export type Products = {
    lineItems: {
        lineItemId: string;
        lineItemName: string;
    }[];
    products: {
        productId: string;
        lineItemId: string;
        warehouseShelfNum: number;
        productName: string;
    }[]
}

export type Orders = {
    orderId: string;
    orderTotal: number;
    orderDate: string;
    shippingAddress: string;
    customerName: string;
    customerEmail: string;
    lineItems: {
        lineItemId: string;
        productId: string;
        productName: string;
        price: number;
    }[]
}[]