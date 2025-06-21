import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import axios from 'axios';

const intialcolumns = [
  { key: 'id', label: 'ID', sortable: true, visible: true },
  { key: 'title', label: 'Title', sortable: true, visible: true },
  { key: 'body', label: 'Content', sortable: false, visible: true },
  {
    key: 'actions',
    label: 'Actions',
    render: (row) => <button onClick={() => alert(`Post ID: ${row.id}`)} className='btn btn-success btn-sm'>View</button>,
    visible: true,
  },
];

const PostsList = () => {
  const [posts, setPosts] = useState([]);
    const [columns, setColumns] = useState(intialcolumns);
  const [loading, setLoading] = useState(true);
  const  [error, setError] = useState(null);

   useEffect(() => {
  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
         setPosts([]);
      setError(error.message);
      setLoading(false);
    }
  };

  fetchPosts();
}, []);

    const toggleColumn = (key) => {
    setColumns((prevCols) =>
      prevCols.map((col) =>
        col.key === key ? { ...col, visible: !col.visible } : col
      )
    );
  };


  return (
    <>
      
      <DataTable columns={columns} data={posts} isLoading={loading} error={error} toggleColumn={toggleColumn} title="Posts List"/>
    </>
  );
};

export default PostsList;