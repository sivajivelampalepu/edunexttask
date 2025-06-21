import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import axios from 'axios';


const initialColumns = [
  {
    key: 'id',
    label: 'ID',
    sortable: true,
    filterable: true,
    exportable: true,
    visible: true
  },
  {
    key: 'title',
    label: 'Title',
    sortable: true,
    filterable: true,
    exportable: true,
    visible: true
  },
  {
    key: 'price',
    label: 'Price',
    sortable: true,
    filterable: false,
    exportable: true,
    visible: true,
    format: (value) => `$${value}`
  },
  {
    key: 'stock',
    label: 'Stock',
    sortable: true,
    filterable: false,
    exportable: true,
    visible: true
  },
  {
    key: 'category',
    label: 'Category',
    sortable: true,
    filterable: true,
    exportable: true,
    visible: true
  },
  {
    key: 'actions',
    label: 'Actions',
    render: (row) => <button onClick={() => alert(`Product ID: ${row.id}`)} className='btn btn-success btn-sm'>View</button>,
    visible: true
  }
];

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [columns, setColumns] = useState(initialColumns);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleColumn = (key) => {
    setColumns((prevCols) =>
      prevCols.map((col) =>
        col.key === key ? { ...col, visible: !col.visible } : col
      )
    );
  };

 useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      setProducts(response.data.products);
      setLoading(false);
    } catch (error) {
         setProducts([]);
      setError(error.message);
      setLoading(false);
    }
  };

  fetchProducts();
}, []);

  return (
    <>
     
      <DataTable columns={columns} data={products} isLoading={loading} error={error} toggleColumn={toggleColumn} title="Products Table" />
    </>
  );
};

export default ProductsTable;