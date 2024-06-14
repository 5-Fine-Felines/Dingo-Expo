// Fetch categories from backend
fetch('/api/categories')
  .then(response => response.json())
  .then(categories => {
    // Display categories in UI
    console.log(categories);
  })
  .catch(error => console.error('Error fetching categories:', error));

// Add new category
fetch('/api/categories', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    category_name: 'New Category',
    description: 'Description of the new category',
  }),
})
  .then(response => response.json())
  .then(newCategory => {
    console.log('New category added:', newCategory);
  })
  .catch(error => console.error('Error adding category:', error));

// Update existing category
const categoryIdToUpdate = 1;
fetch(`/api/categories/${categoryIdToUpdate}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    category_name: 'Updated Category Name',
    description: 'Updated Description',
  }),
})
  .then(response => response.json())
  .then(updatedCategory => {
    console.log('Category updated:', updatedCategory);
  })
  .catch(error => console.error('Error updating category:', error));

// Delete category
const categoryIdToDelete = 1;
fetch(`/api/categories/${categoryIdToDelete}`, {
  method: 'DELETE',
})
  .then(response => {
    if (response.ok) {
      console.log('Category deleted successfully');
    } else {
      throw new Error('Failed to delete category');
    }
  })
  .catch(error => console.error('Error deleting category:', error));
