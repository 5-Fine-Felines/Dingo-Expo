export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    category_id: string;
  };
  
  export type Category = {
    id: string;
    name: string;
  };
  
  export type Update = {
    id: string;
    title: string;
    content: string;
    created_at: string;
  };
  