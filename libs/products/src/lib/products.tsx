import { Component } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
}

export const exampleProducts: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    price: 100,
  },
  {
    id: '2',
    name: 'Product 2',
    price: 200,
  },
];

export default class SectionProduct extends Component<Product> {
  
}