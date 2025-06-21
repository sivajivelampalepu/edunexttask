import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import axios from 'axios';


const intialcolumns = [
  { key: 'id', label: 'ID', sortable: true, visible: true },
  { key: 'name', label: 'Name', sortable: true, visible: true },
  { key: 'email', label: 'Email', sortable: false, visible: true },
  {
    key: 'actions',
    label: 'Actions',
    render: (row) => <button onClick={() => alert(`User ID: ${row.id}`)} className='btn btn-success btn-sm'>View</button>,
    visible: true,
  },
];

const UsersList = () => {
  const [users, setUsers] = useState([]);
   const [columns, setColumns] = useState(intialcolumns);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


   useEffect(() => {
  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
         setUsers([]);
      setError(error.message);
      setLoading(false);
    }
  };

  fetchUsers();
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

     
      <DataTable columns={columns} data={users} isLoading={loading} error={error} toggleColumn={toggleColumn} title="Users List" />
    </>
  );
};

export default UsersList;