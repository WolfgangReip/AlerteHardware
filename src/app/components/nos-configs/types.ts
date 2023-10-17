export interface Component {
    _id: string;
    name: string;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    components: Component[];
}
