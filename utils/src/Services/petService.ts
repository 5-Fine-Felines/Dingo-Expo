import { supabase } from '../../supabase';
import { Product } from './types';

// Fetch all products from the database
export const getProducts = async (): Promise<Product[] | null> => {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*');

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return null;
  }
};

// Fetch a single product by its ID
export const getProductById = async (id: string): Promise<Product | null> => {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};

// Create a new product in the database
export const createProduct = async (product: Omit<Product, 'id'>): Promise<Product | null> => {
  try {
    const { data, error } = await supabase
      .from('products')
      .insert([product]);

    if (error) throw error;
    return data ? data[0] : null;
  } catch (error) {
    console.error('Error creating product:', error);
    return null;
  }
};

// Update an existing product in the database
export const updateProduct = async (id: string, product: Partial<Product>): Promise<Product | null> => {
  try {
    const { data, error } = await supabase
      .from('products')
      .update(product)
      .eq('id', id);

    if (error) throw error;
    return data ? data[0] : null;
  } catch (error) {
    console.error('Error updating product:', error);
    return null;
  }
};

// Delete a product from the database
export const deleteProduct = async (id: string): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error deleting product:', error);
    return false;
  }
};
