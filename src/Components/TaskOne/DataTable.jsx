import React, { useState, useMemo, useEffect } from 'react';
import ColumnVisibilityToggle from './ColumnVisibilityToggle';
import ExportButtons from './ExportButtons';



const DataTable = ({ columns, data = [], isLoading = false, error = null,toggleColumn ,title}) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [filterText, setFilterText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const visibleColumns = useMemo(() => columns.filter(col => col.visible !== false), [columns]);

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;
    const sorted = [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
      }
      return sortConfig.direction === 'asc'
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
    return sorted;
  }, [data, sortConfig]);

  const filteredData = useMemo(() => {
    return sortedData.filter(row =>
      visibleColumns.some(col =>
        String(row[col.key]).toLowerCase().includes(filterText.toLowerCase())
      )
    );
  }, [sortedData, filterText, visibleColumns]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, currentPage, pageSize]);

  const totalPages = Math.ceil(filteredData.length / pageSize);

  const requestSort = key => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data.length) return <p>No data available</p>;

  return (
    <>
     <div className='innerheader'>
 <h1>{title}</h1>
        </div>
      <div className="table-toolbar">

  <div className="toolbar-section">
    <input
      type="text"
      placeholder="Search..."
      value={filterText}
      onChange={e => setFilterText(e.target.value)}
      className="search-input"
    />
  </div>

 <div className="toolbar-section column-toggle">
    <ColumnVisibilityToggle columns={columns} toggleColumn={toggleColumn} />
  </div>
  <div className="toolbar-section export-buttons">
    <ExportButtons data={data} columns={columns} />
  </div>

 
 
</div>

<div className="datatable">
    

      <table>
        <thead>
          <tr>
            {visibleColumns.map(col => (
              <th key={col.key} onClick={() => col.sortable && requestSort(col.key)}>
                {col.label}
                {sortConfig.key === col.key && (sortConfig.direction === 'asc' ? ' ▲' : ' ▼')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, i) => (
            <tr key={i}>
              {visibleColumns.map(col => (
                <td key={col.key}>
                  {col.render ? col.render(row) : col.format ? col.format(row[col.key]) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
 <nav className="pagination-container">
  <ul className="pagination">
    <li className="page-item">
      <button
        className="page-link"
        onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
        disabled={currentPage === 1}
      >
        Prev
      </button>
    </li>

    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
      <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
        <button className="page-link" onClick={() => setCurrentPage(page)}>
          {page}
        </button>
      </li>
    ))}

    <li className="page-item">
      <button
        className="page-link"
        onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </li>
  </ul>

  <div className="pagination-options">
    <span>
      Page {currentPage} of {totalPages}
    </span>
    <select onChange={e => setPageSize(Number(e.target.value))} value={pageSize}>
      {[10, 25, 50, 100].map(size => (
        <option key={size} value={size}>
          {size} per page
        </option>
      ))}
    </select>
  </div>
</nav>

    </div>
    </>
    
  );
};

export default DataTable;
